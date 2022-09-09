import Mongoose from 'mongoose';

export default class ProviderConnection {
    constructor({ config, logger }) {
        this.config = config;
        this.logger = logger;
        this.connection = null;
        this.url = '';
        this.mongoose = Mongoose;
    }

    getMongoURL(configDB) {
        const { username, password, options, servers, dialect, database } =
            configDB;
        const userPass =
            username && password
                ? `${encodeURIComponent(username)}:${encodeURIComponent(
                      password
                  )}@`
                : null;
        const url = servers.reduce(
            (prev, cur) => prev + cur + ',',
            `${dialect}://${userPass}`
        );
        const urlParsed = `${url.substr(0, url.length - 1)}/${database}`;
        const authSource = `?authSource=${options.authSource}`;
        const authMechanism = `&authMechanism=${options.authMechanism}`;
        const replicaSet = options.replicaSet
            ? '&replicaSet=' + options.replicaSet
            : '';

        return urlParsed + authSource + replicaSet + authMechanism;
    }

    getConnectionOptions(config) {
        return config.db.options || {};
    }

    setEventListeners() {
        this.connection.on('connected', () =>
            this.logger.info('Mongodb connection stablished')
        );
        this.connection.on('disconnected', () =>
            this.logger.error('Mongodb connection lost')
        );
        this.connection.on('reconnected', () =>
            this.logger.info('Mongodb successfully reconnected')
        );
        this.connection.on('reconnectFailed', () => {
            this.logger.error('Mongodb reconnection fail, killing the process');
            process.exit(1);
        });
    }

    async connect() {
        if (this.connection) return this.connection;

        const opts = this.getConnectionOptions(this.config);
        this.url = this.getMongoURL(this.config.db);

        try {
            this.mongoose.pluralize(null);

            this.connection = await this.mongoose.createConnection(
                this.url,
                opts
            );

            this.setEventListeners();

            return this.connection;
        } catch (err) {
            this.logger.error('Error on connect Mongodb');

            throw err;
        }
    }
}

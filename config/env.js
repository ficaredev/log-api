export default {
    web: {
        port: process.env.PORT || 3000,
    },
    environment: process.env.NODE_ENV || 'local',
    db: {
        username: process.env.DB_USERNAME || 'user',
        password: process.env.DB_PASSWORD || 'password',
        database: process.env.DB_DATABASE || 'log',
        servers: [process.env.DB_SERVERS || '127.0.0.1:27017'],
        dialect: process.env.DB_DIALECT || 'mongodb',
        logging: process.env.DB_LOGGING || '',
        options: {
            authSource: 'admin',
            authMechanism: 'DEFAULT',
            replicaSet: '',
            useUnifiedTopology: true,
            readPreference: 'nearest',
            useNewUrlParser: true,
        },
        collections: {
            activity: {
                name: 'activities',
                version: '1.0',
            },
        },
    },
    integration: {
        rest: {},
        amqp: {},
    },
    stackError: {
        isVisible: false,
    },
};

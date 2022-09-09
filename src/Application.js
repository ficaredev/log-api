import configLoader from '../config/configLoader.js';
import container from './Container.js';

export default class Application {
    constructor() {
        this.container = null;
    }

    async loadSetup() {
        const config = await configLoader.loadEnvironment();

        this.container = await container.configureContainer(config);

        return this;
    }

    async start() {
        const { providerConnection, server } = this.container.cradle;

        await providerConnection.connect();
        await server.start();
    }
}

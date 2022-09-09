import Awilix from 'awilix';

import ActivitySchema from './infrastructure/database/mongo/schemas/activity/ActivitySchema.js';

import ClearObject from './infrastructure/tools/ClearObject.js';

import HttpConstants from './interface/http/constants/HttpConstants.js';

import HttpError from './interface/http/error/HttpError.js';
import HttpErrorWrapper from './interface/http/error/HttpErrorWrapper.js';

import HttpClientHandler from './infrastructure/clients/restConnection/HttpClientHandler.js';
import HttpClientMapper from './infrastructure/clients/restConnection/HttpClientMapper.js';
import ScopedRequest from './infrastructure/tools/ScopedRequest.js';

import RouterRegister from './interface/http/presentation/RouterRegister.js';

import SwaggerDocGenerator from './interface/http/swagger/SwaggerDocGenerator.js';

import Router from './interface/http/Router.js';
import Server from './interface/http/Server.js';

const container = Awilix.createContainer();

const configureContainer = async (config) => {
    container.register({
        config: Awilix.asValue(config),
        container: Awilix.asValue(container),
        router: Awilix.asFunction(Router),
        routerRegister: Awilix.asFunction(RouterRegister),
        server: Awilix.asFunction(Server).singleton(),

        // swagger
        swaggerDocGenerator: Awilix.asValue(SwaggerDocGenerator),

        // scope per request
        scopedRequest: Awilix.asClass(ScopedRequest).singleton(),

        // constants
        httpConstants: Awilix.asFunction(HttpConstants),

        // errors
        httpError: Awilix.asFunction(HttpError),
        httpErrorWrapper: Awilix.asFunction(HttpErrorWrapper),

        // tools
        clear: Awilix.asFunction(ClearObject),

        // clients
        httpClientHandler: Awilix.asFunction(HttpClientHandler),
        httpClientMapper: Awilix.asFunction(HttpClientMapper),

        // schemas
        activitySchema: Awilix.asValue(ActivitySchema),
    });

    await container.loadModules(
        [
            'src/domain/apis/**/*.js',
            'src/domain/rules/*.js',
            'src/domain/factories/*.js',
            'src/domain/services/**/*.js',
            'src/interface/http/**/*.js',
            'src/infrastructure/clients/*.js',
            'src/infrastructure/database/**/*.js',
            'src/infrastructure/logs/Logger.js',
            [
                'src/infrastructure/database/mongo/models/ActivityModel.js',
                {
                    register: Awilix.asFunction,
                    lifetime: Awilix.Lifetime.SINGLETON,
                },
            ],
            [
                'src/infrastructure/database/provider/ProviderConnection.js',
                {
                    register: Awilix.asClass,
                    lifetime: Awilix.Lifetime.SINGLETON,
                },
            ],
            [
                'src/infrastructure/logs/LoggerAdapter.js',
                {
                    register: Awilix.asClass,
                    lifetime: Awilix.Lifetime.SINGLETON,
                },
            ],
            [
                'src/infrastructure/logs/LoggerStreamAdapter.js',
                {
                    register: Awilix.asFunction,
                    lifetime: Awilix.Lifetime.SINGLETON,
                },
            ],
        ],
        {
            esModules: true,
            formatName: 'camelCase',
            resolverOptions: {
                injectionMode: Awilix.InjectionMode.PROXY,
            },
        }
    );
    return container;
};

export default { configureContainer, container };

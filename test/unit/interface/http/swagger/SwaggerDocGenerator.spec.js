import Chai from 'chai';
import Chance from 'chance';
import Joi from 'joi';

import SwaggerDocGenerator from '../../../../../src/interface/http/swagger/SwaggerDocGenerator.js';

const chance = new Chance();

describe('interface :: http :: swagger :: SwaggerDocGenerator', () => {
    describe('#generateSwagger', () => {
        context('when options parameter is not present', () => {
            it('return default swagger definition', () => {
                const routes = [
                    {
                        method: 'post',
                        path: '/test',
                        validation: {
                            body: Joi.object().keys({
                                name: Joi.string(),
                                age: Joi.number(),
                            }),
                        },
                    },
                ];

                const doc = SwaggerDocGenerator.generateSwagger(routes);

                Chai.expect(doc).to.be.deep.equal({
                    info: {
                        title: 'API swagger',
                        version: 'v1',
                        description: 'Auto generated api swagger',
                    },
                    basePath: '/api/v1',
                    schemes: ['http'],
                    paths: {
                        '/test': {
                            post: {
                                consumes: ['application/json'],
                                produces: ['application/json'],
                                description: '',
                                tags: [],
                                parameters: [
                                    {
                                        in: 'body',
                                        required: true,
                                        name: 'body',
                                        schema: {
                                            type: 'object',
                                            properties: {
                                                name: {
                                                    type: 'string',
                                                },
                                                age: {
                                                    type: 'number',
                                                    format: 'float',
                                                },
                                            },
                                            additionalProperties: false,
                                        },
                                    },
                                ],
                                responses: {},
                            },
                        },
                    },
                    swagger: '2.0',
                    definitions: {},
                    responses: {},
                    parameters: {},
                    securityDefinitions: {},
                    tags: [],
                });
            });
        });

        context('when options parameter is present', () => {
            it('returns swagger definition with options', () => {
                const routes = [
                    {
                        method: 'post',
                        path: '/test',
                        validation: {
                            body: Joi.object().keys({
                                name: Joi.string(),
                                age: Joi.number(),
                            }),
                        },
                    },
                ];

                const options = {
                    title: chance.string(),
                    version: `v${chance.integer({ min: 1, max: 10 })}`,
                    description: chance.string(),
                    basePath: `/${chance.string({ alpha: true, length: 5 })}`,
                    schemes: ['http'],
                };

                const doc = SwaggerDocGenerator.generateSwagger(
                    routes,
                    options
                );

                Chai.expect(doc).to.be.deep.equal({
                    info: {
                        title: options.title,
                        version: options.version,
                        description: options.description,
                    },
                    basePath: options.basePath,
                    schemes: ['http'],
                    paths: {
                        '/test': {
                            post: {
                                consumes: ['application/json'],
                                produces: ['application/json'],
                                description: '',
                                tags: [],
                                parameters: [
                                    {
                                        in: 'body',
                                        required: true,
                                        name: 'body',
                                        schema: {
                                            type: 'object',
                                            properties: {
                                                name: {
                                                    type: 'string',
                                                },
                                                age: {
                                                    type: 'number',
                                                    format: 'float',
                                                },
                                            },
                                            additionalProperties: false,
                                        },
                                    },
                                ],
                                responses: {},
                            },
                        },
                    },
                    swagger: '2.0',
                    definitions: {},
                    responses: {},
                    parameters: {},
                    securityDefinitions: {},
                    tags: [],
                });
            });
        });

        context('when query validation is present', () => {
            it('return swagger definition with query', () => {
                const routes = [
                    {
                        method: 'get',
                        path: '/test',
                        validation: {
                            query: Joi.object().keys({
                                foo: Joi.string().required(),
                            }),
                        },
                    },
                ];

                const doc = SwaggerDocGenerator.generateSwagger(routes);

                Chai.expect(doc).to.be.deep.equal({
                    info: {
                        title: 'API swagger',
                        version: 'v1',
                        description: 'Auto generated api swagger',
                    },
                    basePath: '/api/v1',
                    schemes: ['http'],
                    paths: {
                        '/test': {
                            get: {
                                consumes: ['application/json'],
                                produces: ['application/json'],
                                description: '',
                                tags: [],
                                parameters: [
                                    {
                                        in: 'query',
                                        type: 'string',
                                        name: 'foo',
                                        required: true,
                                    },
                                ],
                                responses: {},
                            },
                        },
                    },
                    swagger: '2.0',
                    definitions: {},
                    responses: {},
                    parameters: {},
                    securityDefinitions: {},
                    tags: [],
                });
            });
        });

        context('when params validation is present', () => {
            it('return swagger definition with params', () => {
                const routes = [
                    {
                        method: 'get',
                        path: '/test/:bar_bar/test2/:foo',
                        validation: {
                            params: Joi.object().keys({
                                bar: Joi.string().required(),
                            }),
                        },
                    },
                ];

                const doc = SwaggerDocGenerator.generateSwagger(routes);

                Chai.expect(doc).to.be.deep.equal({
                    info: {
                        title: 'API swagger',
                        version: 'v1',
                        description: 'Auto generated api swagger',
                    },
                    basePath: '/api/v1',
                    schemes: ['http'],
                    paths: {
                        '/test/{bar_bar}/test2/{foo}': {
                            get: {
                                consumes: ['application/json'],
                                produces: ['application/json'],
                                description: '',
                                tags: [],
                                parameters: [
                                    {
                                        in: 'path',
                                        name: 'bar',
                                        type: 'string',
                                        required: true,
                                    },
                                ],
                                responses: {},
                            },
                        },
                    },
                    swagger: '2.0',
                    definitions: {},
                    responses: {},
                    parameters: {},
                    securityDefinitions: {},
                    tags: [],
                });
            });
        });

        context('when headers validation is present', () => {
            it('return swagger definition with headers', () => {
                const routes = [
                    {
                        method: 'delete',
                        path: '/test',
                        validation: {
                            headers: Joi.object().keys({
                                'x-bar': Joi.string().required(),
                            }),
                        },
                    },
                ];

                const doc = SwaggerDocGenerator.generateSwagger(routes);

                Chai.expect(doc).to.be.deep.equal({
                    info: {
                        title: 'API swagger',
                        version: 'v1',
                        description: 'Auto generated api swagger',
                    },
                    basePath: '/api/v1',
                    schemes: ['http'],
                    paths: {
                        '/test': {
                            delete: {
                                consumes: ['application/json'],
                                produces: ['application/json'],
                                description: '',
                                tags: [],
                                parameters: [
                                    {
                                        in: 'header',
                                        name: 'x-bar',
                                        type: 'string',
                                        required: true,
                                    },
                                ],
                                responses: {},
                            },
                        },
                    },
                    swagger: '2.0',
                    definitions: {},
                    responses: {},
                    parameters: {},
                    securityDefinitions: {},
                    tags: [],
                });
            });
        });

        context('when error occurs during swagger generation', () => {
            it('return swagger definition with headers', () => {
                const routes = [
                    {
                        method: 'post',
                        path: '/test',
                        validation: {
                            body: Joi.object().keys({
                                foo: Joi.string().required(),
                            }),
                        },
                    },
                ];

                const doc = SwaggerDocGenerator.generateSwagger(routes, null);

                Chai.expect(doc).to.be.deep.equal({
                    info: {
                        title: 'API swagger',
                        version: 'v1',
                        description: 'Auto generated api swagger',
                    },
                    basePath: '/api/v1',
                    schemes: ['http'],
                    swagger: '2.0',
                    definitions: {},
                    responses: {},
                    parameters: {},
                    paths: {},
                    securityDefinitions: {},
                    tags: [],
                });
            });
        });

        context('when tags parameter is present', () => {
            it('returns swagger definition with tags filled correct', () => {
                const routes = [
                    {
                        method: 'post',
                        path: '/test',
                        validation: {
                            body: Joi.object().keys({
                                name: Joi.string(),
                                age: Joi.number(),
                            }),
                        },
                        tags: ['test'],
                    },
                ];

                const options = {
                    title: chance.string(),
                    version: `v${chance.integer({ min: 1, max: 10 })}`,
                    description: chance.string(),
                    basePath: `/${chance.string({ alpha: true, length: 5 })}`,
                    schemes: ['http'],
                };

                const doc = SwaggerDocGenerator.generateSwagger(
                    routes,
                    options
                );

                Chai.expect(doc).to.be.deep.equal({
                    info: {
                        title: options.title,
                        version: options.version,
                        description: options.description,
                    },
                    basePath: options.basePath,
                    schemes: ['http'],
                    paths: {
                        '/test': {
                            post: {
                                consumes: ['application/json'],
                                produces: ['application/json'],
                                description: '',
                                tags: ['test'],
                                parameters: [
                                    {
                                        in: 'body',
                                        required: true,
                                        name: 'body',
                                        schema: {
                                            type: 'object',
                                            properties: {
                                                name: {
                                                    type: 'string',
                                                },
                                                age: {
                                                    type: 'number',
                                                    format: 'float',
                                                },
                                            },
                                            additionalProperties: false,
                                        },
                                    },
                                ],
                                responses: {},
                            },
                        },
                    },
                    swagger: '2.0',
                    definitions: {},
                    responses: {},
                    parameters: {},
                    securityDefinitions: {},
                    tags: [],
                });
            });
        });

        context('when tags parameter is not array', () => {
            it('returns swagger definition with tags []', () => {
                const routes = [
                    {
                        method: 'post',
                        path: '/test',
                        validation: {
                            body: Joi.object().keys({
                                name: Joi.string(),
                                age: Joi.number(),
                            }),
                        },
                        tags: 'test',
                    },
                ];

                const options = {
                    title: chance.string(),
                    version: `v${chance.integer({ min: 1, max: 10 })}`,
                    description: chance.string(),
                    basePath: `/${chance.string({ alpha: true, length: 5 })}`,
                    schemes: ['http'],
                };

                const doc = SwaggerDocGenerator.generateSwagger(
                    routes,
                    options
                );

                Chai.expect(doc).to.be.deep.equal({
                    info: {
                        title: options.title,
                        version: options.version,
                        description: options.description,
                    },
                    basePath: options.basePath,
                    schemes: ['http'],
                    paths: {
                        '/test': {
                            post: {
                                consumes: ['application/json'],
                                produces: ['application/json'],
                                description: '',
                                tags: [],
                                parameters: [
                                    {
                                        in: 'body',
                                        required: true,
                                        name: 'body',
                                        schema: {
                                            type: 'object',
                                            properties: {
                                                name: {
                                                    type: 'string',
                                                },
                                                age: {
                                                    type: 'number',
                                                    format: 'float',
                                                },
                                            },
                                            additionalProperties: false,
                                        },
                                    },
                                ],
                                responses: {},
                            },
                        },
                    },
                    swagger: '2.0',
                    definitions: {},
                    responses: {},
                    parameters: {},
                    securityDefinitions: {},
                    tags: [],
                });
            });
        });
    });
});

import Chai from 'chai';
import Joi from 'joi';

import JoiToSwagger from '../../../../../src/interface/http/swagger/JoiToSwagger.js';

describe('interface :: http :: swagger :: JoiToSwagger', () => {
    describe('#parse', () => {
        context('when schema is null', () => {
            it('throw error No schema is specified', () => {
                Chai.expect(() => JoiToSwagger()).to.throw(
                    'No schema is specified'
                );
            });
        });

        context('when schema is Joi schema object with one example', () => {
            it('return swagger description with name property', () => {
                const schema = Joi.object().keys({
                    name: Joi.string().example('BeerOrCoffee'),
                });
                const response = JoiToSwagger(schema);

                Chai.expect(response).to.be.deep.equal({
                    swagger: {
                        type: 'object',
                        properties: {
                            name: {
                                example: 'BeerOrCoffee',
                                type: 'string',
                            },
                        },
                        additionalProperties: false,
                    },
                    components: {},
                });
            });
        });

        context('when schema is Joi schema object with two examples', () => {
            it('return swagger description with name property', () => {
                const schema = Joi.object().keys({
                    name: Joi.string().example('BeerOrCoffee').example('Tysdo'),
                });
                const response = JoiToSwagger(schema);

                Chai.expect(response).to.be.deep.equal({
                    swagger: {
                        type: 'object',
                        properties: {
                            name: {
                                examples: ['BeerOrCoffee', 'Tysdo'],
                                type: 'string',
                            },
                        },
                        additionalProperties: false,
                    },
                    components: {},
                });
            });
        });

        context(
            'when schema is Joi schema object with one example and a default value',
            () => {
                it('return swagger description with name property', () => {
                    const schema = Joi.object().keys({
                        name: Joi.string()
                            .example('BeerOrCoffee')
                            .default('BeerOrCoffee'),
                    });
                    const response = JoiToSwagger(schema);

                    Chai.expect(response).to.be.deep.equal({
                        swagger: {
                            type: 'object',
                            properties: {
                                name: {
                                    default: 'BeerOrCoffee',
                                    example: 'BeerOrCoffee',
                                    type: 'string',
                                },
                            },
                            additionalProperties: false,
                        },
                        components: {},
                    });
                });
            }
        );

        context('when description field is present', () => {
            it('return swagger with name description', () => {
                const schema = Joi.object().keys({
                    name: Joi.string().description('Field description'),
                });
                const response = JoiToSwagger(schema);

                Chai.expect(response).to.be.deep.equal({
                    swagger: {
                        type: 'object',
                        properties: {
                            name: {
                                description: 'Field description',
                                type: 'string',
                            },
                        },
                        additionalProperties: false,
                    },
                    components: {},
                });
            });
        });

        context('when forbidden field is present', () => {
            it('return swagger with name and not forbidden property', () => {
                const schema = Joi.object().keys({
                    name: Joi.string(),
                    testforbidden: Joi.forbidden(),
                });
                const response = JoiToSwagger(schema);

                Chai.expect(response).to.be.deep.equal({
                    swagger: {
                        type: 'object',
                        properties: {
                            name: {
                                type: 'string',
                            },
                        },
                        additionalProperties: false,
                    },
                    components: {},
                });
            });
        });

        context('when number field is present', () => {
            it('return swagger with number property', () => {
                const schema = Joi.object().keys({
                    number: Joi.number().integer().min(1).max(2).required(),
                });
                const response = JoiToSwagger(schema);

                Chai.expect(response).to.be.deep.equal({
                    swagger: {
                        type: 'object',
                        properties: {
                            number: {
                                type: 'integer',
                                minimum: 1,
                                maximum: 2,
                            },
                        },
                        additionalProperties: false,
                        required: ['number'],
                    },
                    components: {},
                });
            });
        });

        context('when number positive field is present', () => {
            it('return swagger with number positive property', () => {
                const schema = Joi.object().keys({
                    number: Joi.number().positive().required(),
                });
                const response = JoiToSwagger(schema);

                Chai.expect(response).to.be.deep.equal({
                    swagger: {
                        type: 'object',
                        properties: {
                            number: {
                                type: 'number',
                                format: 'float',
                                minimum: 1,
                            },
                        },
                        additionalProperties: false,
                        required: ['number'],
                    },
                    components: {},
                });
            });
        });

        context('when number field with precision is present', () => {
            it('return swagger with number positive property', () => {
                const schema = Joi.object().keys({
                    number: Joi.number().precision(2).required(),
                });
                const response = JoiToSwagger(schema);

                Chai.expect(response).to.be.deep.equal({
                    swagger: {
                        type: 'object',
                        properties: {
                            number: {
                                type: 'number',
                                format: 'double',
                            },
                        },
                        additionalProperties: false,
                        required: ['number'],
                    },
                    components: {},
                });
            });
        });

        context('when number negative field is present', () => {
            it('return swagger with number positive property', () => {
                const schema = Joi.object().keys({
                    number: Joi.number().negative().required(),
                });
                const response = JoiToSwagger(schema);

                Chai.expect(response).to.be.deep.equal({
                    swagger: {
                        type: 'object',
                        properties: {
                            number: {
                                type: 'number',
                                format: 'float',
                                maximum: -1,
                            },
                        },
                        additionalProperties: false,
                        required: ['number'],
                    },
                    components: {},
                });
            });
        });

        context('when number field allow specific values', () => {
            it('return swagger with number', () => {
                const schema = Joi.object().keys({
                    number: Joi.number().valid(1, 2, 3).required(),
                });
                const response = JoiToSwagger(schema);

                Chai.expect(response).to.be.deep.equal({
                    swagger: {
                        type: 'object',
                        properties: {
                            number: {
                                type: 'number',
                                format: 'float',
                                enum: [1, 2, 3],
                            },
                        },
                        additionalProperties: false,
                        required: ['number'],
                    },
                    components: {},
                });
            });
        });

        context('when string field is present', () => {
            it('return swagger name property', () => {
                const schema = Joi.object().keys({
                    name: Joi.string()
                        .alphanum()
                        .uppercase()
                        .required()
                        .preferences({ convert: false }),
                });
                const response = JoiToSwagger(schema);

                Chai.expect(response).to.be.deep.equal({
                    swagger: {
                        type: 'object',
                        properties: {
                            name: {
                                pattern: '^[A-Z0-9]*$',
                                type: 'string',
                            },
                        },
                        additionalProperties: false,
                        required: ['name'],
                    },
                    components: {},
                });
            });
        });

        context('when string field email is present', () => {
            it('return swagger with email property', () => {
                const schema = Joi.object().keys({
                    email: Joi.string().email().required(),
                });
                const response = JoiToSwagger(schema);

                Chai.expect(response).to.be.deep.equal({
                    swagger: {
                        type: 'object',
                        properties: {
                            email: {
                                format: 'email',
                                type: 'string',
                            },
                        },
                        additionalProperties: false,
                        required: ['email'],
                    },
                    components: {},
                });
            });
        });

        context('when string field isoDate is present', () => {
            it('return swagger with iso date property', () => {
                const schema = Joi.object().keys({
                    date: Joi.string().isoDate().required(),
                });
                const response = JoiToSwagger(schema);

                Chai.expect(response).to.be.deep.equal({
                    swagger: {
                        type: 'object',
                        properties: {
                            date: {
                                format: 'date-time',
                                type: 'string',
                            },
                        },
                        additionalProperties: false,
                        required: ['date'],
                    },
                    components: {},
                });
            });
        });

        context('when date field is present', () => {
            it('return swagger with date property', () => {
                const schema = Joi.object().keys({
                    date: Joi.date().required(),
                });
                const response = JoiToSwagger(schema);

                Chai.expect(response).to.be.deep.equal({
                    swagger: {
                        type: 'object',
                        properties: {
                            date: {
                                format: 'date-time',
                                type: 'string',
                            },
                        },
                        additionalProperties: false,
                        required: ['date'],
                    },
                    components: {},
                });
            });
        });

        context('when string field uuid is present', () => {
            it('return swagger with uuid property', () => {
                const schema = Joi.object().keys({
                    uuid: Joi.string().guid({ version: 'uuidv4' }).required(),
                });
                const response = JoiToSwagger(schema);

                Chai.expect(response).to.be.deep.equal({
                    swagger: {
                        type: 'object',
                        properties: {
                            uuid: {
                                format: 'uuid',
                                type: 'string',
                            },
                        },
                        additionalProperties: false,
                        required: ['uuid'],
                    },
                    components: {},
                });
            });
        });

        context('when string field token is present', () => {
            it('return swagger with token property', () => {
                const schema = Joi.object().keys({
                    token: Joi.string().token().required(),
                });
                const response = JoiToSwagger(schema);

                Chai.expect(response).to.be.deep.equal({
                    swagger: {
                        type: 'object',
                        properties: {
                            token: {
                                pattern: '^[a-zA-Z0-9]*$',
                                type: 'string',
                            },
                        },
                        additionalProperties: false,
                        required: ['token'],
                    },
                    components: {},
                });
            });
        });

        context(
            'when string field token with lowercase condition is present',
            () => {
                it('return swagger with token property', () => {
                    const schema = Joi.object().keys({
                        token: Joi.string().token().lowercase().required(),
                    });
                    const response = JoiToSwagger(schema);

                    Chai.expect(response).to.be.deep.equal({
                        swagger: {
                            type: 'object',
                            properties: {
                                token: {
                                    pattern: '^[a-z0-9]*$',
                                    type: 'string',
                                },
                            },
                            additionalProperties: false,
                            required: ['token'],
                        },
                        components: {},
                    });
                });
            }
        );

        context(
            'when string field token with uppercase condition is present',
            () => {
                it('return swagger with token property', () => {
                    const schema = Joi.object().keys({
                        token: Joi.string().token().uppercase().required(),
                    });
                    const response = JoiToSwagger(schema);

                    Chai.expect(response).to.be.deep.equal({
                        swagger: {
                            type: 'object',
                            properties: {
                                token: {
                                    pattern: '^[A-Z0-9]*$',
                                    type: 'string',
                                },
                            },
                            additionalProperties: false,
                            required: ['token'],
                        },
                        components: {},
                    });
                });
            }
        );

        context('when string field pattern is present', () => {
            it('return swagger with pattern property', () => {
                const schema = Joi.object().keys({
                    pattern: Joi.string().pattern(/[A-Z]/).required(),
                });
                const response = JoiToSwagger(schema);

                Chai.expect(response).to.be.deep.equal({
                    swagger: {
                        type: 'object',
                        properties: {
                            pattern: {
                                pattern: '[A-Z]',
                                type: 'string',
                            },
                        },
                        additionalProperties: false,
                        required: ['pattern'],
                    },
                    components: {},
                });
            });
        });

        context('when string field valid is present', () => {
            it('return swagger with valid property', () => {
                const schema = Joi.object().keys({
                    valid: Joi.string().valid('a', 'b', 'c').required(),
                });
                const response = JoiToSwagger(schema);

                Chai.expect(response).to.be.deep.equal({
                    swagger: {
                        type: 'object',
                        properties: {
                            valid: {
                                type: 'string',
                                enum: ['a', 'b', 'c'],
                            },
                        },
                        additionalProperties: false,
                        required: ['valid'],
                    },
                    components: {},
                });
            });
        });

        context('when array field is present', () => {
            it('return swagger with array property', () => {
                const schema = Joi.object().keys({
                    array: Joi.array().items(Joi.string()).required(),
                });
                const response = JoiToSwagger(schema);

                Chai.expect(response).to.be.deep.equal({
                    swagger: {
                        type: 'object',
                        properties: {
                            array: {
                                items: {
                                    type: 'string',
                                },
                                type: 'array',
                            },
                        },
                        additionalProperties: false,
                        required: ['array'],
                    },
                    components: {},
                });
            });
        });

        context('when binary field is present', () => {
            it('return swagger with binary property', () => {
                const schema = Joi.object().keys({
                    binary: Joi.binary().min(100).max(200).required(),
                });
                const response = JoiToSwagger(schema);

                Chai.expect(response).to.be.deep.equal({
                    swagger: {
                        type: 'object',
                        properties: {
                            binary: {
                                format: 'binary',
                                minLength: 100,
                                maxLength: 200,
                                type: 'string',
                            },
                        },
                        additionalProperties: false,
                        required: ['binary'],
                    },
                    components: {},
                });
            });
        });

        context('when binary field with specific length is present', () => {
            it('return swagger with binary property', () => {
                const schema = Joi.object().keys({
                    binary: Joi.binary().length(100).required(),
                });
                const response = JoiToSwagger(schema);

                Chai.expect(response).to.be.deep.equal({
                    swagger: {
                        type: 'object',
                        properties: {
                            binary: {
                                format: 'binary',
                                minLength: 100,
                                maxLength: 100,
                                type: 'string',
                            },
                        },
                        additionalProperties: false,
                        required: ['binary'],
                    },
                    components: {},
                });
            });
        });

        context('when boolean field is present', () => {
            it('return swagger with boolean property', () => {
                const schema = Joi.object().keys({
                    boolean: Joi.boolean().required(),
                });
                const response = JoiToSwagger(schema);

                Chai.expect(response).to.be.deep.equal({
                    swagger: {
                        type: 'object',
                        properties: {
                            boolean: {
                                type: 'boolean',
                            },
                        },
                        additionalProperties: false,
                        required: ['boolean'],
                    },
                    components: {},
                });
            });
        });

        context('when any field is present', () => {
            it('return swagger any boolean property', () => {
                const schema = Joi.object().keys({ any: Joi.any().required() });
                const response = JoiToSwagger(schema);

                Chai.expect(response).to.be.deep.equal({
                    swagger: {
                        type: 'object',
                        properties: {
                            any: {},
                        },
                        additionalProperties: false,
                        required: ['any'],
                    },
                    components: {},
                });
            });
        });

        context('when "or" condition is present', () => {
            it('return swagger with all schema fields', () => {
                const schema = Joi.object()
                    .keys({ foo: Joi.string(), bar: Joi.number() })
                    .or('foo', 'bar');
                const response = JoiToSwagger(schema);

                Chai.expect(response).to.be.deep.equal({
                    swagger: {
                        type: 'object',
                        properties: {
                            bar: {
                                format: 'float',
                                type: 'number',
                            },
                            foo: {
                                type: 'string',
                            },
                        },
                        additionalProperties: false,
                    },
                    components: {},
                });
            });
        });

        context('when "with" condition is present', () => {
            it('return swagger with all schema fields', () => {
                const schema = Joi.object().keys({
                    foo: Joi.alternatives().try(Joi.number(), Joi.string()),
                });
                const response = JoiToSwagger(schema);

                Chai.expect(response).to.be.deep.equal({
                    swagger: {
                        type: 'object',
                        properties: {
                            foo: {
                                format: 'float',
                                type: 'number',
                            },
                        },
                        additionalProperties: false,
                    },
                    components: {},
                });
            });
        });

        context('when "type" is not supported', () => {
            it('return swagger with all schema fields', () => {
                const schema = Joi.object().keys({ foo: Joi.symbol() });

                Chai.expect(() => JoiToSwagger(schema)).to.throw(
                    'symbol is not a recognized Joi type.'
                );
            });
        });

        context('when schema has description', () => {
            it('return swagger with schema description', () => {
                const schema = Joi.object()
                    .keys({
                        foo: Joi.string(),
                    })
                    .description('Schema description');
                const response = JoiToSwagger(schema);

                Chai.expect(response).to.be.deep.equal({
                    swagger: {
                        type: 'object',
                        description: 'Schema description',
                        properties: {
                            foo: {
                                type: 'string',
                            },
                        },
                        additionalProperties: false,
                    },
                    components: {},
                });
            });
        });
    });
});

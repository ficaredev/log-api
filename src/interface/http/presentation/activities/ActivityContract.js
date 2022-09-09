import Joi from 'joi';

export default () => ({
    createActivity: Joi.object().keys({
        name: Joi.string().required(),
        service: Joi.string().required(),
        subject_type: Joi.string(),
        subject_id: Joi.string(),
        causer_type: Joi.string(),
        causer_id: Joi.string(),
        request: Joi.object(),
        properties: Joi.object(),
    }),

    query: Joi.object().keys({
        service: Joi.string(),
        subject_type: Joi.string(),
        subject_id: Joi.string(),
        causer_type: Joi.string(),
        causer_id: Joi.string(),
        limit: Joi.string(),
        offset: Joi.string(),
    }),

    id: Joi.object().keys({
        id: Joi.string()
            .guid({ version: ['uuidv4'] })
            .required(),
    }),

    defaultHeaders: Joi.object().keys({
        'transaction-id': Joi.string().guid({ version: ['uuidv4'] }),
    }),
});

import ContractException from '../../../infrastructure/exceptions/ContractException.js';

export default () => ({
    validateContract: (validation) => (req, res, next) => {
        try {
            const schemaOptions = {
                abortEarly: false,
                convert: false,
                allowUnknown: true,
                stripUnknown: false,
            };

            Object.keys(validation).forEach((validationKey) => {
                const { error, value } = validation[validationKey].validate(
                    req[validationKey],
                    schemaOptions
                );

                if (error) {
                    const err = new Error('Bad Request');
                    err.details = error.details;
                    throw new ContractException(err);
                }

                req[validationKey] = value;
            });

            return next();
        } catch (error) {
            next(error);
        }
    },
});

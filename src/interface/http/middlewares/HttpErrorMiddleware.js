import ContractException from '../../../infrastructure/exceptions/ContractException.js';

export default ({ logger, httpErrorWrapper, config }) =>
    (err, req, res, next) => {
        if (err instanceof URIError) {
            const error = new Error('Bad Request');

            error.details = [
                {
                    message: err.message,
                    path: 'path_param',
                },
            ];

            err = new ContractException(error);
        }

        const errorWrapper = httpErrorWrapper(err);

        const {
            error_code,
            status_code,
            message,
            details = [],
            stack_trace,
        } = errorWrapper(err);

        logger.error(err);

        return res.status(status_code).json({
            error_code,
            message,
            details,
            stack_trace:
                config.stackError && config.stackError.isVisible
                    ? stack_trace
                    : undefined,
        });
    };

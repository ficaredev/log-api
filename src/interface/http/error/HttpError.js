import OperationException from '../../../infrastructure/exceptions/OperationException.js';

export default ({ httpConstants }) => ({
    contract: ({ error_code, message, details = [], stack }) => ({
        error_code,
        message,
        details: details.map((detail) => ({
            message: detail.message,
            path: detail.path,
        })),
        status_code: httpConstants.code.BAD_REQUEST,
        stack_trace: stack,
    }),

    notFound: ({ error_code, message, stack }) => ({
        error_code,
        message,
        status_code: httpConstants.code.NOT_FOUND,
        stack_trace: stack,
    }),

    business: ({ error_code, message, stack }) => ({
        error_code,
        message,
        status_code: httpConstants.code.UNPROCESSABLE_ENTITY,
        stack_trace: stack,
    }),

    integration: ({ error_code, message, details, stack }) => ({
        error_code,
        message,
        details,
        status_code: httpConstants.code.SERVICE_UNAVAILABLE,
        stack_trace: stack,
    }),

    operation: ({ error_code, message, details, stack }) => ({
        error_code,
        message,
        details,
        status_code: httpConstants.code.INTERNAL_SERVER_ERROR,
        stack_trace: stack,
    }),

    internalError: (error) => {
        error = new OperationException(error);

        return {
            error_code: error.error_code,
            message: httpConstants.message.INTERNAL_SERVER_ERROR,
            status_code: httpConstants.code.INTERNAL_SERVER_ERROR,
            stack_trace: error.stack,
        };
    },

    duplicateKeyError: (error) => {
        return {
            error_code: error.error_code,
            message: httpConstants.message.CONFLICT,
            status_code: httpConstants.code.CONFLICT,
            stack_trace: error.stack,
        };
    },
});

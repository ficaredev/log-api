export const formatError = (error) =>
    typeof error === 'string' ? { message: error } : error;

export const formatErrorMessage = (err, params) =>
    typeof err.message === 'function' ? err.message(...params) : err.message;

export const formatErrorCode = (errorCode, defaultErrorCode) => {
    // errorCode already has a formatted error
    if (errorCode && /-/.test(errorCode)) return errorCode;

    return `${errorCode || defaultErrorCode}`;
};

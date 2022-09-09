import {
    formatError,
    formatErrorMessage,
    formatErrorCode,
} from './ErrorFormatter.js';

export default class Exception extends Error {
    constructor(error, defaultErrorCode, ...params) {
        const err = formatError(error);
        const message = formatErrorMessage(err, params);

        super(message);
        this.error_code = formatErrorCode(err.error_code, defaultErrorCode);
        this.params = params;
    }
}

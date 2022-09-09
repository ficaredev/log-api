import Exception from './Exception.js';

const defaultErrorCode = '504';

export default class TimeoutException extends Exception {
    constructor(error, ...params) {
        super(error, defaultErrorCode, ...params);
        this.error_type = 'timeout';
    }
}

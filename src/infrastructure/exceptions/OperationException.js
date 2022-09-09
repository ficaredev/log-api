import Exception from './Exception.js';

const defaultErrorCode = '500';

export default class OperationException extends Exception {
    constructor(error, ...params) {
        super(error, defaultErrorCode, ...params);
        this.error_type = 'operation';
    }
}

import Exception from './Exception.js';

const defaultErrorCode = '404';

export default class NotFoundException extends Exception {
    constructor(error, ...params) {
        super(error, defaultErrorCode, ...params);
        this.error_type = 'notFound';
    }
}

import NotFoundException from '../../../infrastructure/exceptions/NotFoundException.js';

export default ({ httpConstants }) =>
    (req, res, next) => {
        next(new NotFoundException(httpConstants.message.NOT_FOUND));
    };

import uuid from '../../../infrastructure/tools/IdentifierGenerator.js';

export default ({ scopedRequest }) =>
    (req, res, next) => {
        const transactionId = req.headers['transaction-id'] || uuid();
        req.headers['transaction-id'] = transactionId;
        scopedRequest.setScopedValue('transactionId', transactionId);
        next();
    };

const buildMessage = (transactionId, message) => {
    if (message instanceof Error)
        return `[transactionId=${transactionId}] ${message.message} - ${message.stack} - ${message.error_code}`;

    if (message instanceof Object) message = JSON.stringify(message);

    if (transactionId) message = `[transactionId=${transactionId}] ${message}`;

    return message;
};

export default ({ scopedRequest, loggerAdapter }) => ({
    info(message) {
        loggerAdapter.logger.info(
            buildMessage(scopedRequest.transactionId, message)
        );
    },

    error(message) {
        loggerAdapter.logger.error(
            buildMessage(scopedRequest.transactionId, message)
        );
    },

    warn(message) {
        loggerAdapter.logger.warn(
            buildMessage(scopedRequest.transactionId, message)
        );
    },
});

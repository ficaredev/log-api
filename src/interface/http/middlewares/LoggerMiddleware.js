import pinoMiddleware from 'pino-http';

export default ({ loggerAdapter, loggerStreamAdapter, scopedRequest }) =>
    pinoMiddleware({
        logger: loggerAdapter.logger,
        serializers: loggerStreamAdapter,

        // Override attribute keys for the log object
        customAttributeKeys: {
            req: 'REQUEST',
            res: 'RESPONSE',
        },

        // Define a custom logger level
        customLogLevel: (req, res, err) => {
            if (res.statusCode >= 400 || err) return 'error';

            return 'info';
        },

        // Define a custom error message
        customErrorMessage: (req, res) =>
            `[transactionId=${scopedRequest.transactionId}] REQUEST ${req.method} ${req.url} statusCode=${res.statusCode}`,

        // Define a custom success message
        customSuccessMessage: (req, res) =>
            `[transactionId=${scopedRequest.transactionId}] REQUEST ${req.method} ${req.originalUrl} statusCode=${res.statusCode}`,
    });

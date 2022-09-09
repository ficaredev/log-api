export default () => ({
    req: (req) => ({
        method: req.method,
        url: req.url,
        params: req.params,
        requestBody: req.raw.body,
        transactionId: req.headers.transactionId,
    }),
    res: (res) => ({
        statusCode: res.statusCode,
        body: res.raw.body,
    }),
});

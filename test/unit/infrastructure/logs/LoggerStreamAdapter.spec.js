import Chai from 'chai';
import LoggerStreamAdapter from '../../../../src/infrastructure/logs/LoggerStreamAdapter.js';

describe('infrastructure :: logs :: LoggerStreamAdapter', () => {
    describe('When call loggerStreamAdapter', () => {
        let loggerStreamAdapter;

        beforeEach(() => {
            loggerStreamAdapter = LoggerStreamAdapter();
        });

        context('when call req from loggerStreamAdapter', () => {
            it('should return only correctly data', () => {
                const req = {
                    method: 'GET',
                    url: '/',
                    params: {},
                    raw: {
                        body: 'body',
                    },
                    headers: { transactionId: 'transaction-id' },
                    xxx: {},
                };

                const result = loggerStreamAdapter.req(req);

                Chai.expect(result).to.deep.equal({
                    method: req.method,
                    url: req.url,
                    params: req.params,
                    requestBody: req.raw.body,
                    transactionId: req.headers.transactionId,
                });
            });
        });
        context('when call res from loggerStreamAdapter', () => {
            it('should return only correctly data', () => {
                const res = {
                    statusCode: 200,
                    raw: {
                        body: 'body',
                    },
                    xxx: {},
                };

                const result = loggerStreamAdapter.res(res);

                Chai.expect(result).to.deep.equal({
                    statusCode: res.statusCode,
                    body: res.raw.body,
                });
            });
        });
    });
});

import Chai from 'chai';
import TransactionTrackerMiddleware from '../../../../../src/interface/http/middlewares/TransactionTrackerMiddleware.js';

describe('interface :: http :: middlewares:: TransactionTrackerMiddleware', () => {
    describe('Tacker middleware', () => {
        let transactionTrackerMiddleware, scopedRequest;
        beforeEach(() => {
            scopedRequest = {
                setScopedValue: Chai.spy(() => {}),
            };

            transactionTrackerMiddleware = TransactionTrackerMiddleware({
                scopedRequest,
            });
        });

        context('When header has transaction-id', () => {
            it('Call scopedRequest.scopedRequest with transaction-id', () => {
                const req = {
                    headers: {
                        'transaction-id': 'transaction-id',
                    },
                };

                transactionTrackerMiddleware(req, {}, () => {});

                Chai.expect(
                    scopedRequest.setScopedValue
                ).to.have.been.called.with('transactionId', 'transaction-id');
            });
        });

        context('When header has no transaction-id', () => {
            it('Call scopedRequest.scopedRequest with new uuid', () => {
                const req = {
                    headers: {},
                };

                transactionTrackerMiddleware(req, {}, () => {});

                Chai.expect(
                    scopedRequest.setScopedValue
                ).to.have.been.called.with('transactionId');
            });
        });
    });
});

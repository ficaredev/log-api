import Chai from 'chai';

import Logger from '../../../../src/infrastructure/logs/Logger.js';

describe('infrastructure :: logs :: Logger', () => {
    let logger;
    let scopedRequest;
    let loggerAdapter;

    describe('When call all functions of logger', () => {
        beforeEach(() => {
            scopedRequest = {
                transactionId: 'transaction-id',
            };

            loggerAdapter = {
                logger: {
                    info: Chai.spy(() => {}),
                    error: Chai.spy(() => {}),
                    warn: Chai.spy(() => {}),
                },
            };

            logger = Logger({ scopedRequest, loggerAdapter });
        });

        context('when call info logger', () => {
            it('should call loggerAdapter correctly', (done) => {
                logger.info('message');

                Chai.expect(loggerAdapter.logger.info).to.have.been.called.with(
                    `[transactionId=${scopedRequest.transactionId}] message`
                );

                done();
            });
        });

        context('when call warn logger', () => {
            it('should call loggerAdapter correctly', (done) => {
                logger.warn('message');

                Chai.expect(loggerAdapter.logger.warn).to.have.been.called.with(
                    `[transactionId=${scopedRequest.transactionId}] message`
                );

                done();
            });
        });

        context('when call error logger', () => {
            it('should call loggerAdapter correctly', (done) => {
                logger.error('message');

                Chai.expect(
                    loggerAdapter.logger.error
                ).to.have.been.called.with(
                    `[transactionId=${scopedRequest.transactionId}] message`
                );

                done();
            });
        });

        context('when call error logger with error object', () => {
            it('should call loggerAdapter correctly', (done) => {
                const error = new Error('message');
                logger.error(error);

                Chai.expect(
                    loggerAdapter.logger.error
                ).to.have.been.called.with(
                    `[transactionId=${scopedRequest.transactionId}] ${error.message} - ${error.stack} - ${error.error_code}`
                );

                done();
            });
        });

        context('when call error logger with object', () => {
            it('should call loggerAdapter correctly', (done) => {
                logger.error({ message: 'message' });

                Chai.expect(
                    loggerAdapter.logger.error
                ).to.have.been.called.with(
                    `[transactionId=${
                        scopedRequest.transactionId
                    }] ${JSON.stringify({ message: 'message' })}`
                );

                done();
            });
        });
    });
});

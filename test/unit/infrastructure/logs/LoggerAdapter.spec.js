import Chai from 'chai';
import LoggerAdapter from '../../../../src/infrastructure/logs/LoggerAdapter.js';

describe('infrastructure :: logs :: LoggerAdapter', () => {
    describe('When call loggerAdapter with local config', () => {
        let config;
        let loggerAdapter;

        beforeEach(() => {
            config = {
                environment: 'local',
            };

            loggerAdapter = new LoggerAdapter({ config });
        });

        context('when create loggerAdapter', () => {
            it('should has loogger instance of pino', (done) => {
                Chai.expect(loggerAdapter.logger).to.be.an.instanceof(Object);

                done();
            });
        });
    });
});

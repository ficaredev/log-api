import Chai from 'chai';

import Enum from '../../../../src/infrastructure/tools/Enum.js';

import StateMachine from '../../../../src/infrastructure/tools/StateMachine.js';

describe('infrastructure :: tools :: StateMachine', () => {
    let sampleEnum;
    let sampleTransactions;
    let sampleStateMachine;

    describe('#isValidTransaction function', () => {
        beforeEach(() => {
            sampleEnum = Enum({
                ACTIVE: 'active',
                CHANGED: 'changed',
                DELETED: 'deleted',
            });

            sampleTransactions = {
                ACTIVE: [sampleEnum.CHANGED, sampleEnum.DELETED],
                CHANGED: [sampleEnum.ACTIVE],
                DELETED: [sampleEnum.CHANGED],
            };

            sampleStateMachine = StateMachine(sampleEnum, sampleTransactions);
        });

        context('when transaction is valid', () => {
            it('should return true', (done) => {
                const result = sampleStateMachine.isValidTransaction(
                    sampleEnum.ACTIVE,
                    sampleEnum.CHANGED
                );

                Chai.expect(result).to.be.true;
                done();
            });
        });

        context('when transaction is not valid', () => {
            it('should return false', (done) => {
                const result = sampleStateMachine.isValidTransaction(
                    sampleEnum.DELETED,
                    sampleEnum.ACTIVE
                );

                Chai.expect(result).to.be.false;
                done();
            });
        });

        context('when current enum does not exists', () => {
            it('should return false', (done) => {
                const result = sampleStateMachine.isValidTransaction(
                    'I DON`T EXIST',
                    sampleEnum.ACTIVE
                );

                Chai.expect(result).to.be.false;
                done();
            });
        });

        context('when next enum does not exists', () => {
            it('should return false', (done) => {
                const result = sampleStateMachine.isValidTransaction(
                    sampleEnum.DELETED,
                    'I DON`T EXIST'
                );

                Chai.expect(result).to.be.false;
                done();
            });
        });
    });
});

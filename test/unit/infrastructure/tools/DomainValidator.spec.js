import Chai from 'chai';
import DomainRuleValidator from '../../../../src/infrastructure/tools/DomainRuleValidator.js';

describe('src :: domain :: rules :: validator', () => {
    context('when modules validate is called with success', () => {
        let functionsToValidate;

        beforeEach(() => {
            functionsToValidate = {
                fn1: Chai.spy(() => ({ valid: true, hasNextValidation: true })),
                fn2: Chai.spy(() => ({ valid: true })),
            };
        });

        it('call all functions', () => {
            const data = {};
            const response = DomainRuleValidator.validate(
                data,
                functionsToValidate.fn1,
                functionsToValidate.fn2
            );
            Chai.expect(response.valid).to.be.true();
            Chai.expect(functionsToValidate.fn1).to.be.called.once();
            Chai.expect(functionsToValidate.fn2).to.be.called.once();
        });
    });

    context('when validation function return custom attributes', () => {
        let functionsToValidate;

        beforeEach(() => {
            functionsToValidate = {
                fn1: Chai.spy(() => ({
                    custom: { valid: false, message: 'error' },
                    hasNextValidation: true,
                })),
                fn2: Chai.spy(() => ({
                    custom2: { valid: false, message: 'error' },
                })),
            };
        });

        it('return all attributes returned by validations', () => {
            const data = {};
            const response = DomainRuleValidator.validate(
                data,
                functionsToValidate.fn1,
                functionsToValidate.fn2
            );
            Chai.expect(functionsToValidate.fn1).to.be.called.once();
            Chai.expect(functionsToValidate.fn2).to.be.called.once();
            Chai.expect(response.custom).to.be.eql({
                valid: false,
                message: 'error',
            });
            Chai.expect(response.custom2).to.be.eql({
                valid: false,
                message: 'error',
            });
        });
    });

    context('when first validation return hasNextValidation false', () => {
        let functionsToValidate;

        beforeEach(() => {
            functionsToValidate = {
                fn1: Chai.spy(() => ({
                    hasNextValidation: false,
                    error: 'error',
                })),
                fn2: Chai.spy(() => {}),
            };
        });

        it('call only fn1 function', () => {
            const data = {};
            const response = DomainRuleValidator.validate(
                data,
                functionsToValidate.fn1
            );
            Chai.expect(functionsToValidate.fn1).to.be.called.once();
            Chai.expect(functionsToValidate.fn2).to.not.be.called();
            Chai.expect(response.error).to.be.equal('error');
        });
    });

    context('when found invalid object without error', () => {
        let data, validateFn_1;
        beforeEach(() => {
            data = {};
            validateFn_1 = () => ({
                isValid: false,
                hasNextValidation: true,
            });
        });

        it('returns success object', () => {
            const { error, isValid } = DomainRuleValidator.validate(
                data,
                validateFn_1
            );

            Chai.expect(error).to.be.undefined();
            Chai.expect(isValid).to.be.false();
        });
    });

    context('when stop validations before found error', () => {
        let data, validateFn_1, validateFn_2;
        beforeEach(() => {
            data = {};
            validateFn_1 = () => ({
                isValid: true,
                hasNextValidation: false,
            });
            validateFn_2 = () => ({
                isValid: false,
                error: new Error('any_error'),
                hasNextValidation: true,
            });
        });

        it('returns success object', () => {
            const { error, isValid } = DomainRuleValidator.validate(
                data,
                validateFn_1,
                validateFn_2
            );

            Chai.expect(error).to.be.undefined();
            Chai.expect(isValid).to.be.true();
        });
    });
});

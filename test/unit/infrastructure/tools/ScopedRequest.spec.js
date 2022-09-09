import Chai from 'chai';
import ScopedRequest from '../../../../src/infrastructure/tools/ScopedRequest.js';

describe('infrastructure :: tools :: ScopedRequest', () => {
    describe('When call ScopedRequest', () => {
        let scopedRequest;

        beforeEach(() => {
            scopedRequest = new ScopedRequest();
        });

        context('when call setScopedValue ScopedRequest', () => {
            it('should set param and value', () => {
                scopedRequest.setScopedValue('param', 'value');

                Chai.expect(scopedRequest.param).to.equal('value');
            });
        });

        context('when call getScopedValue ScopedRequest', () => {
            it('should get param and value', () => {
                scopedRequest.setScopedValue('param', 'value');

                Chai.expect(scopedRequest.getScopedValue('param')).to.equal(
                    'value'
                );
            });
        });
    });
});

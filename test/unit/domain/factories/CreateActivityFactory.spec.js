import Chai from 'chai';
import CreateActivityFactory from '../../../../src/domain/factories/CreateActivityFactory.js';

describe('domain :: factories :: CreateActivityFactory', () => {
    describe('#toActivityObject Function', () => {
        let createActivityFactory;

        beforeEach(() => {
            Chai.spy.restore();

            createActivityFactory = CreateActivityFactory();
        });

        context('When request body is provided', () => {
            it('should return an activity object', async () => {
                const body = {
                    name: 'name',
                    service: 'service',
                };

                const activity = createActivityFactory.toActivityObject(body);

                Chai.expect(activity).to.be.instanceof(Object);

                Chai.expect(activity)
                    .to.haveOwnProperty('id')
                    .which.is.a('string');
                Chai.expect(activity)
                    .to.haveOwnProperty('name')
                    .which.is.a('string');
                Chai.expect(activity)
                    .to.haveOwnProperty('service')
                    .which.is.a('string');
            });
        });
    });
});

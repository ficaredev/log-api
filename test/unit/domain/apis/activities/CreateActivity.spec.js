import Chai from 'chai';
import CreateActivity from '../../../../../src/domain/apis/activities/CreateActivity.js';

describe('domain :: apis :: activities :: createActivity', () => {
    describe('When not occurs any error', () => {
        let createActivityService = {},
            createActivity,
            responseApi;

        beforeEach(() => {
            responseApi = { data: 'response' };

            createActivityService.createActivity = Chai.spy(() =>
                Promise.resolve(responseApi)
            );

            createActivity = CreateActivity({
                createActivityService,
            });
        });

        context('Call all services and return response', () => {
            it('Return correctly response and not return any error ', async () => {
                const body = {
                    name: 'name',
                    service: 'service',
                };

                const response = await createActivity.execute({ body });

                Chai.expect(
                    createActivityService.createActivity
                ).to.have.been.called.once.with.exactly({ body });

                Chai.expect(response).to.be.eql(responseApi);
            });
        });
    });

    describe('When occurs an error on createActivity', () => {
        let createActivityService = {},
            createActivity,
            responseApi;

        beforeEach(() => {
            responseApi = new Error('Error');

            createActivityService.createActivity = Chai.spy(() =>
                Promise.reject(responseApi)
            );

            createActivity = CreateActivity({
                createActivityService,
            });
        });

        context('Call all services', () => {
            it('Throws an error ', async () => {
                const body = {
                    name: 'name',
                    service: 'service',
                };

                try {
                    await createActivity.execute({ body });
                } catch (error) {
                    Chai.expect(
                        createActivityService.createActivity
                    ).to.have.been.called.once.with.exactly({ body });

                    Chai.expect(error.message).to.be.eql(responseApi.message);
                }
            });
        });
    });
});

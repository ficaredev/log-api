import Chai from 'chai';
import ListActivities from '../../../../../src/domain/apis/activities/ListActivities.js';

describe('domain :: apis :: activities :: listActivities', () => {
    describe('When not occurs any error', () => {
        let listActivitiesService = {},
            listActivities,
            responseApi;

        beforeEach(() => {
            responseApi = { data: 'response' };

            listActivitiesService.getActivities = Chai.spy(() =>
                Promise.resolve(responseApi)
            );

            listActivities = ListActivities({
                listActivitiesService,
            });
        });

        context('Call all services and return response', () => {
            it('Return correctly response and not return any error ', async () => {
                const query = {};
                const response = await listActivities.execute({ query });

                Chai.expect(
                    listActivitiesService.getActivities
                ).to.have.been.called.once.with.exactly(query);

                Chai.expect(response).to.be.eql(responseApi);
            });
        });
    });

    describe('When occurs an error on listActivities', () => {
        let listActivitiesService = {},
            listActivities,
            responseApi;

        beforeEach(() => {
            responseApi = new Error('Error');

            listActivitiesService.getActivities = Chai.spy(() =>
                Promise.reject(responseApi)
            );

            listActivities = ListActivities({
                listActivitiesService,
            });
        });

        context('Call all services', () => {
            it('Throws an error ', async () => {
                const query = {};

                try {
                    await listActivities.execute({ query });
                } catch (error) {
                    Chai.expect(
                        listActivitiesService.getActivities
                    ).to.have.been.called.once.with.exactly(query);

                    Chai.expect(error.message).to.be.eql(responseApi.message);
                }
            });
        });
    });
});

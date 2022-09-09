import Chai from 'chai';
import GetActivity from '../../../../../src/domain/apis/activities/GetActivity.js';

describe('domain :: apis :: activities :: getActivity', () => {
    describe('When not occurs any error', () => {
        let getActivityService = {},
            getActivity;

        beforeEach(() => {
            getActivityService.getActivity = Chai.spy(() => {});

            getActivity = GetActivity({
                getActivityService,
            });
        });

        context('Call all services and return response', () => {
            it('Return correctly response and not return any error ', async () => {
                const id = '123';

                await getActivity.execute({ id });

                Chai.expect(
                    getActivityService.getActivity
                ).to.have.been.called.once.with.exactly({ id });
            });
        });
    });

    describe('When occurs an error on getActivity', () => {
        let getActivityService = {},
            getActivity,
            responseApi;

        beforeEach(() => {
            responseApi = new Error('Error');

            getActivityService.getActivity = Chai.spy(() =>
                Promise.reject(responseApi)
            );

            getActivity = GetActivity({
                getActivityService,
            });
        });

        context('Call all services', () => {
            it('Throws an error ', async () => {
                const id = '123';

                try {
                    await getActivity.execute({ id });
                } catch (error) {
                    Chai.expect(
                        getActivityService.getActivity
                    ).to.have.been.called.once.with.exactly({ id });

                    Chai.expect(error.message).to.be.eql(responseApi.message);
                }
            });
        });
    });
});

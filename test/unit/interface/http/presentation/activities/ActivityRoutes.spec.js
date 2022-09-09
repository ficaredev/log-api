import Chai from 'chai';

import ActivityRoutes from '../../../../../../src/interface/http/presentation/activities/ActivityRoutes.js';

describe('interface :: http :: presentation :: activities :: ActivityRoutes', () => {
    describe('Activity routes configuration', () => {
        let container, activityContract, activityController;

        beforeEach(() => {
            activityContract = {
                activity: () => {},
            };
            activityController = {
                activity: () => {},
            };
            container = {
                cradle: {
                    activityContract,
                    activityController,
                },
            };
        });

        context('Check all configuration of routes', () => {
            it('Returns array with config of activity routes', async () => {
                const [getActivities, createActivity, getActivity] =
                    ActivityRoutes({ container });

                Chai.expect(getActivities.method).to.be.eql('get');
                Chai.expect(getActivities.path).to.be.eql('/activities');
                Chai.expect(getActivities.validation).to.be.eql({
                    query: activityContract.query,
                    headers: activityContract.headers,
                });
                Chai.expect(getActivities.handler).to.be.eql(
                    activityController.listActivities
                );

                Chai.expect(createActivity.method).to.be.eql('post');
                Chai.expect(createActivity.path).to.be.eql('/activities');
                Chai.expect(createActivity.validation).to.be.eql({
                    body: activityContract.body,
                    headers: activityContract.headers,
                });
                Chai.expect(createActivity.handler).to.be.eql(
                    activityController.createActivity
                );

                Chai.expect(getActivity.method).to.be.eql('get');
                Chai.expect(getActivity.path).to.be.eql('/activities/:id');
                Chai.expect(getActivity.validation).to.be.eql({
                    params: activityContract.params,
                    headers: activityContract.headers,
                });
                Chai.expect(getActivity.handler).to.be.eql(
                    activityController.getActivity
                );
            });
        });
    });
});

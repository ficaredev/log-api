import Chai from 'chai';

import ActivityController from '../../../../../../src/interface/http/presentation/activities/ActivityController.js';

describe('interface :: http :: presentation :: activities :: ActivityController', () => {
    describe('when calling activityController', () => {
        let activityController,
            listActivities,
            createActivity,
            getActivity,
            apiResponse,
            httpConstants,
            res;

        beforeEach(() => {
            apiResponse = { response: 'apiResponse' };

            listActivities = {
                execute: Chai.spy(() => apiResponse),
            };

            createActivity = {
                execute: Chai.spy(() => apiResponse),
            };

            getActivity = {
                execute: Chai.spy(() => apiResponse),
            };

            res = {
                status: Chai.spy(() => ({ json: (data) => data })),
            };

            httpConstants = { code: { OK: 200 } };

            activityController = ActivityController({
                listActivities,
                createActivity,
                getActivity,
                httpConstants,
            });
        });

        context('When calling listActivities function', () => {
            it('should execute the api and serialize its response', async () => {
                const context = {
                    query: '...',
                    headers: 'headers',
                    res,
                };
                const response = await activityController.listActivities(
                    context
                );

                Chai.expect(response).to.be.eql(apiResponse);
                Chai.expect(res.status).to.be.have.been.called.with.exactly(
                    httpConstants.code.OK
                );

                Chai.expect(
                    listActivities.execute
                ).to.be.have.been.called.with.exactly({
                    query: context.query,
                });
            });
        });

        context('When calling createActivity function', () => {
            it('should execute the api and serialize its response', async () => {
                const context = {
                    body: '...',
                    headers: 'headers',
                    res,
                };
                const response = await activityController.createActivity(
                    context
                );

                Chai.expect(response).to.be.eql(apiResponse);
                Chai.expect(res.status).to.be.have.been.called.with.exactly(
                    httpConstants.code.CREATED
                );

                Chai.expect(
                    createActivity.execute
                ).to.be.have.been.called.with.exactly({
                    body: context.body,
                });
            });
        });

        context('When calling getActivity function', () => {
            it('should execute the api and serialize its response', async () => {
                const context = {
                    params: '...',
                    headers: 'headers',
                    res,
                };
                const response = await activityController.getActivity(context);

                Chai.expect(response).to.be.eql(apiResponse);
                Chai.expect(res.status).to.be.have.been.called.with.exactly(
                    httpConstants.code.OK
                );

                Chai.expect(
                    getActivity.execute
                ).to.be.have.been.called.with.exactly({
                    id: context.params.id,
                });
            });
        });
    });
});

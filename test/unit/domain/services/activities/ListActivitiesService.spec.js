import Chai from 'chai';
import ListActivitiesService from '../../../../../src/domain/services/activities/ListActivitiesService.js';

describe('domain :: services :: activities :: ListActivitiesService', () => {
    describe('#getActivities Function successfully', () => {
        let listActivitiesService = {},
            activityRepository = {};

        const activityRepositoryResponse = {
            limit: 100,
            offset: 1,
            offsets: 1,
            total: 1,
            activities: [
                {
                    name: 'name',
                    service: 'service',
                    subject_type: 'subject_type',
                    subject_id: 'subject_id',
                    causer_type: 'causer_type',
                    causer_id: 'causer_id',
                    request: {},
                    properties: {},
                },
            ],
        };

        beforeEach(() => {
            activityRepository.findPaginated = Chai.spy(
                () => activityRepositoryResponse
            );

            listActivitiesService = ListActivitiesService({
                activityRepository,
            });
        });

        context('When receiving params and query', () => {
            it('Should get paginated activities list', async () => {
                const data = { limit: 100, offset: 1, query: {} };

                const response = await listActivitiesService.getActivities(
                    data
                );

                Chai.expect(
                    activityRepository.findPaginated
                ).to.have.been.called.with.exactly({
                    limit: data.limit,
                    offset: data.offset,
                    query: data.query,
                });

                Chai.expect(response).to.be.instanceOf(Object);

                Chai.expect(response).to.be.equal(activityRepositoryResponse);
            });
        });
    });
});

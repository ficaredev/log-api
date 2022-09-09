import Chai from 'chai';
import CreateActivityService from '../../../../../src/domain/services/activities/CreateActivityService.js';
import newUUID from '../../../../../src/infrastructure/tools/IdentifierGenerator.js';

describe('domain :: services :: activities :: CreateActivityService', () => {
    describe('#createActivity Function successfully', () => {
        let createActivityService = {},
            createActivityFactory = {},
            activityRepository = {};

        const activityRepositoryResponse = {
            activity: 'mock data',
        };

        const toActivityObjectResponse = {
            id: newUUID(),
            name: 'mock name',
            service: 'mock service',
        };

        beforeEach(() => {
            createActivityFactory.toActivityObject = Chai.spy(
                () => toActivityObjectResponse
            );

            activityRepository.create = Chai.spy(
                () => activityRepositoryResponse.activity
            );

            createActivityService = CreateActivityService({
                activityRepository,
                createActivityFactory,
            });
        });

        context('When receiving a id', () => {
            it('Should create an activity', async () => {
                const body = {
                    name: 'mock name',
                    service: 'mock service',
                };

                await createActivityService.createActivity({
                    body,
                });

                Chai.expect(
                    createActivityFactory.toActivityObject
                ).to.have.been.called.once.with.exactly(body);

                Chai.expect(
                    activityRepository.create
                ).to.have.been.called.once.with.exactly(
                    toActivityObjectResponse
                );
            });
        });
    });
});

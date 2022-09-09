import Chai from 'chai';
import GetActivityService from '../../../../../src/domain/services/activities/GetActivityService.js';
import NotFoundException from '../../../../../src/infrastructure/exceptions/NotFoundException.js';

describe('domain :: services :: activities :: GetActivityService', () => {
    describe('#getActivity Function successfully', () => {
        let getActivityService = {},
            activityRepository = {};

        const activityRepositoryResponse = {
            activity: 'mock data',
        };

        beforeEach(() => {
            activityRepository.get = Chai.spy(
                () => activityRepositoryResponse.activity
            );

            getActivityService = GetActivityService({
                activityRepository,
            });
        });

        context('When receiving a id', () => {
            it('Should get an activity', async () => {
                const id = '123';

                await getActivityService.getActivity({
                    id,
                });

                Chai.expect(
                    activityRepository.get
                ).to.have.been.called.once.with({
                    id,
                });
            });
        });
    });

    describe('#getActivity Function with error', () => {
        let getActivityService = {},
            activityRepository = {};

        const activityRepositoryResponse = {
            error: 'mock data',
        };

        beforeEach(() => {
            activityRepository.get = Chai.spy(
                () => activityRepositoryResponse.activity
            );

            getActivityService = GetActivityService({
                activityRepository,
            });
        });

        context('When receiving an invalid id', () => {
            it('Should return not found exception', async () => {
                const id = '123';

                try {
                    await getActivityService.getActivity({
                        id,
                    });
                } catch (error) {
                    Chai.expect(
                        activityRepository.get
                    ).to.have.been.called.once.with({
                        id,
                    });

                    Chai.expect(error).to.be.an.instanceof(NotFoundException);
                    Chai.expect(error.message).to.be.eql('Activity not found');
                }
            });
        });
    });
});

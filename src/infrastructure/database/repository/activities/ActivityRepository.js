import Repository from '../Repository.js';

export default class ActivityRepository extends Repository {
    constructor({ activityModel, activityMapper, logger }) {
        super({
            ResourceModel: activityModel,
            ResourceMapper: activityMapper,
            logger,
        });
    }
}

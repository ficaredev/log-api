import NotFoundException from '../../../infrastructure/exceptions/NotFoundException.js';

export default ({ activityRepository }) => ({
    getActivity: async (query) => {
        const existentActivity = await activityRepository.get(query);

        if (!existentActivity)
            throw new NotFoundException({
                message: 'Activity not found',
            });

        return existentActivity;
    },
});

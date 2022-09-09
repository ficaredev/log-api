export default ({ activityRepository, createActivityFactory }) => ({
    createActivity: async ({ body }) => {
        const activity = createActivityFactory.toActivityObject(body);

        return await activityRepository.create(activity);
    },
});

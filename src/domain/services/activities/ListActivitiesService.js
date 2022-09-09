export default ({ activityRepository }) => ({
    getActivities: async ({ limit, offset, query }) => {
        return await activityRepository.findPaginated({ limit, offset, query });
    },
});

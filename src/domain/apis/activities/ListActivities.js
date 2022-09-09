export default ({ listActivitiesService }) => ({
    execute: async ({ query }) =>
        await listActivitiesService.getActivities(query),
});

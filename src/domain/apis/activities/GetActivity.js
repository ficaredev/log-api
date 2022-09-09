export default ({ getActivityService }) => ({
    execute: async ({ id }) => {
        await getActivityService.getActivity({
            id,
        });
    },
});

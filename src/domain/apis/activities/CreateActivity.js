export default ({ createActivityService }) => ({
    execute: async ({ body }) =>
        await createActivityService.createActivity({ body }),
});

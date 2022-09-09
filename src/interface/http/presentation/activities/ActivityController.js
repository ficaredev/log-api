import AsyncMiddleware from '../../middlewares/AsyncMiddleware.js';

export default (opts) => ({
    listActivities: AsyncMiddleware(async (ctx) => {
        const activityList = await opts.listActivities.execute({
            query: ctx.query,
        });

        return ctx.res.status(opts.httpConstants.code.OK).json(activityList);
    }),

    createActivity: AsyncMiddleware(async (ctx) => {
        const activityCreated = await opts.createActivity.execute({
            body: ctx.body,
        });

        return ctx.res
            .status(opts.httpConstants.code.CREATED)
            .json(activityCreated);
    }),

    getActivity: AsyncMiddleware(async (ctx) => {
        const activity = await opts.getActivity.execute({
            id: ctx.params.id,
        });

        return ctx.res.status(opts.httpConstants.code.OK).json(activity);
    }),
});

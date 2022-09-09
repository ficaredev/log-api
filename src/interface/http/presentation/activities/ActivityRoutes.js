export default ({ container }) => {
    const ctx = container.cradle;

    return [
        {
            method: 'get',
            path: '/activities',
            validation: {
                query: ctx.activityContract.query,
                headers: ctx.activityContract.defaultHeaders,
            },
            handler: ctx.activityController.listActivities,
        },
        {
            method: 'post',
            path: '/activities',
            validation: {
                body: ctx.activityContract.createActivity,
                headers: ctx.activityContract.defaultHeaders,
            },
            handler: ctx.activityController.createActivity,
        },
        {
            method: 'get',
            path: '/activities/:id',
            validation: {
                params: ctx.activityContract.id,
                headers: ctx.activityContract.defaultHeaders,
            },
            handler: ctx.activityController.getActivity,
        },
    ];
};

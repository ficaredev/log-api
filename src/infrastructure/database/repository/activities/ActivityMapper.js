export default ({ clear }) => ({
    toEntity: (activityObj = {}) => {
        if (!activityObj) return null;

        const {
            id,
            name,
            service,
            subject_type,
            subject_id,
            causer_type,
            causer_id,
            request,
            properties,
            created_at,
            updated_at,
        } = activityObj;

        const activity = {
            id,
            name,
            service,
            subject_type,
            subject_id,
            causer_type,
            causer_id,
            request,
            properties,
            created_at,
            updated_at,
        };

        return clear(activity);
    },

    toDatabase: (activityObj) => {
        const {
            id,
            name,
            service,
            subject_type,
            subject_id,
            causer_type,
            causer_id,
            request,
            properties,
            created_at,
            updated_at,
        } = activityObj;

        const activity = {
            id,
            name,
            service,
            subject_type,
            subject_id,
            causer_type,
            causer_id,
            request,
            properties,
            created_at,
            updated_at,
        };

        return clear(activity);
    },

    paginate: (activityList) => {
        const { docs, totalDocs, limit, totalPages, page } = activityList;

        return clear({
            activities: docs,
            total: totalDocs,
            limit,
            offsets: totalPages,
            offset: page,
        });
    },
});

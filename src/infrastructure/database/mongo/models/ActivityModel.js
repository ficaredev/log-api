import Mongoose from 'mongoose';
import Paginate from 'mongoose-paginate-v2';

export default ({ config, providerConnection, activitySchema }) => {
    const connection = providerConnection.connection;

    activitySchema.set('_id', true);

    activitySchema.add({
        _id: {
            type: Mongoose.Schema.ObjectId,
            auto: true,
        },
    });

    activitySchema.plugin(Paginate);
    activitySchema.index({ id: 1 }, { unique: true });

    return connection.model(
        config.db.collections.activity.name,
        activitySchema
    );
};

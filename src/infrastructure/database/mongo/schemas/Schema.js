import Mongoose from 'mongoose';
const MongooseSchema = Mongoose.Schema;

const defaultOptions = {
    _id: false,
    id: false,
    minimize: false,
    strict: 'throw',
    useNestedStrict: true,
    validateBeforeSave: true,
    timestamps: true,
};

export default class Schema extends MongooseSchema {
    constructor(schema, options = {}) {
        super(schema, { ...defaultOptions, ...options });
    }
}

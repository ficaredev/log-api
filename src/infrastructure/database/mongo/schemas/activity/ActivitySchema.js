import Schema from '../Schema.js';

export default new Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        service: {
            type: String,
            required: true,
        },
        subject_type: {
            type: String,
            required: false,
        },
        subject_id: {
            type: String,
            required: false,
        },
        causer_type: {
            type: String,
            required: false,
        },
        causer_id: {
            type: String,
            required: false,
        },
        request: {
            type: Object,
            required: false,
        },
        properties: {
            type: Object,
            required: false,
        },
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    }
);

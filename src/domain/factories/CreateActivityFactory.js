import newUUID from '../../infrastructure/tools/IdentifierGenerator.js';

export default () => ({
    toActivityObject: (body) => {
        return {
            id: newUUID(),
            ...body,
        };
    },
});

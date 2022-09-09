export default () => (object) => {
    Object.keys(object).forEach((key) => {
        if (object[key] === undefined || object[key] === null)
            delete object[key];
    });

    return object;
};

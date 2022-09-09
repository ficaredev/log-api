export default class ScopedRequest {
    constructor() {}

    setScopedValue(param, value) {
        this[param] = value;
    }

    getScopedValue(param) {
        return this[param];
    }
}

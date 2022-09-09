import { applicationErrorCode } from '../../../domain/enums/ErrorEnum.js';

export default ({ httpError }) =>
    ({ error_code = '', error_type, statusCode }) => {
        const method =
            applicationErrorCode[error_code] ||
            applicationErrorCode[statusCode] ||
            error_type ||
            'internalError';

        return httpError[method];
    };

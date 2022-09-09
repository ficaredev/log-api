import BusinessException from '../../exceptions/BusinessException.js';
import IntegrationException from '../../exceptions/IntegrationException.js';
import OperationException from '../../exceptions/OperationException.js';
import NotFoundException from '../../exceptions/NotFoundException.js';
import TimeoutException from '../../exceptions/TimeoutException.js';

const buildError = (data = {}, status, defaultMessage) => {
    data.error_code = data.error_code || status;
    data.message = data.message || defaultMessage;

    const error = new OperationException('Internal Server Error');
    error.details = [data];

    return { error };
};

export default ({ httpConstants }) => ({
    ok: ({ data }) => ({ data }),
    created: ({ data }) => ({ data }),
    accepted: ({ data }) => ({ data }),
    nonAuthoInformation: ({ data }) => ({ data }),
    noContent: ({ data }) => ({ data }),
    resetContent: ({ data }) => ({ data }),

    multipleChoice: ({ data, status }) =>
        buildError(
            data,
            status,
            httpConstants.message.MULTIPLE_CHOICES,
            BusinessException
        ),

    movedPermanently: ({ data, status }) =>
        buildError(
            data,
            status,
            httpConstants.message.MOVED_PERMANENTLY,
            BusinessException
        ),

    found: ({ data, status }) =>
        buildError(
            data,
            status,
            httpConstants.message.FOUND,
            BusinessException
        ),

    seeOther: ({ data, status }) =>
        buildError(
            data,
            status,
            httpConstants.message.SEE_OTHER,
            BusinessException
        ),

    useProxy: ({ data, status }) =>
        buildError(
            data,
            status,
            httpConstants.message.USE_PROXY,
            BusinessException
        ),

    unused: ({ data, status }) =>
        buildError(
            data,
            status,
            httpConstants.message.UNUSED,
            BusinessException
        ),

    temporaryRedirect: ({ data, status }) =>
        buildError(
            data,
            status,
            httpConstants.message.TEMPORARY_REDIRECT,
            BusinessException
        ),

    badRequest: ({ data, status }) =>
        buildError(
            data,
            status,
            httpConstants.message.BAD_REQUEST,
            BusinessException
        ),

    unauthorized: ({ data, status }) =>
        buildError(
            data,
            status,
            httpConstants.message.UNAUTHORIZED,
            BusinessException
        ),

    paymentRequired: ({ data, status }) =>
        buildError(
            data,
            status,
            httpConstants.message.PAYMENT_REQUIRED,
            BusinessException
        ),

    forbidden: ({ data, status }) =>
        buildError(
            data,
            status,
            httpConstants.message.FORBIDDEN,
            BusinessException
        ),

    notFound: ({ data, status }) =>
        buildError(
            data,
            status,
            httpConstants.message.NOT_FOUND,
            NotFoundException
        ),

    methodNotAllowed: ({ data, status }) =>
        buildError(
            data,
            status,
            httpConstants.message.METHOD_NOT_ALLOWED,
            BusinessException
        ),

    notAcceptable: ({ data, status }) =>
        buildError(
            data,
            status,
            httpConstants.message.NOT_ACCEPTABLE,
            BusinessException
        ),

    proxyAuthRequired: ({ data, status }) =>
        buildError(
            data,
            status,
            httpConstants.message.PROXY_AUTHENTICATION_REQUIRED,
            IntegrationException
        ),

    requestTimeOut: ({ data, status }) =>
        buildError(
            data,
            status,
            httpConstants.message.REQUEST_TIMEOUT,
            IntegrationException
        ),

    conflict: ({ data, status }) =>
        buildError(
            data,
            status,
            httpConstants.message.CONFLICT,
            IntegrationException
        ),

    unprocessableEntity: ({ data, status }) =>
        buildError(
            data,
            status,
            httpConstants.message.UNPROCESSABLE_ENTITY,
            BusinessException
        ),

    internalServer: ({ data, status }) =>
        buildError(
            data,
            status,
            httpConstants.message.INTERNAL_SERVER_ERROR,
            OperationException
        ),

    notImplemented: ({ data, status }) =>
        buildError(
            data,
            status,
            httpConstants.message.NOT_IMPLEMENTED,
            BusinessException
        ),

    badGateway: ({ data, status }) =>
        buildError(
            data,
            status,
            httpConstants.message.BAD_GATEWAY,
            IntegrationException
        ),

    serviceUnavailable: ({ data, status }) =>
        buildError(
            data,
            status,
            httpConstants.message.SERVICE_UNAVAILABLE,
            IntegrationException
        ),

    gatewayTimeOut: ({ data, status }) =>
        buildError(
            data,
            status,
            httpConstants.message.GATEWAY_TIMEOUT,
            TimeoutException
        ),

    notSupported: ({ data, status }) =>
        buildError(
            data,
            status,
            httpConstants.message.NOT_SUPPORTED,
            BusinessException
        ),
});

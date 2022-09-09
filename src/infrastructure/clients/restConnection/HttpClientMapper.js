export default ({ httpClientHandler }) => ({
    mapperData: (res) => {
        const handlerHttpStatus = {
            200: (res) => httpClientHandler.ok(res),
            201: (res) => httpClientHandler.created(res),
            202: (res) => httpClientHandler.accepted(res),
            203: (res) => httpClientHandler.nonAuthoInformation(res),
            204: (res) => httpClientHandler.noContent(res),
            205: (res) => httpClientHandler.resetContent(res),
            300: (res) => httpClientHandler.multipleChoice(res),
            301: (res) => httpClientHandler.movedPermanently(res),
            302: (res) => httpClientHandler.found(res),
            303: (res) => httpClientHandler.seeOther(res),
            305: (res) => httpClientHandler.useProxy(res),
            306: (res) => httpClientHandler.unused(res),
            307: (res) => httpClientHandler.temporaryRedirect(res),
            400: (res) => httpClientHandler.badRequest(res),
            401: (res) => httpClientHandler.unauthorized(res),
            402: (res) => httpClientHandler.paymentRequired(res),
            403: (res) => httpClientHandler.forbidden(res),
            404: (res) => httpClientHandler.notFound(res),
            405: (res) => httpClientHandler.methodNotAllowed(res),
            406: (res) => httpClientHandler.notAcceptable(res),
            407: (res) => httpClientHandler.proxyAuthRequired(res),
            408: (res) => httpClientHandler.requestTimeOut(res),
            409: (res) => httpClientHandler.conflict(res),
            422: (res) => httpClientHandler.unprocessableEntity(res),
            500: (res) => httpClientHandler.internalServer(res),
            501: (res) => httpClientHandler.notImplemented(res),
            502: (res) => httpClientHandler.badGateway(res),
            503: (res) => httpClientHandler.serviceUnavailable(res),
            504: (res) => httpClientHandler.gatewayTimeOut(res),
            505: (res) => httpClientHandler.notSupported(res),
            DEFAULT: (res) => {
                if (res.aborted) return httpClientHandler.gatewayTimeOut(res);
                return httpClientHandler.internalServer(res);
            },
        };

        const handlerErrorFunction =
            handlerHttpStatus[res.status] || handlerHttpStatus['DEFAULT'];

        return handlerErrorFunction(res);
    },
});

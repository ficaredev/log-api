import chai from 'chai';
import HttpClientMapper from '../../../../../src/infrastructure/clients/restConnection/HttpClientMapper.js';

describe('infrastructure :: clients :: restConnection :: HttpMapper :: HttpClientMapper', () => {
    let res = {},
        httpClientMapper = {},
        httpClientHandler = {};

    before(() => {
        httpClientMapper = HttpClientMapper({ httpClientHandler });
    });

    describe('#mapResponse', () => {
        context('when response has status 200', () => {
            before(() => {
                res.status = 200;
                chai.spy.on(httpClientHandler, 'ok', (res) => res);
            });

            it('calls ok function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(200);
                chai.expect(
                    httpClientHandler.ok
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 201', () => {
            before(() => {
                res.status = 201;
                chai.spy.on(httpClientHandler, 'created', (res) => res);
            });

            it('calls created function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(201);
                chai.expect(
                    httpClientHandler.created
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 202', () => {
            before(() => {
                res.status = 202;
                chai.spy.on(httpClientHandler, 'accepted', (res) => res);
            });

            it('calls accepted function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(202);
                chai.expect(
                    httpClientHandler.accepted
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 203', () => {
            before(() => {
                res.status = 203;
                chai.spy.on(
                    httpClientHandler,
                    'nonAuthoInformation',
                    (res) => res
                );
            });

            it('calls nonAuthoInformation function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(203);
                chai.expect(
                    httpClientHandler.nonAuthoInformation
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 204', () => {
            before(() => {
                res.status = 204;
                chai.spy.on(httpClientHandler, 'noContent', (res) => res);
            });

            it('calls noContent function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(204);
                chai.expect(
                    httpClientHandler.noContent
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 205', () => {
            before(() => {
                res.status = 205;
                chai.spy.on(httpClientHandler, 'resetContent', (res) => res);
            });

            it('calls resetContent function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(205);
                chai.expect(
                    httpClientHandler.resetContent
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 300', () => {
            before(() => {
                res.status = 300;
                chai.spy.on(httpClientHandler, 'multipleChoice', (res) => res);
            });

            it('calls multipleChoice function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(300);
                chai.expect(
                    httpClientHandler.multipleChoice
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 301', () => {
            before(() => {
                res.status = 301;
                chai.spy.on(
                    httpClientHandler,
                    'movedPermanently',
                    (res) => res
                );
            });

            it('calls movedPermanently function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(301);
                chai.expect(
                    httpClientHandler.movedPermanently
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 302', () => {
            before(() => {
                res.status = 302;
                chai.spy.on(httpClientHandler, 'found', (res) => res);
            });

            it('calls found function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(302);
                chai.expect(
                    httpClientHandler.found
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 303', () => {
            before(() => {
                res.status = 303;
                chai.spy.on(httpClientHandler, 'seeOther', (res) => res);
            });

            it('calls seeOther function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(303);
                chai.expect(
                    httpClientHandler.seeOther
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 305', () => {
            before(() => {
                res.status = 305;
                chai.spy.on(httpClientHandler, 'useProxy', (res) => res);
            });

            it('calls useProxy function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(305);
                chai.expect(
                    httpClientHandler.useProxy
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 306', () => {
            before(() => {
                res.status = 306;
                chai.spy.on(httpClientHandler, 'unused', (res) => res);
            });

            it('calls unused function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(306);
                chai.expect(
                    httpClientHandler.unused
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 307', () => {
            before(() => {
                res.status = 307;
                chai.spy.on(
                    httpClientHandler,
                    'temporaryRedirect',
                    (res) => res
                );
            });

            it('calls temporaryRedirect function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(307);
                chai.expect(
                    httpClientHandler.temporaryRedirect
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 400', () => {
            before(() => {
                res.status = 400;
                chai.spy.on(httpClientHandler, 'badRequest', (res) => res);
            });

            it('calls badRequest function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(400);
                chai.expect(
                    httpClientHandler.badRequest
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 401', () => {
            before(() => {
                res.status = 401;
                chai.spy.on(httpClientHandler, 'unauthorized', (res) => res);
            });

            it('calls unauthorized function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(401);
                chai.expect(
                    httpClientHandler.unauthorized
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 402', () => {
            before(() => {
                res.status = 402;
                chai.spy.on(httpClientHandler, 'paymentRequired', (res) => res);
            });

            it('calls paymentRequired function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(402);
                chai.expect(
                    httpClientHandler.paymentRequired
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 403', () => {
            before(() => {
                res.status = 403;
                chai.spy.on(httpClientHandler, 'forbidden', (res) => res);
            });

            it('calls forbidden function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(403);
                chai.expect(
                    httpClientHandler.forbidden
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 404', () => {
            before(() => {
                res.status = 404;
                chai.spy.on(httpClientHandler, 'notFound', (res) => res);
            });

            it('calls notFound function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(404);
                chai.expect(
                    httpClientHandler.notFound
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 405', () => {
            before(() => {
                res.status = 405;
                chai.spy.on(
                    httpClientHandler,
                    'methodNotAllowed',
                    (res) => res
                );
            });

            it('calls methodNotAllowed function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(405);
                chai.expect(
                    httpClientHandler.methodNotAllowed
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 406', () => {
            before(() => {
                res.status = 406;
                chai.spy.on(httpClientHandler, 'notAcceptable', (res) => res);
            });

            it('calls notAcceptable function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(406);
                chai.expect(
                    httpClientHandler.notAcceptable
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 407', () => {
            before(() => {
                res.status = 407;
                chai.spy.on(
                    httpClientHandler,
                    'proxyAuthRequired',
                    (res) => res
                );
            });

            it('calls proxyAuthRequired function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(407);
                chai.expect(
                    httpClientHandler.proxyAuthRequired
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 408', () => {
            before(() => {
                res.status = 408;
                chai.spy.on(httpClientHandler, 'requestTimeOut', (res) => res);
            });

            it('calls requestTimeOut function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(408);
                chai.expect(
                    httpClientHandler.requestTimeOut
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 409', () => {
            before(() => {
                res.status = 409;
                chai.spy.on(httpClientHandler, 'conflict', (res) => res);
            });

            it('calls conflict function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(409);
                chai.expect(
                    httpClientHandler.conflict
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 422', () => {
            before(() => {
                res.status = 422;
                chai.spy.on(
                    httpClientHandler,
                    'unprocessableEntity',
                    (res) => res
                );
            });

            it('calls unprocessableEntity function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(422);
                chai.expect(
                    httpClientHandler.unprocessableEntity
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 500', () => {
            before(() => {
                res.status = 500;
                chai.spy.on(httpClientHandler, 'internalServer', (res) => res);
            });

            it('calls internalServer function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(500);
                chai.expect(
                    httpClientHandler.internalServer
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 501', () => {
            before(() => {
                res.status = 501;
                chai.spy.on(httpClientHandler, 'notImplemented', (res) => res);
            });

            it('calls notImplemented function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(501);
                chai.expect(
                    httpClientHandler.notImplemented
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 502', () => {
            before(() => {
                res.status = 502;
                chai.spy.on(httpClientHandler, 'badGateway', (res) => res);
            });

            it('calls badGateway function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(502);
                chai.expect(
                    httpClientHandler.badGateway
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 503', () => {
            before(() => {
                res.status = 503;
                chai.spy.on(
                    httpClientHandler,
                    'serviceUnavailable',
                    (res) => res
                );
            });

            it('calls serviceUnavailable function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(503);
                chai.expect(
                    httpClientHandler.serviceUnavailable
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 504', () => {
            before(() => {
                res.status = 504;
                chai.spy.on(httpClientHandler, 'gatewayTimeOut', (res) => res);
            });

            it('calls gatewayTimeOut function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(504);
                chai.expect(
                    httpClientHandler.gatewayTimeOut
                ).to.have.been.called.once.with.exactly(res);
            });
        });

        context('when response has status 505', () => {
            before(() => {
                res.status = 505;
                res.data = {
                    error_code: 505,
                };

                chai.spy.on(httpClientHandler, 'notSupported', (res) => res);
            });

            it('calls notSupported function', () => {
                const response = httpClientMapper.mapperData(res);
                chai.expect(response).to.haveOwnProperty('status');
                chai.expect(response.status).to.equal(505);
                chai.expect(
                    httpClientHandler.notSupported
                ).to.have.been.called.once.with.exactly(res);
            });
        });
    });
});

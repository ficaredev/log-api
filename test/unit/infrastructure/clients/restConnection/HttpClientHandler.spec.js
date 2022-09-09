import chai from 'chai';
import HttpClientHandler from '../../../../../src/infrastructure/clients/restConnection/HttpClientHandler.js';
import HttpConstants from '../../../../../src/interface/http/constants/HttpConstants.js';

import OperationException from '../../../../../src/infrastructure/exceptions/OperationException.js';

describe('infrastructure :: clients :: restConnection :: HttpClientHandler', () => {
    let httpClientHandler = {},
        httpConstants = {};

    before(() => {
        httpConstants = HttpConstants();
        httpClientHandler = HttpClientHandler({ httpConstants });
    });

    describe('#ok', () => {
        context('when function is called with data', () => {
            it('returns data', () => {
                const data = { data: 'Internal Server Error' };
                const response = httpClientHandler.ok(data);
                chai.expect(response).to.haveOwnProperty('data');
                chai.expect(response.data).to.equal('Internal Server Error');
            });
        });
    });

    describe('#created', () => {
        context('when function is called with data', () => {
            it('returns data', () => {
                const data = { data: 'Internal Server Error' };
                const response = httpClientHandler.created(data);
                chai.expect(response).to.haveOwnProperty('data');
                chai.expect(response.data).to.equal('Internal Server Error');
            });
        });
    });

    describe('#accepted', () => {
        context('when function is called with data', () => {
            it('returns data', () => {
                const data = { data: 'Internal Server Error' };
                const response = httpClientHandler.accepted(data);
                chai.expect(response).to.haveOwnProperty('data');
                chai.expect(response.data).to.equal('Internal Server Error');
            });
        });
    });

    describe('#nonAuthoInformation', () => {
        context('when function is called with data', () => {
            it('returns data', () => {
                const data = { data: 'Internal Server Error' };
                const response = httpClientHandler.nonAuthoInformation(data);
                chai.expect(response).to.haveOwnProperty('data');
                chai.expect(response.data).to.equal('Internal Server Error');
            });
        });
    });

    describe('#noContent', () => {
        context('when function is called with data', () => {
            it('returns data', () => {
                const data = { data: 'Internal Server Error' };
                const response = httpClientHandler.noContent(data);
                chai.expect(response).to.haveOwnProperty('data');
                chai.expect(response.data).to.equal('Internal Server Error');
            });
        });
    });

    describe('#resetContent', () => {
        context('when function is called with data', () => {
            it('returns data', () => {
                const data = { data: 'Internal Server Error' };
                const response = httpClientHandler.resetContent(data);
                chai.expect(response).to.haveOwnProperty('data');
                chai.expect(response.data).to.equal('Internal Server Error');
            });
        });
    });

    describe('#multipleChoice', () => {
        context('when function is called with data', () => {
            it('returns error with data', () => {
                const data = { message: 'Internal Server Error' };
                const response = httpClientHandler.multipleChoice({ data });
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.haveOwnProperty('message');
                chai.expect(response.error.message).to.equal(
                    'Internal Server Error'
                );

                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
            });
        });

        context('when function is called without data', () => {
            it('returns error without data', () => {
                const response = httpClientHandler.multipleChoice({});
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
            });
        });

        afterEach(() => {
            chai.spy.restore();
        });
    });

    describe('#movedPermanently', () => {
        context('when function is called with data', () => {
            it('returns error with data', () => {
                const data = { message: 'Internal Server Error' };
                const response = httpClientHandler.movedPermanently({ data });
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.haveOwnProperty('message');
                chai.expect(response.error.message).to.equal(
                    'Internal Server Error'
                );

                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
            });
        });

        context('when function is called without data', () => {
            it('returns error without data', () => {
                const response = httpClientHandler.movedPermanently({});
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
                chai.expect(response.error.details[0].message).to.be.equal(
                    'Moved Permanently'
                );
            });
        });

        afterEach(() => {
            chai.spy.restore();
        });
    });

    describe('#found', () => {
        context('when function is called with data', () => {
            it('returns error with data', () => {
                const data = { message: 'Internal Server Error' };
                const response = httpClientHandler.found({ data });
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.haveOwnProperty('message');
                chai.expect(response.error.message).to.equal(
                    'Internal Server Error'
                );

                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
            });
        });

        context('when function is called without data', () => {
            it('returns error without data', () => {
                const response = httpClientHandler.found({});
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
                chai.expect(response.error.details[0].message).to.be.equal(
                    httpConstants.message.FOUND
                );
            });
        });

        afterEach(() => {
            chai.spy.restore();
        });
    });

    describe('#seeOther', () => {
        context('when function is called with data', () => {
            it('returns error with data', () => {
                const data = { message: 'Internal Server Error' };
                const response = httpClientHandler.seeOther({ data });
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.haveOwnProperty('message');
                chai.expect(response.error.message).to.equal(
                    'Internal Server Error'
                );

                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
            });
        });

        context('when function is called without data', () => {
            it('returns error without data', () => {
                const response = httpClientHandler.seeOther({});
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
                chai.expect(response.error.details[0].message).to.be.equal(
                    httpConstants.message.SEE_OTHER
                );
            });
        });

        afterEach(() => {
            chai.spy.restore();
        });
    });

    describe('#useProxy', () => {
        context('when function is called with data', () => {
            it('returns error with data', () => {
                const data = { message: 'Internal Server Error' };
                const response = httpClientHandler.useProxy({ data });
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.haveOwnProperty('message');
                chai.expect(response.error.message).to.equal(
                    'Internal Server Error'
                );

                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
            });
        });

        context('when function is called without data', () => {
            it('returns error without data', () => {
                const response = httpClientHandler.useProxy({});
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
                chai.expect(response.error.details[0].message).to.be.equal(
                    httpConstants.message.USE_PROXY
                );
            });
        });

        afterEach(() => {
            chai.spy.restore();
        });
    });

    describe('#unused', () => {
        context('when function is called with data', () => {
            it('returns error with data', () => {
                const data = { message: 'Internal Server Error' };
                const response = httpClientHandler.unused({ data });
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.haveOwnProperty('message');
                chai.expect(response.error.message).to.equal(
                    'Internal Server Error'
                );

                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
            });
        });

        context('when function is called without data', () => {
            it('returns error without data', () => {
                const response = httpClientHandler.unused({});
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
                chai.expect(response.error.details[0].message).to.be.equal(
                    httpConstants.message.UNUSED
                );
            });
        });

        afterEach(() => {
            chai.spy.restore();
        });
    });

    describe('#temporaryRedirect', () => {
        context('when function is called with data', () => {
            it('returns error with data', () => {
                const data = { message: 'Internal Server Error' };
                const response = httpClientHandler.temporaryRedirect({ data });
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.haveOwnProperty('message');
                chai.expect(response.error.message).to.equal(
                    'Internal Server Error'
                );

                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
            });
        });

        context('when function is called without data', () => {
            it('returns error without data', () => {
                const response = httpClientHandler.temporaryRedirect({});
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
                chai.expect(response.error.details[0].message).to.be.equal(
                    httpConstants.message.TEMPORARY_REDIRECT
                );
            });
        });

        afterEach(() => {
            chai.spy.restore();
        });
    });

    describe('#badRequest', () => {
        context('when function is called with data', () => {
            it('returns error with data', () => {
                const data = { message: 'Internal Server Error' };
                const response = httpClientHandler.badRequest({ data });
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.haveOwnProperty('message');
                chai.expect(response.error.message).to.equal(
                    'Internal Server Error'
                );

                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
            });
        });

        context('when function is called without data', () => {
            it('returns error without data', () => {
                const response = httpClientHandler.badRequest({});
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
                chai.expect(response.error.details[0].message).to.be.equal(
                    httpConstants.message.BAD_REQUEST
                );
            });
        });

        afterEach(() => {
            chai.spy.restore();
        });
    });

    describe('#unauthorized', () => {
        context('when function is called with data', () => {
            it('returns error with data', () => {
                const data = { message: 'Internal Server Error' };
                const response = httpClientHandler.unauthorized({ data });
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.haveOwnProperty('message');
                chai.expect(response.error.message).to.equal(
                    'Internal Server Error'
                );

                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
            });
        });

        context('when function is called without data', () => {
            it('returns error without data', () => {
                const response = httpClientHandler.unauthorized({});
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
                chai.expect(response.error.details[0].message).to.be.equal(
                    httpConstants.message.UNAUTHORIZED
                );
            });
        });

        afterEach(() => {
            chai.spy.restore();
        });
    });

    describe('#paymentRequired', () => {
        context('when function is called with data', () => {
            it('returns error with data', () => {
                const data = { message: 'Internal Server Error' };
                const response = httpClientHandler.paymentRequired({ data });
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.haveOwnProperty('message');
                chai.expect(response.error.message).to.equal(
                    'Internal Server Error'
                );

                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
            });
        });

        context('when function is called without data', () => {
            it('returns error without data', () => {
                const response = httpClientHandler.paymentRequired({});
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
                chai.expect(response.error.details[0].message).to.be.equal(
                    httpConstants.message.PAYMENT_REQUIRED
                );
            });
        });

        afterEach(() => {
            chai.spy.restore();
        });
    });

    describe('#forbidden', () => {
        context('when function is called with data', () => {
            it('returns error with data', () => {
                const data = { message: 'Internal Server Error' };
                const response = httpClientHandler.forbidden({ data });
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.haveOwnProperty('message');
                chai.expect(response.error.message).to.equal(
                    'Internal Server Error'
                );

                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
            });
        });

        context('when function is called without data', () => {
            it('returns error without data', () => {
                const response = httpClientHandler.forbidden({});
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
                chai.expect(response.error.details[0].message).to.be.equal(
                    httpConstants.message.FORBIDDEN
                );
            });
        });

        afterEach(() => {
            chai.spy.restore();
        });
    });

    describe('#notFound', () => {
        context('when function is called with data', () => {
            it('returns error with data', () => {
                const data = { message: 'Internal Server Error' };
                const response = httpClientHandler.notFound({ data });
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.haveOwnProperty('message');
                chai.expect(response.error.message).to.equal(
                    'Internal Server Error'
                );

                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
            });
        });

        context('when function is called without data', () => {
            it('returns error without data', () => {
                const response = httpClientHandler.notFound({});
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
                chai.expect(response.error.details[0].message).to.be.equal(
                    httpConstants.message.NOT_FOUND
                );
            });
        });

        afterEach(() => {
            chai.spy.restore();
        });
    });

    describe('#methodNotAllowed', () => {
        context('when function is called with data', () => {
            it('returns error with data', () => {
                const data = { message: 'Internal Server Error' };
                const response = httpClientHandler.methodNotAllowed({ data });
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.haveOwnProperty('message');
                chai.expect(response.error.message).to.equal(
                    'Internal Server Error'
                );

                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
            });
        });

        context('when function is called without data', () => {
            it('returns error without data', () => {
                const response = httpClientHandler.methodNotAllowed({});
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
                chai.expect(response.error.details[0].message).to.be.equal(
                    httpConstants.message.METHOD_NOT_ALLOWED
                );
            });
        });

        afterEach(() => {
            chai.spy.restore();
        });
    });

    describe('#notAcceptable', () => {
        context('when function is called with data', () => {
            it('returns error with data', () => {
                const data = { message: 'Internal Server Error' };
                const response = httpClientHandler.notAcceptable({ data });
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.haveOwnProperty('message');
                chai.expect(response.error.message).to.equal(
                    'Internal Server Error'
                );

                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
            });
        });

        context('when function is called without data', () => {
            it('returns error without data', () => {
                const response = httpClientHandler.notAcceptable({});
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
                chai.expect(response.error.details[0].message).to.be.equal(
                    httpConstants.message.NOT_ACCEPTABLE
                );
            });
        });

        afterEach(() => {
            chai.spy.restore();
        });
    });

    describe('#proxyAuthRequired', () => {
        context('when function is called with data', () => {
            it('returns error with data', () => {
                const data = { message: 'Internal Server Error' };
                const response = httpClientHandler.proxyAuthRequired({ data });
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.haveOwnProperty('message');
                chai.expect(response.error.message).to.equal(
                    'Internal Server Error'
                );

                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
            });
        });

        context('when function is called without data', () => {
            it('returns error without data', () => {
                const response = httpClientHandler.proxyAuthRequired({});
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
                chai.expect(response.error.details[0].message).to.be.equal(
                    httpConstants.message.PROXY_AUTHENTICATION_REQUIRED
                );
            });
        });

        afterEach(() => {
            chai.spy.restore();
        });
    });

    describe('#requestTimeOut', () => {
        context('when function is called with data', () => {
            it('returns error with data', () => {
                const data = { message: 'Internal Server Error' };
                const response = httpClientHandler.requestTimeOut({ data });
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.haveOwnProperty('message');
                chai.expect(response.error.message).to.equal(
                    'Internal Server Error'
                );

                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
            });
        });

        context('when function is called without data', () => {
            it('returns error without data', () => {
                const response = httpClientHandler.requestTimeOut({});
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
                chai.expect(response.error.details[0].message).to.be.equal(
                    httpConstants.message.REQUEST_TIMEOUT
                );
            });
        });

        afterEach(() => {
            chai.spy.restore();
        });
    });

    describe('#conflict', () => {
        context('when function is called with data', () => {
            it('returns error with data', () => {
                const data = { message: 'Internal Server Error' };
                const response = httpClientHandler.conflict({ data });
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.haveOwnProperty('message');
                chai.expect(response.error.message).to.equal(
                    'Internal Server Error'
                );

                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
            });
        });

        context('when function is called without data', () => {
            it('returns error without data', () => {
                const response = httpClientHandler.conflict({});
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
                chai.expect(response.error.details[0].message).to.be.equal(
                    httpConstants.message.CONFLICT
                );
            });
        });

        afterEach(() => {
            chai.spy.restore();
        });
    });

    describe('#unprocessableEntity', () => {
        context('when function is called with data', () => {
            it('returns error with data', () => {
                const data = { message: 'Internal Server Error' };
                const response = httpClientHandler.unprocessableEntity({
                    data,
                });
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.haveOwnProperty('message');
                chai.expect(response.error.message).to.equal(
                    'Internal Server Error'
                );

                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
            });
        });

        context('when function is called without data', () => {
            it('returns error without data', () => {
                const response = httpClientHandler.unprocessableEntity({});
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
                chai.expect(response.error.details[0].message).to.be.equal(
                    httpConstants.message.UNPROCESSABLE_ENTITY
                );
            });
        });

        afterEach(() => {
            chai.spy.restore();
        });
    });

    describe('#internalServer', () => {
        context('when function is called with data', () => {
            it('returns error with data', () => {
                const data = { message: 'Internal Server Error' };
                const response = httpClientHandler.internalServer({ data });
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.haveOwnProperty('message');
                chai.expect(response.error.message).to.equal(
                    'Internal Server Error'
                );

                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
            });
        });

        context('when function is called without data', () => {
            it('returns error without data', () => {
                const response = httpClientHandler.internalServer({});
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
                chai.expect(response.error.message).to.be.equal(
                    httpConstants.message.INTERNAL_SERVER_ERROR
                );
            });
        });

        afterEach(() => {
            chai.spy.restore();
        });
    });

    describe('#notImplemented', () => {
        context('when function is called with data', () => {
            it('returns error with data', () => {
                const data = { message: 'Internal Server Error' };
                const response = httpClientHandler.notImplemented({ data });
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.haveOwnProperty('message');
                chai.expect(response.error.message).to.equal(
                    'Internal Server Error'
                );

                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
            });
        });

        context('when function is called without data', () => {
            it('returns error without data', () => {
                const response = httpClientHandler.notImplemented({});
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
                chai.expect(response.error.details[0].message).to.be.equal(
                    httpConstants.message.NOT_IMPLEMENTED
                );
            });
        });

        afterEach(() => {
            chai.spy.restore();
        });
    });

    describe('#badGateway', () => {
        context('when function is called with data', () => {
            it('returns error with data', () => {
                const data = { message: 'Internal Server Error' };
                const response = httpClientHandler.badGateway({ data });
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.haveOwnProperty('message');
                chai.expect(response.error.message).to.equal(
                    'Internal Server Error'
                );

                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
            });
        });

        context('when function is called without data', () => {
            it('returns error without data', () => {
                const response = httpClientHandler.badGateway({});
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
                chai.expect(response.error.details[0].message).to.be.equal(
                    httpConstants.message.BAD_GATEWAY
                );
            });
        });

        afterEach(() => {
            chai.spy.restore();
        });
    });

    describe('#serviceUnavailable', () => {
        context('when function is called with data', () => {
            it('returns error with data', () => {
                const data = { message: 'Internal Server Error' };
                const response = httpClientHandler.serviceUnavailable({
                    data,
                });
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.haveOwnProperty('message');
                chai.expect(response.error.message).to.equal(
                    'Internal Server Error'
                );

                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
            });
        });

        context('when function is called without data', () => {
            it('returns error without data', () => {
                const response = httpClientHandler.serviceUnavailable({});
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
                chai.expect(response.error.details[0].message).to.be.equal(
                    httpConstants.message.SERVICE_UNAVAILABLE
                );
            });
        });

        afterEach(() => {
            chai.spy.restore();
        });
    });

    describe('#gatewayTimeOut', () => {
        context('when function is called with data', () => {
            it('returns error with data', () => {
                const data = { message: 'Internal Server Error' };
                const response = httpClientHandler.gatewayTimeOut({ data });
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.haveOwnProperty('message');
                chai.expect(response.error.message).to.equal(
                    'Internal Server Error'
                );
            });
        });

        context('when function is called without data', () => {
            it('returns error without data', () => {
                const response = httpClientHandler.gatewayTimeOut({});
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error.details[0].message).to.be.equal(
                    httpConstants.message.GATEWAY_TIMEOUT
                );
            });
        });

        afterEach(() => {
            chai.spy.restore();
        });
    });

    describe('#notSupported', () => {
        context('when function is called with data', () => {
            it('returns error with data', () => {
                const data = { message: 'Internal Server Error' };
                const response = httpClientHandler.notSupported({ data });
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.haveOwnProperty('message');
                chai.expect(response.error.message).to.equal(
                    'Internal Server Error'
                );

                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
            });
        });

        context('when function is called without data', () => {
            it('returns error without data', () => {
                const response = httpClientHandler.notSupported({});
                chai.expect(response).to.haveOwnProperty('error');
                chai.expect(response.error).to.be.an('error');
                chai.expect(response.error).to.be.instanceof(
                    OperationException
                );
                chai.expect(response.error.details[0].message).to.be.equal(
                    httpConstants.message.NOT_SUPPORTED
                );
            });
        });

        afterEach(() => {
            chai.spy.restore();
        });
    });
});

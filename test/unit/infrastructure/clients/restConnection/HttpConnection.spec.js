import Chai from 'chai';
import HttpConnection from '../../../../../src/infrastructure/clients/restConnection/HttpConnection.js';

describe('infrastructure :: clients :: restConnection :: HtpConnection', () => {
    let httpConnection;

    describe('When not occurs error', () => {
        beforeEach(() => {
            httpConnection = new HttpConnection({
                baseURL: 'test.url',
            });
            Chai.spy.on(httpConnection, 'sendRequest', (method, options) =>
                Promise.resolve({ method, options })
            );
        });

        context('calls post method', () => {
            it('should calls sendRequest function', async () => {
                let headers = 'testMock',
                    url = 'testMock',
                    queryParams = 'testMock',
                    body = 'testMock',
                    responseType = 'testMock';

                await httpConnection.post({
                    headers,
                    url,
                    queryParams,
                    body,
                    responseType,
                });

                Chai.expect(
                    httpConnection.sendRequest
                ).to.have.been.called.with.exactly('post', {
                    url,
                    headers: headers,
                    params: queryParams,
                    data: body,
                    responseType,
                });
            });
        });

        context('calls put method', () => {
            it('should calls sendRequest function', async () => {
                let headers = 'testMock',
                    url = 'testMock',
                    queryParams = 'testMock',
                    body = 'testMock',
                    responseType = 'testMock';

                await httpConnection.put({
                    headers,
                    url,
                    queryParams,
                    body,
                    responseType,
                });

                Chai.expect(
                    httpConnection.sendRequest
                ).to.have.been.called.with.exactly('put', {
                    url,
                    headers: headers,
                    params: queryParams,
                    data: body,
                    responseType,
                });
            });
        });

        context('calls patch method', () => {
            it('should calls sendRequest function', async () => {
                let headers = 'testMock',
                    url = 'testMock',
                    queryParams = 'testMock',
                    body = 'testMock',
                    responseType = 'testMock';

                await httpConnection.patch({
                    headers,
                    url,
                    queryParams,
                    body,
                    responseType,
                });

                Chai.expect(
                    httpConnection.sendRequest
                ).to.have.been.called.with.exactly('patch', {
                    url,
                    headers: headers,
                    params: queryParams,
                    data: body,
                    responseType,
                });
            });
        });

        context('calls delete method', () => {
            it('should calls sendRequest function', async () => {
                let headers = 'testMock',
                    url = 'testMock',
                    queryParams = 'testMock',
                    responseType = 'testMock';

                await httpConnection.get({
                    headers,
                    url,
                    queryParams,
                    responseType,
                });

                Chai.expect(
                    httpConnection.sendRequest
                ).to.have.been.called.with.exactly('get', {
                    url,
                    headers,
                    params: queryParams,
                    responseType,
                });
            });
        });

        context('calls delete method', () => {
            it('should calls sendRequest function', async () => {
                let headers = 'testMock',
                    url = 'testMock',
                    queryParams = 'testMock',
                    responseType = 'testMock';

                await httpConnection.delete({
                    headers,
                    url,
                    queryParams,
                    responseType,
                });

                Chai.expect(
                    httpConnection.sendRequest
                ).to.have.been.called.with.exactly('delete', {
                    url,
                    headers,
                    params: queryParams,
                    responseType,
                });
            });
        });
    });
});

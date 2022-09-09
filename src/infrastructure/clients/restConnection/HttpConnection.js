import Axios from 'axios';

class HttpConnection {
    constructor({
        baseURL,
        timeout = 3000,
        rejectUnauthorized = false,
        paramsSerializer,
        authorization,
    }) {
        const axiosConfig = {
            baseURL,
            timeout,
            paramsSerializer,
        };

        this.client = Axios.create(axiosConfig);

        this.client.interceptors.response.use(
            (response) => response,
            ({ response, request }) => response || request
        );

        this.authorization = authorization;
        this.baseURL = baseURL;
        this.rejectUnauthorized = rejectUnauthorized;
    }
    async post({ headers = {}, url, queryParams = {}, body, responseType }) {
        return this.sendRequest('post', {
            url,
            headers: headers,
            params: queryParams,
            data: body,
            responseType,
        });
    }
    async get({ headers = {}, url, queryParams = {}, responseType }) {
        return this.sendRequest('get', {
            url,
            headers,
            params: queryParams,
            responseType,
        });
    }
    async put({ headers = {}, url, queryParams = {}, body, responseType }) {
        return this.sendRequest('put', {
            url,
            headers,
            params: queryParams,
            data: body,
            responseType,
        });
    }
    async patch({ headers = {}, url, queryParams = {}, body, responseType }) {
        return this.sendRequest('patch', {
            url,
            headers,
            params: queryParams,
            data: body,
            responseType,
        });
    }
    async delete({ headers = {}, url, queryParams = {}, responseType }) {
        return this.sendRequest('delete', {
            url,
            headers,
            params: queryParams,
            responseType,
        });
    }
    async sendRequest(method, options = {}) {
        const request = { method, ...options };
        return await this.client(request);
    }
}
export default HttpConnection;

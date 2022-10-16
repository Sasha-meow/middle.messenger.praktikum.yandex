import { IRequestOptions } from "@constants/types/global";
import { Methods } from "@constants/constants";
import { queryStringify } from "./queryStringify";

export default class HTTPTransport {
    public url: string;

    constructor(url: string) {
        this.url = url;
    }

    public get = (path: string, options: IRequestOptions = {}) => {
        const resultUrl = !!options.data ? `${this.url}${path}${queryStringify(options.data)}` : `${this.url}${path}`;

        return this.request(resultUrl, { ...options, method: Methods.GET });
    };

    public post = (path: string, options: IRequestOptions) => {
        return this.request(`${this.url}${path}`, { ...options, method: Methods.POST });
    };

    public put = (path: string, options: IRequestOptions) => {
        return this.request(`${this.url}${path}`, { ...options, method: Methods.PUT });
    };

    public patch = (path: string, options: IRequestOptions) => {
        return this.request(`${this.url}${path}`, { ...options, method: Methods.PATCH });
    };

    public delete = (path: string, options: IRequestOptions) => {
        return this.request(`${this.url}${path}`, { ...options, method: Methods.DELETE });
    };

    private request = (url: string, options: IRequestOptions): Promise<Response> => {
        const { headers = {}, method, data, timeout = 3000, credentials = true } = options;

        return new Promise(function (resolve, reject) {
            if (!method) {
                reject("No method");
                return;
            }

            const xhr = new XMLHttpRequest();

            xhr.open(method, url);

            xhr.timeout = timeout;

            Object.keys(headers).forEach((key) => {
                xhr.setRequestHeader(key, headers[key]);
            });

            xhr.onload = () => {
                if (xhr.status < 400) {
                    resolve(xhr.response);
                } else {
                    reject(xhr);
                }
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            // временно

            xhr.withCredentials = credentials;
            xhr.responseType = "json";
            //временно
            if (method === Methods.GET || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}

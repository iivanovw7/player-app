import type {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    InternalAxiosRequestConfig
} from 'axios';
import axios from 'axios';
import { clone } from 'ramda';

import type { RequestOptions, Result, UploadFileParams } from '#/api/http';

import { ContentType, RequestMethod } from '../http';
import { isString } from '../lang';

export type CreateAxiosOptions = AxiosRequestConfig & {
    requestOptions?: RequestOptions;
};

/*
    eslint-disable
    @typescript-eslint/no-unsafe-argument,
    @typescript-eslint/no-explicit-any,
    require-jsdoc
*/

export class AxiosClient {
    private axiosInstance: AxiosInstance;

    private readonly options: CreateAxiosOptions;

    constructor(options: CreateAxiosOptions) {
        this.options = options;
        this.axiosInstance = axios.create(options);
        this.setupInterceptors();
    }

    private createAxios(config: CreateAxiosOptions): void {
        this.axiosInstance = axios.create(config);
    }

    private setupInterceptors() {
        this.axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
            // If cancel repeat request is turned on, then cancel repeat request is prohibited
            const { requestOptions } = this.options;
            const apiUrl = requestOptions?.apiUrl;

            if (apiUrl && isString(apiUrl)) {
                config.url = `${apiUrl}${config.url as string}`;
            }

            return config;
        }, undefined);
    }

    public getAxios(): AxiosInstance {
        return this.axiosInstance;
    }

    /**
     * Reconfigure axios.
     * @param {CreateAxiosOptions} config - config instance.
     */
    public configAxios(config: CreateAxiosOptions) {
        this.createAxios(config);
    }

    public setHeader(headers: any): void {
        if (this.axiosInstance) {
            Object.assign(this.axiosInstance.defaults.headers, headers);
        }
    }

    public uploadFile<T = any>(config: AxiosRequestConfig, params: UploadFileParams) {
        const formData = new window.FormData();
        const customFilename = params.name || 'file';

        if (params.filename) {
            formData.append(customFilename, params.file, params.filename);
        }
        else {
            formData.append(customFilename, params.file);
        }

        if (params.data) {
            Object.keys(params.data).forEach((key) => {
                const value = params.data![key];

                if (Array.isArray(value)) {
                    value.forEach((item) => {
                        formData.append(`${key}[]`, item as string | Blob);
                    });

                    return;
                }

                formData.append(key, params.data![key]);
            });
        }

        return this.axiosInstance.request<T>({
            ...config,
            data: formData,
            headers: {
                'Content-type': ContentType.FORM_DATA,
                ignoreCancelToken: true,
            },
            method: 'POST',
        });
    }

    public get<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
        return this.request({ ...config, method: RequestMethod.GET }, options);
    }

    public post<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
        return this.request({ ...config, method: RequestMethod.POST }, options);
    }

    public put<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
        return this.request({ ...config, method: RequestMethod.PUT }, options);
    }

    public delete<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
        return this.request({ ...config, method: RequestMethod.DELETE }, options);
    }

    public request<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
        const conf: CreateAxiosOptions = clone(config);

        if (config.cancelToken) {
            conf.cancelToken = config.cancelToken;
        }

        const { requestOptions } = this.options;

        conf.requestOptions = { ...requestOptions, ...options };

        return new Promise((resolve, reject) => {
            this.axiosInstance
                .request<any, AxiosResponse<Result>>(conf)
                .then((res: AxiosResponse<Result>) => {
                    resolve(res as unknown as Promise<T>);
                })
                .catch((e: Error | AxiosError) => {
                    if (axios.isAxiosError(e)) {
                        // rewrite error message from axios in here
                    }

                    reject(e);
                });
        });
    }
}

/*
    eslint-enable
    @typescript-eslint/no-unsafe-argument,
    @typescript-eslint/no-explicit-any,
    require-jsdoc
*/

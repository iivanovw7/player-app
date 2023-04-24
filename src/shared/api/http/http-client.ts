/**
 * Module contains http client lib.
 * @module src/shared/api/http/http-client
 */

import type { AxiosRequestConfig, AxiosResponse, ResponseType as AxiosResponseType } from 'axios';
import axios from 'axios';

import { config } from '../../config';

/* eslint-disable @typescript-eslint/no-explicit-any */

export type QueryParamsType = Record<string | number, any>;

export type FullRequestParams = Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> & {
    /** request body */
    body?: unknown;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: AxiosResponseType;
    /** request path */
    path: string;
    /** query params */
    query?: QueryParamsType;
    /** content type of request body */
    type?: ContentType;
};

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export const ContentType = {
    FormData: 'multipart/form-data',
    Json: 'application/json',
    UrlEncoded: 'application/json'
};

export type ContentType = typeof ContentType[keyof typeof ContentType];

export const http = {
    request: async <T = any, _E = any>({
        path,
        query,
        format,
        body,
        ...params
    }: FullRequestParams): Promise<AxiosResponse<T, _E>> => {
        return axios.request({
            ...params,
            data: body,
            params: query,
            responseType: format,
            timeout: config.net.requestTimeout,
            url: path,
        });
    },
};

/* eslint-enable @typescript-eslint/no-explicit-any */

/**
 * Module contains http client lib.
 * @module src/shared/api/http/http-client
 */
import type { AxiosRequestConfig, ResponseType as AxiosResponseType } from 'axios';

import { createAxios } from '../../../../utils/axios';
import { type ContentType } from '../../../../utils/http';

/* eslint-disable @typescript-eslint/no-explicit-any */

export type QueryParamsType = Record<string | number, any>;

export type FullRequestParams = Omit<AxiosRequestConfig, 'method' | 'data' | 'params' | 'url' | 'responseType'> & {
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

export const http = createAxios({
    requestOptions: {
        apiUrl: '/basic-api'
    }
});

/* eslint-enable @typescript-eslint/no-explicit-any */

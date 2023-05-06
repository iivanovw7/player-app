/**
 * Module contains http client lib.
 * @module src/shared/api/http/basic-api/http-client
 */
import type { AxiosError } from 'axios';
import type { AxiosResponse, AxiosInstance } from 'axios/index';

import type { TBasicApiResult } from '#/api/basic-api';

import { authStore } from '../../../stores/AuthStore';
import { createAxios, ErrorCodeMap, getErrorCode } from '../../../utils';

/* eslint-disable @typescript-eslint/no-explicit-any */

export const http = createAxios({
    requestOptions: {
        apiUrl: '/basic-api',
    },
    transform: {
        requestInterceptors: (config) => {
            (config as Recordable).headers.Authorization = `Bearer ${authStore.state?.accessToken || ''}`;

            return config;
        },
        responseInterceptors: <Data>(res: AxiosResponse<Data>): Data => {
            return res?.data;
        },
        responseInterceptorsCatch: (axiosInstance: AxiosInstance, error: AxiosError) => {
            const code = getErrorCode((error as AxiosError<TBasicApiResult<any>>).response?.data?.code);

            if (code === ErrorCodeMap.BASIC_API_AUTHENTICATION_ERROR) {
                authStore.actions.logout();
            }

            return Promise.reject(error);
        }
    }
});

/* eslint-enable @typescript-eslint/no-explicit-any */

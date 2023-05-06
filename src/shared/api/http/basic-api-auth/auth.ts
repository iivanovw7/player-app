/**
 * Module contains shared basic-api auth methods.
 * @module src/shared/api/http/basic-api-auth/auth
 */

import type { AxiosRequestConfig } from 'axios/index';

import type { TLoginData, TBasicApiResult, TLoginResult } from '#/api/basic-api';

import { http } from './http-client';

export const authApi = {
    login: async (data: TLoginData, config: AxiosRequestConfig = {}) => {
        return http.post<TBasicApiResult<TLoginResult>>({
            data,
            responseType: 'json',
            url: '/login',
            ...config
        });
    },
    refresh: async (config: AxiosRequestConfig = {}) => {
        return http.post<TBasicApiResult<TLoginResult>>({
            responseType: 'json',
            url: '/refresh',
            ...config
        });
    }
};

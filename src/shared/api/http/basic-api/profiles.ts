/**
 * Module contains shared basic-api profiles methods.
 * @module src/shared/api/http/basic-api/profiles
 */

import type { TProfile, TBasicApiListResult } from '#/api/basic-api';

import { RequestMethod } from '../../../utils';
import { http, type RequestParams } from '../http-client';

export const profilesApi = {
    getProfiles: async (params: RequestParams = {}) => {
        return http.request<TBasicApiListResult<TProfile>, unknown>({
            method: RequestMethod.GET,
            path: '/basic-api/getProfiles',
            ...params,
        });
    },
};

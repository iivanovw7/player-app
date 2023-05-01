/**
 * Module contains shared basic-api profiles methods.
 * @module src/shared/api/http/basic-api/profiles
 */

import type { TProfile, TBasicApiListResult } from '#/api/basic-api';

import { http, type RequestParams } from './lib';

export const profilesApi = {
    getProfiles: async (params: RequestParams = {}) => http.get<TBasicApiListResult<TProfile>>({
        url: '/getProfiles',
        ...params
    })
};

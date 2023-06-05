/**
 * Module contains http client lib.
 * @module src/shared/api/http/basic-api-auth/http-client
 */
import type { AxiosResponse } from 'axios/index';

import { createAxios } from '../../../utils';

/* eslint-disable @typescript-eslint/no-explicit-any */

export const http = createAxios({
    requestOptions: {
        apiUrl: '/basic-api',
    },
    transform: {
        responseInterceptors: <Data>(res: AxiosResponse<Data>): Data => {
            return res?.data;
        },
    }
});

/* eslint-enable @typescript-eslint/no-explicit-any */

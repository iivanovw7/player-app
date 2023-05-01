import type { AxiosRequestConfig } from 'axios';
import { mergeDeepRight } from 'ramda';

import type { RequestOptions } from '#/api/http';

import { config } from '../../config';
import { ContentType } from '../http';

import { AxiosClient } from './Axios';

export type CreateAxiosOptions = AxiosRequestConfig & {
    requestOptions?: RequestOptions;
};

/**
 * Create new axios client instance.
 * @param {CreateAxiosOptions} [opt] - client options.
 * @return {AxiosClient} axis client.
 */
export const createAxios = (opt: Partial<CreateAxiosOptions> = {}) => {
    return new AxiosClient(
        mergeDeepRight(
            {
                headers: { 'Content-Type': ContentType.JSON },
                timeout: config.net.requestTimeout,
            },
            opt
        ) as Partial<CreateAxiosOptions>
    );
};

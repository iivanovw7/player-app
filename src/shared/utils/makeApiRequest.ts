/**
 * Module contains request utility functions.
 * @module shared/utils/makeApiRequest
 */
import type { ValidationError } from 'yup';

import { getLogger } from '../log';

import { isValidationError } from './validation';

type SetLoading = (isLoading: boolean) => void;

export type MakeApiRequestParams<Req extends () => Promise<unknown>> = {
    ignoreErrors?: unknown[];
    onRequestError?: (error: unknown) => void;
    onValidationError?: (error: ValidationError) => void;
    request: Req;
    setLoading?: SetLoading;
};

const logger = getLogger('Request');

/**
 * Network request helper function.
 * Also accepts error handlers and loader in parameters.
 * @func makeApiRequest
 * @category Request
 * @param {MakeApiRequestParams} params - object represents request parameters.
 * @return {Promise.<boolean | undefined>} The element found, or the default value.
 */
export const makeApiRequest = async <Req extends () => Promise<unknown>, Res = AsyncReturnType<Req>>(
    params: MakeApiRequestParams<Req>
    // eslint-disable-next-line consistent-return
): Promise<Voidable<Res extends Maybe<void> ? true : Res>> => {
    const {
        request,
        onRequestError,
        onValidationError,
        setLoading,
    } = params;

    try {
        setLoading?.(true);

        const result = await request();

        return await ((result ?? true) as unknown as Promise<Voidable<Res extends Maybe<void> ? true : Res>>);
    }
    catch (errorData: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
        if (isValidationError(errorData)) {
            logger.error('[ValidationError]:', errorData.path, errorData.errors);
            onValidationError?.(errorData);
        }
        else {
            logger.error(errorData);
            onRequestError?.(errorData);
        }
    }
    finally {
        setLoading?.(false);
    }
};

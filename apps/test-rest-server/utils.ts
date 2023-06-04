import type { TBasicApiResult } from '../../types/api/basic-api';

export const resultSuccess = <T>(result: T, { message = 'ok' } = {}) => ({
    code: 0,
    result,
    message,
    success: true
});

export const resultError = (code = 5000, { message = 'Unknown error' } = {}) => ({
    code,
    result: null,
    message,
    success: false,
});

/**
 *  Represents result constructor.
 */
export class Result {
    /**
     * Successful server response.
     * @param {*} data - result data.
     * @return {Object} response - response data.
     */
    static success<Data>(data: Data): TBasicApiResult<Data> {
        return resultSuccess(data);
    }

    /**
     * Not found Error.
     * @return {Object} response - response data.
     */
    static notFoundError(message = 'Not Found'): TBasicApiResult<null> {
        return resultError(4004, {
            message
        });
    }

    /**
     * Forbidden server error.
     * @return {Object} response - response data.
     */
    static forbiddenError(message = 'Forbidden'): TBasicApiResult<null> {
        return resultError(4003, {
            message
        });
    }

    /**
     * Authorization server error.
     * @return {Object} response - response data.
     */
    static authorizationError(): TBasicApiResult<null> {
        return resultError(4001, {
            message: 'Basic API Authorization error'
        });
    }
}

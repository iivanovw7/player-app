import type { TBasicApiResult } from '../../types/api/basic-api';

export const resultSuccess = <T>(result: T, { message = 'ok' } = {}) => ({
    code: 0,
    result,
    message,
    success: true
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
}

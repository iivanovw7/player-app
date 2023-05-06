/**
 * Module contains application error codes.
 * @module src/shared/utils/ErrorCodeMap
 */

import { isNumber } from './lang';

/**
 * Error codes.
 * @category ErrorCodeMap
 * @readonly
 * @enum {number}
 */
export const ErrorCodeMap = {
    BASIC_API_AUTHENTICATION_ERROR: 4001,
    BASIC_API_INVALID_CREDENTIALS: 4006,
    NOT_FOUND: 404,
    UNAUTHORIZED: 401,
    UNKNOWN_ERROR: 5000,
} as const;

export type ErrorCodeMap = Readonly<typeof ErrorCodeMap[keyof typeof ErrorCodeMap]>;

export type ErrorData = Readonly<{
    code: ValueOf<typeof ErrorCodeMap>;
}>;

/**
 * Returns error message code.
 * @param {module:util/ErrorData | number} error
 *      Объект, представляющий сведения об ошибке, или код ошибки.
 * @return {number} error code.
 */
export function getErrorCode(error: ErrorData | number = ErrorCodeMap.UNKNOWN_ERROR): number {
    return isNumber(error)
        ? error
        : error.code;
}


/**
 * Error code prefix.
 * @category ERROR_PREFIX
 * @readonly
 * @enum {string}
 */
export const ERROR_PREFIX: Readonly<string> = 'NSES';

/**
 * Returns error message containing code provided.
 * @function
 * @category ErrorCodeMap
 * @param {Object | number} error - code or error object.
 * @return {string} error code message.
 */
export const getErrorCodeString = (error: ErrorData | number = ErrorCodeMap.UNKNOWN_ERROR) => {
    return `${ERROR_PREFIX}-${getErrorCode(error)}`;
};

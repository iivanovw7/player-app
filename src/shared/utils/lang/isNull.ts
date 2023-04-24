/**
 * Module contains isNull type check helper.
 * @module shared/utils/lang/isNull
 */

import { equals } from 'ramda';

/**
 * Checks if input value is `null`.
 * @func isNull
 * @category Lang
 * @param {*} val The value to test
 * @return {boolean}
 * @example
 *      isNull(1); //=> false
 *      isNull(undefined); //=> false
 *      isNull(null); //=> true
 */
export const isNull = equals<unknown>(null);

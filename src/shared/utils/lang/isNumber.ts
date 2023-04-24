/**
 * Module contains isNumber type check helper.
 * @module shared/utils/lang/isNumber
 */

import { curryN, identical, pipe, type } from 'ramda';

/**
 * Checks if value is a `Number` primitive or object.
 * @func isNumber
 * @category Lang
 * @param {*} val The value to test
 * @return {boolean}
 */
export const isNumber = curryN(1, pipe(type, identical('Number')));

/**
 * Module contains isString type check helper.
 * @module shared/utils/lang/isString
 */

import { curryN, identical, pipe, type } from 'ramda';

/**
 * Checks if input value is `String`.
 * @func isString
 * @category Lang
 * @return {boolean}
 */
export const isString = curryN(1, pipe(type, identical('String')));

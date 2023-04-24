/**
 * Module contains isNotNull type check helper.
 * @module shared/utils/lang/isNotNull
 */

import { complement } from 'ramda';

import { isNull } from './isNull';

/**
 * Checks if input value is `null`.
 * @func isNotNull
 * @category Lang
 * @param {*} val The value to test
 * @return {boolean}
 * @example
 *      isNotNull(1); //=> true
 *      isNotNull(undefined); //=> true
 *      isNotNull(null); //=> false
 */
export const isNotNull = complement(isNull);

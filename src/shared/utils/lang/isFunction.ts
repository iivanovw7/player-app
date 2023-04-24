/**
 * Module contains isFunction type check helper.
 * @module shared/utils/lang/isFunction
 */

import { anyPass, identical, pipe, type } from 'ramda';

/**
 * Checks if input value is `Function`.
 * @func isFunction
 * @category Lang
 * @param {*} val The value to test
 * @return {boolean} whether or not passed instance is function.
 */
export const isFunction = anyPass([
    pipe(type, identical('Function')),
    // can be extended, e.g. generator function check, async function check, etc.
]);

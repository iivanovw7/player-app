/**
 * Module contains environment related utils.
 * @module src/shared/utils/env
 */

import { isString } from './lang';

/**
 * Named lazy imports, wrapper around solid js `lazy`.
 * @param {Function} loader - component loader.
 * @return {Object} new Proxy object containing solid lazy loader method.
 */
export const lazyImport = <T extends AnyObject, U extends keyof T>(loader: (componentName?: string) => Promise<T>) => {
    return new Proxy({} as unknown as T, {
        // eslint-disable-next-line consistent-return
        get: (_target, componentName: string | symbol) => {
            if (isString(componentName)) {
                return lazy<Component<unknown>>(() => loader(componentName as string).then((ctx) => ({
                    'default': ctx[componentName as U] as Component<unknown>,
                })));
            }
        },
    });
};

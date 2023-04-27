/**
 * Module contains create async computed utility.
 * @module src/shared/utils/createAsyncComputed
 */

import { createComputed } from 'solid-js';

/**
 * Creates a computation which runs an async function and returns error and isLoading signals.
 * @param {Function} fn - async function.
 * @return {Array} async method signals.
 */
export const createAsyncComputed = <Result>(fn: () => Promise<Result>): [
    Accessor<boolean>,
    Accessor<Maybe<unknown>>
] => {
    const [error, setError] = createSignal<Maybe<Error>>();
    const [isPending, setIsPending] = createSignal(false);

    createComputed(() => {
        if (! untrack(isPending)) {
            setIsPending(true);

            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            fn()
                .then(() => null)
                .then((errorData) => {
                    batch(() => {
                        setError(errorData);
                        setIsPending(false);
                    });
                });
        }
    });

    return [isPending, error];
};

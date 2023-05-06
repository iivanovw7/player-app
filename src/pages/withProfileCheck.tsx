/**
 * Module contains profile check HOC.
 * @module src/pages/withProfileCheck
 */
import { useAsyncState } from 'solidjs-use';

import { Profiles } from '@/features';
import { profilesStore } from '@/shared';

import { ErrorFallback } from './ErrorFallback';

/**
 * User profile check HOC.
 * @constructor
 * @param {Component} Cmp - represents child component.
 * @return {Component} component with children.
 */
export const withProfileCheck = (Cmp: Component) => (props) => {
    const { error, execute } = useAsyncState(
        profilesStore.actions.loadProfiles,
        null,
        {
            immediate: false
        }
    );

    createEffect(async () => {
        if (! profilesStore.state.options.length) {
            await execute();
        }
    });

    return (
        <Switch fallback={<Profiles />}>
            <Match when={error()}>
                <ErrorFallback />
            </Match>
            <Match when={!! profilesStore.state.active}>
                <Cmp {...props} />
            </Match>
        </Switch>
    );
};

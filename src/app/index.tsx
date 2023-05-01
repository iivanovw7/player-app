/**
 * Module contains App container.
 * @module src/app
 */
import { useAsyncState } from 'solidjs-use';

import { ErrorFallback, Routing } from '@/pages';
import { profilesStore, type ErrorData } from '@/shared';
import { WaitScreen } from '@/widgets';

import { withProviders } from './providers';

/**
 * Main application component.
 * @constructor
 * @return {JSXElement} Component with children.
 */
export const App = withProviders(() => {
    const { isLoading, error, isReady } = useAsyncState(
        async () => {
            profilesStore.actions.loadLocalProfile();
            await profilesStore.actions.loadProfiles();
        },
        null
    );

    return (
        <Switch fallback={<WaitScreen />}>
            <Match when={error()}>
                <ErrorFallback error={error() as ErrorData} />
            </Match>
            <Match when={isLoading()}>
                <WaitScreen />
            </Match>
            <Match when={isReady()}>
                <Routing />
            </Match>
        </Switch>
    );
});

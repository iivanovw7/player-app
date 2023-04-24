/**
 * Module contains App container.
 * @module src/app
 */
import { ErrorFallback, Routing } from '@/pages';
import { profilesStore, createAsyncComputed, type ErrorData } from '@/shared';
import { WaitScreen } from '@/widgets';

import { withProviders } from './providers';

/**
 * Main application component.
 * @constructor
 * @return {JSXElement} Component with children.
 */
export const App = withProviders(() => {
    const [isLoading, error] = createAsyncComputed(async () => {
        profilesStore.actions.loadLocalProfile();
        await profilesStore.actions.loadProfiles();
    });

    return (
        <Switch>
            <Match when={isLoading()}>
                <WaitScreen />
            </Match>
            <Match when={!! error()}>
                <ErrorFallback error={error() as ErrorData} />
            </Match>
            <Match when={! isLoading() && ! error()}>
                <Routing />
            </Match>
        </Switch>
    );
});

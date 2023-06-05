/**
 * Module contains application `withIntl` HOC.
 * @module src/app/providers/withIntl
 */

import { IntlProvider } from '@cookbook/solid-intl';
import { useAsyncState } from 'solidjs-use';

import { importMessages, type LocaleMessages, settingsStore } from '@/shared';

/**
 * Application Intl HOC.
 * @constructor
 * @param {Component} Cmp - represents child component.
 * @return {Component} component with children.
 */
export const withIntl = (Cmp: Component) => (props) => {
    const { state: messages, isReady } = useAsyncState<LocaleMessages>(
        importMessages(settingsStore.state.locale),
        {} as LocaleMessages
    );

    return (
        <Show when={isReady()}>
            <IntlProvider locale={settingsStore.state.locale} messages={messages()}>
                <Cmp {...props} />
            </IntlProvider>
        </Show>
    );
};

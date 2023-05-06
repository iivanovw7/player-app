/**
 * Module contains application `withWaitScreen` HOC.
 * @module src/app/providers/withWaitScreen
 */

import { settingsStore, WaitScreen } from '@/shared';

/**
 * Application wait screen HOC component.
 * @constructor
 * @param {Component} Cmp - represents child component.
 * @return {Component} component with children.
 */
export const withWaitScreen = (Cmp: Component) => (props) => (
    <>
        <Cmp {...props} />
        <Show when={settingsStore.state.waitQueue}>
            <WaitScreen profile={settingsStore.state.waitProfile}/>
        </Show>
    </>
);

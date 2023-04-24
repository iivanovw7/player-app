/**
 * Module contains application `withWaitScreen` HOC.
 * @module src/app/providers/withWaitScreen
 */

import { settingsStore } from '@/shared';
import { WaitScreen } from '@/widgets';

/**
 * Application wait screen HOC component.
 * @constructor
 * @param {Component} Cmp - represents child component.
 * @return {Component} component with children.
 */
export const withWaitScreen = (Cmp: Component) => (props) => (
    <Show when={settingsStore.state.waitQueue} fallback={<Cmp {...props} />}>
        <WaitScreen profile={settingsStore.state.waitProfile}/>
    </Show>
);

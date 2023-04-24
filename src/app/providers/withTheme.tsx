/**
 * Module contains application `withTheme` HOC.
 * @module src/app/providers/withTheme
 */
import { settingsStore } from '@/shared';

import { setThemeClassName } from './lib';

/**
 * Application theme HOC component.
 * @constructor
 * @param {Component} Cmp - represents child component.
 * @return {Component} Component with children.
 */
export const withTheme = (Cmp: Component) => (props) => {
    onMount(() => {
        setThemeClassName(settingsStore.state.theme);
    });

    return <Cmp {...props} />;
};

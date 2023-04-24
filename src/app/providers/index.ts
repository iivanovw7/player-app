/**
 * Module contains application providers.
 * @module src/app/providers
 */

import { compose } from 'ramda';

import { withErrorBoundary } from './withErrorBoundary';
import { withRouter } from './withRouter';
import { withTheme } from './withTheme';
import { withWaitScreen } from './withWaitScreen';

/**
 * Combines application providers.
 * @function
 * @param {Component} Component - represents child component.
 * @return {Component} all HOC`s combined.
 */
export const withProviders = compose(
    withTheme,
    withRouter,
    withErrorBoundary,
    withWaitScreen
);

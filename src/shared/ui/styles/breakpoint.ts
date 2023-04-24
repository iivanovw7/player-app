/**
 * Module contains breakpoints.
 * @module src/shared/ui/styles/breakpoints.css
 */

/* eslint-disable sort-keys */

/**
 * List of valid breakpoints used as hook parameters.
 * @readonly
 * @type {Array.<string>}
 */
export const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;

/**
 * Contains map of screen size.
 * @readonly
 * @name screenSizes
 * @enum {Record.<string, string>}
 */
export const screenSizes = {
    'height-xs': '568px',
    'height-sm': '640px',
    'height-md': '667px',
    'height-lg': '736px',
    'height-xl': '812px',
    'height-xxl': '896px',
    'width-xs': '320px',
    'width-sm': '481px',
    'width-md': '641px',
    'width-lg': '961px',
    'width-xl': '1025px',
    'width-xxl': '1281px',
} as const;

export type ScreenSize = typeof screenSizes[keyof typeof screenSizes];

/**
 * Contains map of breakpoints.
 * @readonly
 * @name breakpoints
 * @enum {Record.<string, string>}
 */
export const breakpoints = {
    vertical: '(max-aspect-ratio: 4/3)',
    landscape: '(orientation: landscape)',
    'xs-up': `(min-width: ${screenSizes['width-xs']})`,
    'sm-up': `(min-width: ${screenSizes['width-sm']})`,
    'md-up': `(min-width: ${screenSizes['width-md']})`,
    'lg-up': `(min-width: ${screenSizes['width-lg']})`,
    'xl-up': `(min-width: ${screenSizes['width-xl']})`,
    'xxl-up': `(min-width: ${screenSizes['width-xxl']})`,
    'xs-down': `(max-width: ${screenSizes['width-xs']})`,
    'sm-down': `(max-width: ${screenSizes['width-sm']})`,
    'md-down': `(max-width: ${screenSizes['width-md']})`,
    'lg-down': `(max-width: ${screenSizes['width-lg']})`,
    'xl-down': `(max-width: ${screenSizes['width-xl']})`,
    'xxl-down': `(max-width: ${screenSizes['width-xxl']})`,
} as const;

export type BreakpointKey = keyof typeof breakpoints;
export type Breakpoint = typeof breakpoints[BreakpointKey];

/* eslint-enable sort-keys */

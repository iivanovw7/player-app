/**
 * Module contains application main entry point.
 * @module src/main
 */

import 'virtual:fonts.css';
import 'virtual:svg-icons-register';

import {
    lazyImport,
    getLogger,
    config,
    setLogLevel,
    initStores
} from '@/shared';

import './shared/ui/styles/global.css';

import '../assets/css/sanitize.css';

const { App } = lazyImport(() => import('./app'));
const { logLevel } = config;

const MOUNT_NODE = document.body;
const logger = getLogger('Main');

/**
 * Renders main application component.
 * @param {Component} AppComponent - application component.
 */
const renderApp = (AppComponent: Component) => {
    render(() => <AppComponent />, MOUNT_NODE);
};

/** Initializes global stores. */
initStores();

/** Sets current log level. */
logger.info(`Loglevel: ${logLevel}`);
setLogLevel(logLevel);

if (import.meta.env.DEV && ! (MOUNT_NODE instanceof HTMLElement)) {
    logger.error('Root element not found.');
}

/** Renders application at specified mount point. */
renderApp(App);

/**
 * Module contains vite configuration public API.
 * @module internal/vite-config
 */
import {
    defineConfig,
    mergeConfig,
    type UserConfigExport,
    type UserConfig
} from 'vite';

import { getCommonConfig } from './config.common';
import { getDevelopmentConfig } from './config.development';
import { getProductionConfig } from './config.production';
import { getTestConfig } from './config.test';

type DefineOptions = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    options?: {};
    overrides?: UserConfig;
};

/**
 * Main vite config getter.
 * @param {DefineOptions} [options] = options overrides.
 * @return {UserConfigExport} user config export instance.
 */
export const getConfig = (options: DefineOptions = {}): UserConfigExport => {
    return defineConfig(async ({ mode, command }) => {
        const { overrides = {} } = options;

        const commonConfig = await getCommonConfig(mode, command);

        const mergedConfig = mergeConfig(commonConfig, (() => {
            switch (mode) {
                case 'analyze':
                case 'production': {
                    return getProductionConfig();
                }
                case 'test': {
                    return getTestConfig();
                }
                default: {
                    return getDevelopmentConfig();
                }
            }
        })());

        return mergeConfig(mergedConfig, overrides);
    });
};

/**
 * Module contains bundler configuration.
 * @module internal/vite-config/config.common.ts
 */
import autoprefixer from 'autoprefixer';
import postcss100VhFix from 'postcss-100vh-fix';
import postcssNormalize from 'postcss-normalize';
import postcssPresetEnv from 'postcss-preset-env';
import { loadEnv } from 'vite';

import { createPlugins } from './plugins';
import { pathResolve, root } from './utils';

/**
 * Creates common vite config instance.
 * @param {string} mode - current running mode.
 * @param {string} command - current command.
 * @return {UserConfig} vite user config.
 */
export const getCommonConfig = async (mode: string, command: string) => {
    const { VITE_ENABLE_ANALYZE, VITE_BUILD_COMPRESS } = loadEnv(mode, root);

    return {
        css: {
            plugins: [
                postcss100VhFix,
                postcssNormalize({
                    forceImport: true
                }),
                autoprefixer,
                postcssPresetEnv({
                    browsers: 'last 2 versions'
                }),
            ],
        },
        plugins: await createPlugins({
            command,
            compress: VITE_BUILD_COMPRESS,
            enableAnalyze: VITE_ENABLE_ANALYZE === 'true',
            mode,
        }),
        resolve: {
            alias: [
                {
                    find: /\/@\//,
                    replacement: `${pathResolve('src')}/`,
                },
                {
                    find: /\/#\//,
                    replacement: `${pathResolve('types')}/`,
                },
                {
                    find: /@\//,
                    replacement: `${pathResolve('src')}/`,
                },
                {
                    find: /#\//,
                    replacement: `${pathResolve('types')}/`,
                },
            ],
        },
        root: `${pathResolve('')}/`,
    };
};

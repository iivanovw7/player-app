/**
 * Module contains plugins config public API.
 * @module internal/vite-config/plugins
 */

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import autoImport from 'unplugin-auto-import/vite';
import { type PluginOption } from 'vite';
import { imagetools } from 'vite-imagetools';
import dynamicImport from 'vite-plugin-dynamic-import';
import fonts from 'vite-plugin-fonts';
import solidPlugin from 'vite-plugin-solid';

import { pathResolve } from '../utils';

import { configCompressPlugin } from './compress';
import { configSvgIconsPlugin } from './svgIcons';
import { configVisualizerConfig } from './visualizer';

export type CreatePluginsParams = {
    command: string;
    compress: string;
    enableAnalyze: boolean;
    mode: string;
};

/**
 * Creates list of vite plugin instances
 * @param {CreatePluginsParams} params - plugin parameters.
 * @return {(PluginOption | PluginOption[])[]} plugins - list of plugins.
 */
export const createPlugins = async (params: CreatePluginsParams) => {
    const { mode, command, compress, enableAnalyze } = params;

    const isTest = mode === 'test';
    const isBuild = command === 'build';

    const plugins: (PluginOption | PluginOption[])[] = [
        solidPlugin(),
        dynamicImport(),
        vanillaExtractPlugin(),
    ];

    if (! isTest) {
        // https://github.com/vbenjs/vite-plugin-html/issues/58
        const { configHtmlPlugin } = await import('./html');

        plugins.push(configHtmlPlugin(isBuild));
    }

    plugins.push(
        configSvgIconsPlugin(isBuild),
        imagetools({
            include: `${pathResolve('assets/img/**/*.{jpeg,jpg,png,webp,gif}?')}/`,
        }),
        fonts({
            custom: {
                display: 'auto',
                families: [
                    {
                        name: 'Netflix Sans Thin',
                        src: `${pathResolve('assets/fonts/NetflixSans_W_Th.woff2')}/`,
                    },
                    {
                        name: 'Netflix Sans Light',
                        src: `${pathResolve('assets/fonts/NetflixSans_W_Lt.woff2')}/`,
                    },
                    {
                        name: 'Netflix Sans Regular',
                        src: `${pathResolve('assets/fonts/NetflixSans_W_Rg.woff2')}/`,
                    },
                    {
                        name: 'Netflix Sans Medium',
                        src: `${pathResolve('assets/fonts/NetflixSans_W_Md.woff2')}/`,
                    }
                ],
                injectTo: 'head-prepend',
                prefetch: true,
                preload: false,
            },
        }),
        autoImport({
            dts: `${pathResolve('types/auto-imports.d.ts')}/`,
            eslintrc: {
                enabled: true,
            },
            imports: [
                'solid-js',
                'vitest',
                {
                    from: 'solid-js',
                    imports: [
                        'Show',
                        'Match',
                        'For',
                        'createUniqueId'
                    ],
                },
                {
                    from: 'solid-js',
                    imports: [
                        'Component',
                        'JSXElement',
                        'JSX',
                        'Accessor',
                        'Signal',
                        'ParentProps',
                        'Setter'
                    ],
                    type: true
                },
                {
                    from: 'vitest',
                    imports: ['Mock'],
                    type: true
                }
            ],
        }) as PluginOption
    );

    if (enableAnalyze) {
        plugins.push(configVisualizerConfig());
    }

    if (isBuild) {
        plugins.push(configCompressPlugin({
            compress,
        }));
    }

    return plugins;
};

/**
 * Module contains bundler test configuration.
 * @module internal/vite-config/config.test.ts
 */
import type { UserConfig } from 'vite';

import { pathResolve } from './utils';

/**
 * Creates test vite config instance.
 * @returns {UserConfig} vite user config.
 */
export const getTestConfig = (): UserConfig => ({
    test: {
        coverage: {
            all: true,
            provider: 'istanbul',
            reportsDirectory: `${pathResolve('build/coverage')}/`
        },
        deps: {
            fallbackCJS: true,
            interopDefault: true,
        },
        environment: 'jsdom',
        exclude: [
            '**/node_modules/**',
            '**/dist/**',
            '**/build/**',
            '**/_helper/**',
        ],
        globals: true,
        include: ['./test/**/*.{ts,tsx}'],
        setupFiles: [`${pathResolve('test/_helper/setup.ts')}/`],
        transformMode: {
            web: [/\.css.ts$/],
        },
        watch: false
    },
}) as UserConfig;

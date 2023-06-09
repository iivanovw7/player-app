/**
 * Module contains bundler production configuration.
 * @module internal/vite-config/config.production.ts
 */
import type { UserConfig } from 'vite';

import { pathResolve } from './utils';

const vendorList = ['react', 'react-dom', 'react-router', 'react-router-dom'];

/**
 * Creates production vite config instance.
 * @returns {UserConfig} vite user config.
 */
export const getProductionConfig = (): UserConfig => ({
    build: {
        chunkSizeWarningLimit: 1500,
        emptyOutDir: true,
        minify: true,
        outDir: `${pathResolve('build/dist')}/`,
        reportCompressedSize: false,
        rollupOptions: {
            input: `${pathResolve('index.html')}/`,
            maxParallelFileOps: 3,
            output: {
                manualChunks: (packagePath: string) => {
                    const pkg = packagePath.split('/').reverse();
                    const pkgName = pkg[pkg.indexOf('node_modules') - 1];

                    return vendorList.includes(pkgName)
                        ? 'vendors'
                        : pkgName;
                }
            },
        },
    },
});

/**
 * Module contains bundler development configuration.
 * @module internal/vite-config/config.development.ts
 */
import basicSsl from '@vitejs/plugin-basic-ssl';
import type { UserConfig } from 'vite';

/**
 * Creates dev vite config instance.
 * @return {UserConfig} vite user config.
 */
export const getDevelopmentConfig = (): UserConfig => ({
    build: {
        sourcemap: true
    },
    plugins: [
        basicSsl(),
    ],
    server: {
        https: true,
        strictPort: true,
    },
});

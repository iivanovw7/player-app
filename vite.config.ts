/**
 * Module contains vite configuration.
 * @module vite-config
 * @see module:internal/vite-config
 */
import { getConfig } from 'vite-config';

export default getConfig({
    overrides: {
        server: {
            proxy: {
                '/basic-api': {
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/basic-api/, ''),
                    secure: false,
                    target: 'http://localhost:3300',
                    ws: true,
                }
            },
        },
    },
});

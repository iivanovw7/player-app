/**
 * Project eslint config for `solid-js`.
 * @module internal/eslint-config/test
 */

export default {
    'extends': [
        '@player-app/eslint-config',
        'iivanovw7/test-vitest',
    ],
    rules: {
        'import/extensions': [
            'error',
            'ignorePackages', {
                'js': 'never',
                'jsx': 'never',
                'mjs': 'never',
                'ts': 'never',
                'tsx': 'never',
            }
        ],
        'import/no-unresolved': 'error',
        'no-param-reassign': 'off',
        'react/jsx-filename-extension': 'off',
        'solid/jsx-no-undef': [
            'error',
            {
                allowGlobals: true,
                autoImport: true,
                typescriptEnabled: false,
            }
        ],
    },
};

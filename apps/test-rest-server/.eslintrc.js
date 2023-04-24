/**
 * Eslint configuration.
 * @module apps/test-rest-service/.eslintrc.js
 * @see module:internal/eslint-config
 */
module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    'extends': [
        'iivanovw7',
        'iivanovw7/typescript',
    ],
    ignorePatterns: [
        '.eslintrc.js',
        '/dist/**',
        '/node_modules/**',
        '.turbo'
    ],
    'parserOptions': {
        'project': ['tsconfig.json'],
        tsconfigRootDir: __dirname
    },
    root: true,
    rules: {
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/require-await': 'off',
        'arrow-body-style': 'off',
        'global-require': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/no-default-export': 'off',
        'no-param-reassign': 'off',
        'no-return-await': 'off',
        'react/jsx-filename-extension': 'off',
    },
};

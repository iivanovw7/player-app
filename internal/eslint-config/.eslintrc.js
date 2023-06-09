/**
 * Eslint configuration.
 * @module _/internal/eslint-config/.eslintrc.js
 * @see module:internal/eslint-config
 */

module.exports = {
    'extends': ['@player-app/eslint-config'],
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
    overrides: [
        {
            "files": ["src/*.ts", "*.config.ts"],
            rules: {
                'react/jsx-filename-extension': 'off',
                'import/no-default-export': 'off'
            }
        }
    ],
};

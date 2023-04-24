/**
 * Eslint configuration.
 * @module internal/vite-config/.eslintrc.js
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
            "files": ["*.config.ts"],
            rules: {
                'import/no-default-export': 'off'
            }
        }
    ],
};

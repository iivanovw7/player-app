/**
 * Eslint configuration.
 * @module types/.eslintrc.js
 * @see module:internal/eslint-config
 */

module.exports = {
    'extends': ['@player-app/eslint-config'],
    ignorePatterns: ['.eslintrc.js'],
    'parserOptions': {
        'project': ['../tsconfig.json'],
        tsconfigRootDir: __dirname
    },
    root: true,
};

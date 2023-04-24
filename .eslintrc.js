/**
 * Eslint configuration.
 * @module .eslintrc.js
 * @see module:internal/eslint-config
 */

module.exports = {
    'extends': ['@player-app/eslint-config'],
    ignorePatterns: [
        '.eslintrc.js',
    ],
    'parserOptions': {
        'project': ['./tsconfig.json'],
        tsconfigRootDir: __dirname
    },
    plugins: ['@babel'],
    root: true,
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: ['./.eslintrc-auto-import.json'],
        },
        {
            files: ["*.config.ts"],
            rules: {
                'import/no-default-export': 'off'
            }
        }
    ],
};

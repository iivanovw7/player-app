const path = require('path');

const { name: packageName } = require('./package.json');

module.exports = {
    apps: [
        {
            autorestart: true,
            env_production: {
                NODE_ENV: 'production',
                PORT: 8080,
            },
            instances: require('os').cpus().length,
            name: packageName,
            script: path.resolve(__dirname, './dist/index.js'),
            watch: true,
        },
    ],
};

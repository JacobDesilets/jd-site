const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                src: path.resolve(__dirname, 'src')
            }
        },
    },
    publicPath: '/static/dist/', // Should be STATIC_URL + path/to/build
    outputDir: path.resolve(__dirname, '../static/dist/'), // Output to a directory in STATICFILES_DIRS
    assetsDir: '',
    filenameHashing: false, // Django will hash file names, not webpack
    runtimeCompiler: true, // See: https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    devServer: {
        devMiddleware: {
            // see https://github.com/webpack/webpack-dev-server/issues/2958
            writeToDisk: true,
        }
    },
    pages: {
        'home': {
            entry: 'src/pages/home/main.js',
            template: 'public/index.html',
            title: 'Home',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        'spaceyard': {
            entry: 'src/pages/spaceyard/main.js',
            template: 'public/index.html',
            title: 'Spaceyard',
            chunks: ['chunk-vendors', 'chunk-common', 'spaceyard']
        },
    },

};
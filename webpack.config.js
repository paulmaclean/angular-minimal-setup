var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require("path");
var nodeModulesDir = path.resolve(__dirname, '../node_modules');

var PATHS = {
    app: path.join(__dirname, 'app/main.ts'),
    build: path.join(__dirname, 'dist'),
};

module.exports = {
    entry: {
        app: [
            PATHS.app
        ]
    },
    output: {
        path: PATHS.build,
        filename: "[name].js"
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            {test: /\.ts(x?)$/, loader: 'ts-loader'},
            {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'},
            {test: /\.jpg$/, loader: "file-loader"},
            {test: /\.html$/, loader: 'html-loader'},
        ]
    }
}

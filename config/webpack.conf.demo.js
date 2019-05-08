const path = require('path')
const webpackBase = require('./webpack.conf.base')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports =  Object.assign(webpackBase, {
    entry: './demos/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist',
        filename: 'demo.min.js'
    },
    mode:'development',
    devtool: '#eval-source-map'
});

module.exports.plugins.push(
    new ExtractTextPlugin('demo.min.css')
);

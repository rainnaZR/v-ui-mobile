const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')
const webpackBase = require('./webpack.conf.base')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = Object.assign(webpackBase, {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'vui.min.js',
        library: 'vui',  //导出库名
        libraryTarget: 'umd', //导出方式设置，umd为通用模块定义，是支持CMD,AMD和全局window的访问方式
        umdNamedDefine: true  //布尔值，在UMD库中使用命名的AMD模块
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    },
    mode:'production',
    devtool: '#source-map'
});

module.exports.plugins.push(
    new webpack.DefinePlugin({  //编译时定义的变量
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new ExtractTextPlugin({
        filename: 'vui.min.css',
        allChunks: true,
    }),
    new OptimizeCssPlugin(),
    new UglifyJsPlugin({
        uglifyOptions: {
            warnings: false
        },
        sourceMap: true,
        parallel: true
    }),
    // keep module.id stable when vendor modules does not change
    new webpack.HashedModuleIdsPlugin(),
    // enable scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    new BundleAnalyzerPlugin(),
    new CompressionWebpackPlugin()
);

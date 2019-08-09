const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require("clean-webpack-plugin")

module.exports =  {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!postcss-loader'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {  //这里options的配置项与.babelrc配置项一致，如果工作中有.babelrc文件，会默认读取工程里的.babelrc文件，忽略这里的options属性
                    babelrc: false,
                    presets: ['@babel/preset-env']
                },
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)|((eot|woff|ttf|svg)[\?]?.*)$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: [
                    '/node_modules/v-ui-mobile/dist/'  //增加此项
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.css'],  //默认文件扩展名
        alias: {  //模块别名
            'vue$': 'vue/dist/vue.common.js',
            'scss_path': path.join(__dirname, '../src/scss'),
            "components_path": path.join(__dirname, '../src/components'),
            "utils_path": path.join(__dirname, '../src/utils')
        }
    },
    plugins: [
        //每次打包时，删除上次打包的目录
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    devServer: {
        historyApiFallback: true, //使用HTML5 History API时，404的页面将会跳转到index.html
        noInfo: true   //不展示info信息，Errors and warnings还是会展示的
    },
    optimization: {
        minimize: true
    }
};

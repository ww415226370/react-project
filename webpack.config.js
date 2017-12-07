const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
  	entry: ['webpack/hot/dev-server', __dirname +'/app/main.js'],
  	output: {
      	path: path.resolve(__dirname, 'dist'),
  	    filename: 'bundle.js'
  	},
  	module: {
    		loaders: [
      			{
        				test: /\.(js|jsx)$/,
        				exclude: /node_modules/,
        				loader: 'babel-loader'
      			},
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
    		]
  	},
    plugins: [
        new HtmlwebpackPlugin({
            template: __dirname + '/index.html'//html模版地址
        }),
        new webpack.HotModuleReplacementPlugin()//热模块替换插件
    ],
    devServer: {
        contentBase: __dirname + '/dist',
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true,//设置为true，当源文件改变时会自动刷新页面
        port: 8080,//设置默认监听端口，如果省略，默认为"8080"
    }
};
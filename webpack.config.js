
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
// let isProduction=process.env.NODE_ENV;//判断环境 配合configureWebpack 进行不同环境编译打包
module.exports = {
  // 配置 打包环境
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    // 文件校验
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10, // 小于10KB图片，转base64编码
        }
      },
    ]
  },
  plugins: [
    // 压缩html
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html',
      inject: 'body',
      minify: {
        removeComments: true,
      },
    }),
    // 热更新配置
    new webpack.HotModuleReplacementPlugin()
  ],
  // webpack5 自带的optimization
  optimization: {
    minimize: true, // 可省略，默认最优配置：生产环境，压缩 true。开发环境，不压缩 false
    minimizer: [new TerserPlugin({
      terserOptions: {
        mangle: true,
        compress: {
          drop_console: true,//传true就是干掉所有的console.*这些函数的调用.
          drop_debugger: true, //干掉那些debugger;
          pure_funcs: ['console.log'] // 如果你要干掉特定的函数比如console.info
        }
      }
    })],
  },
  // 热更新配置 级 路由响应
  devServer: {
    hot: true,
    historyApiFallback: true
  },
  // 配置文件别名
  resolve: {
    alias: {
      '@': path.resolve('src'),
      'assets': path.resolve('@/assets'),
      'components': path.resolve('@/components'),
      'views': path.resolve('@/views')
    }
  },

  mode: 'production'
}
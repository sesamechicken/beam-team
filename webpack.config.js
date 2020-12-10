const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: { app: "./src/index.js" },
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
    publicPath: "/"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
    compress: true,
    port: 8080,
    open: "Google Chrome",
    watchContentBase: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
    new HtmlWebpackPlugin({
      template: 'template.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-transform-runtime',
              '@babel/plugin-proposal-optional-chaining'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            esModule: true,
          }
        },
        'css-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  }
}
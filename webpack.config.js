const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    background: './src/background',
    contentscript: './src/contentscript',
  },
  output: {
    path: path.resolve('./chrome/dist'),
    filename: '[name].js'
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader!css-loader'
      // },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new CleanWebpackPlugin('chrome/dist'),
  ]
}
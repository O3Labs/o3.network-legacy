'use strict'

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = (env) => {

  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname),
      filename: 'bundle.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        inlineSource: '.(js)$',
        template: './src/template.html',
        minify: false
      }),
      new HtmlWebpackInlineSourcePlugin(),
    ],
  };
};

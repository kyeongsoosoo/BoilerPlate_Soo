/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../src/'),
    port: 3000,
    publicPath: '/',
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api/': {
        target: 'http://localhost:5000',
      },
    },
  },
};

module.exports = merge(common, config);

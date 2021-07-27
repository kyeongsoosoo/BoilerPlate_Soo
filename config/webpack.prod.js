/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const common = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'js/main.[hash].js',
    publicPath: './',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  externals: {
    loadash: 'lodash',
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [
    new CleanWebpackPlugin(),

    new CopyPlugin({
      patterns: [
        {
          from: './node_modules/react/umd/react.production.min.js',
          to: './js/react.production.min.js',
        },
        {
          from: './node_modules/react-dom/umd/react-dom.production.min.js',
          to: './js/react-dom.production.min.js',
        },
        {
          from: './static/robots.txt',
          to: './robots.txt',
        },
      ],
    }),
  ],
};

module.exports = merge(common, config);

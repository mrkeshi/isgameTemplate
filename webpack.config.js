var path = require('path');
const webpack = require('webpack');
module.exports = {
  mode: 'development',
  context: __dirname,
  entry: './dist/slider.js',
  output: {
    filename: 'slider_bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
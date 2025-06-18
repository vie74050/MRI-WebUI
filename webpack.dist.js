const path = require("path");
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'none',
  output: {
    path: path.resolve(__dirname, "./prod"),
    filename: "bundle.js",
  },
  devtool: 'source-map'
});
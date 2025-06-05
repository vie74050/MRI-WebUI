const path = require("path");
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, "./dev"),
    filename: "bundle.js",
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dev',
  },
});
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  resolve: {
      extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s$/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: "src/index.html",
    })
  ],
};

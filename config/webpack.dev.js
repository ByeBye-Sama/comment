const path = require("path");
const merge = require("webpack-merge");
const Dotenv = require("dotenv-webpack");
const common = require("./webpack.base.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [new Dotenv()],
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "dist"),
  },
});

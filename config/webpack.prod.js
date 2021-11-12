const merge = require("webpack-merge");
const common = require("./webpack.base.js");
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "production",
  plugins: [new Dotenv()],
});

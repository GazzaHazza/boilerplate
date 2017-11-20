const webpack = require("webpack");

const config = {
  output: {
    filename: "[name].js",
    sourceMapFilename: "[name].js.map",
    chunkFilename: "[name].js"
  },
  devtool: "eval-source-map",
  devServer: {
    port: 9000,
    overlay: true,
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
module.exports = config;

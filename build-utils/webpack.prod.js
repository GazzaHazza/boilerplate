const config = {
  output: {
    filename: "[name].[chunkhash].js",
    sourceMapFilename: "[name].js.map",
    chunkFilename: "[name].[chunkhash].js"
  },
  devtool: "source-map"
};
module.exports = config;

const commonPaths = require("./common-paths");
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    bundle: path.resolve(__dirname, "../", "src", "index.jsx")
  },
  output: {
    path: commonPaths.outputPath
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [path.resolve(__dirname, "../", "src"), "node_modules"]
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks(module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    }),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../", "public", "index.html")
    })
  ]
};
module.exports = config;

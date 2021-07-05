const path = require("path")
module.exports = {
    entry: path.resolve(__dirname, "entry.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
        //↓ここからcssに対してこの設定にしないとerrorになる
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
          //↑ここまで
        ],
      },
    ],
  },
  // Optional for webpack-dev-server
  devServer: {
    watchContentBase: true,
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
  },
}
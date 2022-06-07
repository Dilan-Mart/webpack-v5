const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "none",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "dist/",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, //3 kilobytes; >3kb will be asset/resource and <3kb will be asset/inline(base64 datauri)
          },
        },
      },
      {
        test: /\.txt/,
        type: "asset/source", //will convert text into javaScript string
      }
    ],
  },
};

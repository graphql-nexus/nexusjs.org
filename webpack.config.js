"use strict";
/**
 * @type {import('monaco-editor-webpack-plugin').default}
 */
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: "none",
  devtool: "source-map",
  entry: {
    playground: "./src/playground/index.tsx",
    converter: "./src/playground/Converter.tsx",
  },
  output: {
    publicPath: "/playground-dist/",
    filename: "[name].js",
    path: __dirname + "/src/public/playground-dist",
  },
  resolve: {
    alias: {
      "monaco-editor": "monaco-editor/esm/vs/editor/editor.api.js",
    },
    extensions: [".ts", ".tsx", ".mjs", ".js", ".json", ".css"],
  },
  module: {
    rules: [
      {
        test: /(^.?|\.[^d]|[^.]d|[^.][^d])\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ttf$/,
        use: ['file-loader']
      }
    ],
  },
  plugins: [
    new MonacoWebpackPlugin({
      languages: ["typescript"],
    }),
  ],
  externals: {
    prettier: "empty",
    fs: "function() {}",
    clipboard: "ClipboardJS",
    react: "React",
    "react-dom": "ReactDOM",
  },
};

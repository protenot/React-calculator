const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { NODE_ENV } = process.env;
const PREFIX = "/React-calculator";
const isDev = NODE_ENV === "development";
const webpack = require("webpack");

module.exports = {
  mode: NODE_ENV === "production" ? "production" : "development",

  entry: {
    main: path.resolve(__dirname, "./src/index.tsx"),
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: NODE_ENV === "production" ? PREFIX : "/",
    clean: true,
    environment: {
      arrowFunction: false,
    },
  },
  devServer: {
    client: {
      logging: "info",
    },
    compress: true,
    open: true,
    port: 8000,
    hot: true,
    // for react router
    historyApiFallback: true,
  },
  devtool: NODE_ENV === "production" ? "hidden-source-map" : "eval-source-map",

  resolve: {
    extensions: [".js", ".ts", ".tsx", "jsx"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.(?:js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(?:gif|png|jpeg|jpg|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "img/[name].[ext]",
        },
      },
    ],
  },
  optimization: {
    minimizer: ["...", new CssMinimizerPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? "[name].css" : "[name].[contenthash].css",
    }),
    new webpack.DefinePlugin({
      "process.env.CONTENT_ROOT": JSON.stringify(
        NODE_ENV === "production" ? PREFIX : "/",
      ),
    }),
  ],
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require('dotenv').config();
const env = dotenv.parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev; }, {});



module.exports = {
  
  entry: {
    vendor: "./src/vendor.js",
    app: "./src/index.js"
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].js"
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  module: {
    rules: [
      {
        test: require.resolve('jquery'),
        use: [{
            loader: 'expose-loader',
            options: '$'
        },
        {
            loader: 'expose-loader',
            options: 'jQuery'
        }]
      },
      {
       test: /\.(js|jsx)$/,
       exclude: /node_modules/,
       use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: 'css-loader',
            options:  {
                url: false
            }
          }
        ]
      }
    ]
  },
  plugins: [ 
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new webpack.DefinePlugin(envKeys)
  ]
};




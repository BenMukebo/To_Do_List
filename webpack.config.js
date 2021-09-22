const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     index: './src/index.js',
   },
   output: {
     filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
   },
   plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/index.html'
    }),
  ],
 };


  // output: {
  //   publicPath: '/',
  // },

  // plugins: [
  //   new HtmlWebpackPlugin({
  //     filename: './index.html',
  //   }),
  // ],
  // devServer: {
  //   contentBase: './dist',
  // },
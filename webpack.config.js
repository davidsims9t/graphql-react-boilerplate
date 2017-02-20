const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dashboard = require('');

module.exports = {
  devtool: 'eval',
  entry: './app/index.js',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["es2015", "stage-0", 'react']
          }
        },
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
         // this assumes your vendor imports exist in the node_modules directory
         return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new HtmlWebpackPlugin({
      template: 'app/views/template.ejs'
    }),
    new DashboardPlugin()
  ]
};

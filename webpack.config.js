const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const path = require('path');

module.exports = {
  devtool: 'eval',
  entry: {
    app: './app/index.js',
    'graphql-tag': 'graphql-tag',
    'apollo-client': 'apollo-client',
    'react-apollo': 'react-apollo'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter',
    'lodash': 'lodash',
    // 'graphql-tag': 'graphql-tag',
    // 'apollo-client': 'ApolloClient',
    // 'react-apollo': 'ApolloProvider',
    'react-bootstrap': 'ReactBootstrap'
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
      name: ['react-apollo', 'apollo-client', 'graphql-tag'],
      // filename: 'vendor-[hash].min.js',
    }),
    new HtmlWebpackPlugin({
      template: 'app/views/template.ejs'
    }),
    new DashboardPlugin()
  ]
};

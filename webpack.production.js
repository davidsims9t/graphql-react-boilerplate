const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, 'app/index.js'),
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
            presets: ['es2015', 'stage-0', 'react']
          }
        },
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: [
          {
            loader: 'style-loader',
            options: {
              minimize: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }
        ],
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
      template: path.join(__dirname, 'app/views/template.ejs')
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ]
};

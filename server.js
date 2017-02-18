// Server dependencies
const express = require('express');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./server/schema');
const app = express();

// Client dependencies
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

// Global variables
require('dotenv').load();

// Mongoose connection
mongoose.connect(process.env.MONGO_URI);
mongoose.connection
  .once('open', () => console.log('Mongoose connection open'))
  .on('error', error => console.error('Something went wrong: ', error))

// GraphQL endpoint with graphiql
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

// Webpack middleware
app.use(webpackMiddleware(webpack(webpackConfig)));

app.listen(process.env.PORT, () => console.log('Running on port ' + process.env.PORT));

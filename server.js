// Server dependencies
const express = require('express');
const expressGraphQL = require('express-graphql');
const jwt = require('express-jwt');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./server/schema');

const app = express();
mongoose.Promise = Promise;

// Client dependencies
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

// Global variables
require('dotenv').load();

// Authentication middleware for making authenticated requests with JWTs and Auth0.
const auth = jwt({
  secret: new Buffer(process.env.AUTH0_CLIENT_SECRET, 'base64'),
  audience: process.env.AUTH0_CLIENT_ID,
  credentialsRequired: false
});
app.use(auth);

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

// Start the server
app.listen(process.env.PORT, () => console.log('Running on port ' + process.env.PORT));

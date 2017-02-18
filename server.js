const express = require('express');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema');
const app = express();

// Global variables
require('dotenv').load();

// Mongoose connection
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once('open', () => console.log('Mongoose connection open'))

// GraphQL endpoint with graphiql
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.listen(process.env.PORT, () => console.log('Running on port ' + process.env.PORT));

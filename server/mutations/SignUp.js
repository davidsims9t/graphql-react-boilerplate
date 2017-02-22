const graphql = require('graphql');
const fetch = require('node-fetch');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLScalarType
} = graphql;
const UserType = require('../schema/User');

module.exports = {
  type: UserType,
  args: {
    username: {
      type: new GraphQLNonNull(GraphQLString)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(parentValue, { username, email, password }) {
    return fetch(`${process.env.AUTH0_CLIENT_URL}/dbconnections/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "client_id": process.env.AUTH0_CLIENT_ID,
        "username": username,
        "email": email,
        "password": password,
        "connection": "Username-Password-Authentication"
      })
    }).then(res => res.json());
  }
};

const graphql = require('graphql');
const fetch = require('node-fetch');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} = graphql;
const UserType = require('../schema/User');

module.exports = {
  type: UserType,
  args: {
    username: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    }
  },
  resolve(parentValue, { username, email, password }, request) {
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

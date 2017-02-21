const graphql = require('graphql');
const fetch = require('node-fetch');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} = graphql;
const UserType = require('../schema/User');

const mutations = {
  logIn: {
    type: UserType,
    args: {
      email: {
        type: GraphQLString
      },
      password: {
        type: GraphQLString
      }
    },
    resolve(parentValue, { username, password }, request) {
      return fetch(`${process.env.AUTH0_CLIENT_URL}/oauth/ro`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "client_id": process.env.AUTH0_CLIENT_ID,
          "username": username,
          "password": password,
          "connection": "Username-Password-Authentication",
          "scope": "openid"
        })
      }).then(res => res.json());
    }
  }
};

module.exports = mutations;

const graphql = require('graphql');
const fetch = require('node-fetch');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} = graphql;
const UserType = require('../schema/User');

const mutations = {
  signUp: {
    type: CompanyType,
    args: {
      name: {
        type: GraphQLString
      }
    },
    resolve(parentValue, { username, email, password }, request) {
      return fetch(`${AUTH0_CLIENT_URL}/dbconnections/signup`, {
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
  }
};

module.exports = mutations;

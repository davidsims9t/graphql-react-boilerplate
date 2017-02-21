const graphql = require('graphql');
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
    resolve(parentValue, args, request) {
      // Auth0 authentication
    }
  }
};

module.exports = mutations;

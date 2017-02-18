const graphql = require('graphql');
const fetch = require('node-fetch');
const { GraphQLObjectType } = graphql;
const UserType = require('../schema/user');
const userMutations = require('./user');
const { addUser, editUser, deleteUser } = userMutations;

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser,
    editUser,
    deleteUser
  }
});

module.exports = Mutation;

const graphql = require('graphql');
const { GraphQLObjectType } = graphql;
const { addUser, editUser, deleteUser } = require('./User');
const { addCompany, editCompany, deleteCompany } = require('./Company');
const signUp = require('./SignUp');
const logIn = require('./LogIn');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser,
    editUser,
    deleteUser,
    addCompany,
    editCompany,
    deleteCompany,
    signUp,
    logIn
  }
});

module.exports = Mutation;

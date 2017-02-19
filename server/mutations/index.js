const graphql = require('graphql');
const { GraphQLObjectType } = graphql;
const { addUser, editUser, deleteUser } = require('./User');
const { addCompany, editCompany, deleteCompany } = require('./Company');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser,
    editUser,
    deleteUser,
    addCompany,
    editCompany,
    deleteCompany
  }
});

module.exports = Mutation;

const graphql = require('graphql');
const fetch = require('node-fetch');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = graphql;

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    users: {
      type: new GraphQLList(require('./user')),
      resolve(parentValue, args) {
        return fetch(`http://localhost:3000/companies/${parentValue.id}/users`)
          .then(res => res.json());
      }
    }
  })
});

module.exports = CompanyType;

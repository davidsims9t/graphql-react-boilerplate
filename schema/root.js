const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;
const fetch = require('node-fetch');
const UserType = require('./user');
const CompanyType = require('./company');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(parentValue, args) {
        return fetch(`http://localhost:3000/users/${args.id}`).then(res => res.json());
      }
    },
    company: {
      type: CompanyType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(parentValue, args) {
        return fetch(`http://localhost:3000/companies/${args.id}`).then(res => res.json());
      }
    }
  }
});

module.exports = RootQuery;

const graphql = require('graphql');
const fetch = require('node-fetch');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    fullName: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    },
    company: {
      type: require('./company'),
      resolve(parentValue, args) {
        return fetch(`http://localhost:3000/companies/${parentValue.companyId}`)
          .then(res => res.json());
      }
    }
  })
});

module.exports = UserType;

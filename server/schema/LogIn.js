const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString
} = graphql;

const LogInType = new GraphQLObjectType({
  name: 'LogIn',
  fields: () => ({
    id_token: {
      type: GraphQLString
    },
    access_token: {
      type: GraphQLString
    },
    token_type: {
      type: GraphQLString
    }
  })
});

module.exports = LogInType;

const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql;

const LogInType = new GraphQLObjectType({
  name: 'LogIn',
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve(parentValue) {
        return parentValue.id_token;
      }
    },
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

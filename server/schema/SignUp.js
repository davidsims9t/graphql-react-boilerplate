const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean
} = graphql;

const SignUpType = new GraphQLObjectType({
  name: 'SignUp',
  fields: () => ({
    _id: {
      type: GraphQLString
    },
    email_verified: {
      type: GraphQLBoolean
    },
    email: {
      type: GraphQLString
    }
  })
});

module.exports = SignUpType;

const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID
} = graphql;

const SignUpType = new GraphQLObjectType({
  name: 'SignUp',
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve(parentValue) {
        return parentValue._id;
      }
    },
    _id: {
      type: GraphQLID
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

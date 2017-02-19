const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = graphql;

const UserModel = require('../models/User');

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
      type: new GraphQLList(require('./User')),
      resolve(parentValue, args) {
        return UserModel.findOne({id: mongoose.Schema.ObjectId(parentValue.id)});
      }
    }
  })
});

module.exports = CompanyType;

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
      type: GraphQLString,
      resolve(root, args) {
        return root._id;
      }
    },
    name: {
      type: GraphQLString
    },
    users: {
      type: new GraphQLList(require('./User')),
      resolve(parentValue, args) {
        return UserModel.find({companyId: mongoose.Schema.ObjectId(parentValue._id)});
      }
    }
  })
});

module.exports = CompanyType;

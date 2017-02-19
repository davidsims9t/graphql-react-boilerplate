const graphql = require('graphql');
const mongoose = require('mongoose');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = graphql;

const CompanyModel = require('../models/Company');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve(root, args) {
        return root._id;
      }
    },
    fullName: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    },
    company: {
      type: require('./Company'),
      resolve(parentValue, args) {
        return CompanyModel.findOne({id: mongoose.Schema.ObjectId(parentValue.companyId)});
      }
    }
  })
});

module.exports = UserType;

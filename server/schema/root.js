const graphql = require('graphql');
const mongoose = require('mongoose');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = graphql;
const UserType = require('./User');
const CompanyType = require('./Company');
const UserModel = require('../models/User');
const CompanyModel = require('../models/Company');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(parentValue, args) {
        return UserModel.find();
      }
    },
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(parentValue, args) {
        return UserModel.findById(args.id);
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
        return CompanyModel.findById(args.id);
      }
    }
  }
});

module.exports = RootQuery;

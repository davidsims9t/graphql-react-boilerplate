const graphql = require('graphql');
const mongoose = require('mongoose');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID
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
      resolve(parentValue, args, req) {
        if (!req.user) {
          throw new Error('Authentication required.');
        }

        return UserModel.find();
      }
    },
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parentValue, args) {
        return UserModel.findById(args.id);
      }
    },
    companies: {
      type: new GraphQLList(CompanyType),
      resolve(parentValue, args, req) {
        if (!req.user) {
          throw new Error('Authentication required.');
        }

        return CompanyModel.find();
      }
    },
    company: {
      type: CompanyType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parentValue, args) {
        return CompanyModel.findById(args.id);
      }
    }
  }
});

module.exports = RootQuery;

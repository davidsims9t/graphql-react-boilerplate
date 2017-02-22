const graphql = require('graphql');
const mongoose = require('mongoose');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} = graphql;

const UserType = require('../schema/User');
const UserModel = require('../models/User');

const mutations = {
  addUser: {
    type: UserType,
    args: {
      fullName: {
        type: new GraphQLNonNull(GraphQLString)
      },
      age: {
        type: GraphQLInt
      },
      companyId: {
        type: GraphQLString
      }
    },
    resolve(parentValue, { fullName, age, companyId }) {
      return UserModel.create({
        fullName,
        age,
        companyId
      });
    }
  },
  editUser: {
    type: UserType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLString)
      },
      fullName: {
        type: GraphQLString
      },
      age: {
        type: GraphQLInt
      },
      companyId: {
        type: GraphQLString
      }
    },
    resolve(parentValue, { id, fullName, age, companyId }) {
      return UserModel.findByIdAndUpdate(id, {fullName, age});
    }
  },
  deleteUser: {
    type: UserType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    resolve(parentValue, { id }) {
      return UserModel.findByIdAndRemove(id);
    }
  }
};

module.exports = mutations;

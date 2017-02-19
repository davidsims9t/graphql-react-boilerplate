const graphql = require('graphql');
const mongoose = require('mongoose');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} = graphql;
const CompanyType = require('../schema/Company');
const CompanyModel = require('../models/Company');

const mutations = {
  addCompany: {
    type: CompanyType,
    args: {
      name: {
        type: GraphQLString
      }
    },
    resolve(parentValue, { name }) {
      return CompanyModel.create({
        name
      });
    }
  },
  editCompany: {
    type: CompanyType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLString)
      },
      name: {
        type: GraphQLString
      }
    },
    resolve(parentValue, { id, name }) {
      return CompanyModel.findByIdAndUpdate(id, {name});
    }
  },
  deleteCompany: {
    type: CompanyType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve(parentValue, { id }) {
      return CompanyModel.findByIdAndRemove(id);
    }
  }
};

module.exports = mutations;

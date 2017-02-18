const graphql = require('graphql');
const fetch = require('node-fetch');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} = graphql;
const UserType = require('../schema/user');

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
      return fetch('http://localhost:3000/users', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({fullName, age, companyId})
      }).then(res => res.json());
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
      return fetch(`http://localhost:3000/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullName, age })
      }).then(res => res.json());
    }
  },
  deleteUser: {
    type: UserType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve(parentValue, { id }) {
      return fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE'
      }).then(res => res.json());
    }
  }
};

module.exports = mutations;

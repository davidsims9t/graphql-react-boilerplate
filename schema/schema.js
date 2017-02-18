const graphql = require('graphql');
const fetch = require('node-fetch');
const {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
} = graphql;
const _ = require('lodash');

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
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        return fetch(`http://localhost:3000/companies/${parentValue.id}/users`)
          .then(res => res.json());
      }
    }
  })
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    fullName: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    },
    company: {
      type: CompanyType,
      resolve(parentValue, args) {
        return fetch(`http://localhost:3000/companies/${parentValue.companyId}`)
          .then(res => res.json());
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(parentValue, args) {
        return fetch(`http://localhost:3000/users/${args.id}`).then(res => res.json());
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
        return fetch(`http://localhost:3000/companies/${args.id}`).then(res => res.json());
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
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
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

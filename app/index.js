// External Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

// Components
import Wrapper from './components/Wrapper';
import UsersList from './components/UsersList';
import UserItem from './components/UserItem';
import AddUser from './components/AddUser';
import Home from './components/Home';

// Configure the network setup so we can pass in
// a JWT authentication header.
const networkInterface = createNetworkInterface({
  uri: '/graphql'
});

// Sets the authentication header with an authentication token from local storage
networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }

    const token = localStorage.getItem('token');
    req.options.headers.authorization = token ? `Bearer ${token}` : null;
    next();
  }
}]);

// Apollo client with instructions to identify records by the id attribute.
// Every record should have an id attribute.
// Configure out network interface.
const client = new ApolloClient({
  dataIdFromObject: o => o.id,
  networkInterface
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <IndexRoute component={Home} />
        <Route path="/users" component={Wrapper}>
          <IndexRoute component={UsersList} />
          <Route path="add" component={AddUser} />
          <Route path=":id" component={UserItem} />
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.getElementById('mount')
);

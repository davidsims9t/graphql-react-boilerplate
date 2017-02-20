// External Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

// Components
import Wrapper from './components/Wrapper';
import UsersList from './components/UsersList';
import UserItem from './components/UserItem';
import AddUser from './components/AddUser';
import Home from './components/Home';

const client = new ApolloClient({});

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

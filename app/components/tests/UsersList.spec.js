import React from 'react';
import renderer from 'react-test-renderer';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import UsersList from '../UsersList';

const client = new ApolloClient({});

test('should render <UsersList /> component', () => {
  const tree = renderer.create(
    <ApolloProvider client={client}>
      <UsersList />
    </ApolloProvider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

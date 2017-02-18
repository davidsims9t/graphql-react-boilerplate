import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class UsersList extends Component {
  render() {
    // loaded as this.props.data.users
    
    return (
      <section>
        <h2>Users List</h2>

        <ul>
        </ul>
      </section>
    );
  }
}

const query = gql`
  {
    users {
      username
    }
  }
`;

export default graphql(query)(UsersList);

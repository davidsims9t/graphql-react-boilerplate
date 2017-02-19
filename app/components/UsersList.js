import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class UsersList extends Component {
  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>
    }

    return (
      <section>
        <h2>Users List</h2>

        <ul>
          {this.props.data.users.map(user => <li>{user.fullName}</li>)}
        </ul>
      </section>
    );
  }
}

const query = gql`
  {
    users {
      fullName
    }
  }
`;

export default graphql(query)(UsersList);

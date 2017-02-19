import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { PageHeader, ListGroup, ListGroupItem } from 'react-bootstrap';

class UsersList extends Component {
  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>
    }

    return (
      <section className="users">
        <PageHeader>Users List</PageHeader>

        <ListGroup>
          {this.props.data.users.map(user => <ListGroupItem>{user.fullName}</ListGroupItem>)}
        </ListGroup>
      </section>
    );
  }
}

const query = gql`
  {
    users {
      fullName
      age
    }
  }
`;

export default graphql(query)(UsersList);

import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { PageHeader, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router';

import query from '../queries/users';

class UsersList extends Component {
  onClick(id) {
    this.props.mutate({
      variables: {
        id
      }
    }).then(() => {
      this.props.data.refetch();
    }).catch(err => {
      // error...
    });
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>
    }

    return (
      <section className="users">
        <PageHeader>Users List</PageHeader>

        <ListGroup>
          {this.props.data.users.map(user => {
            return <ListGroupItem key={user.id}>
              Name: {user.fullName}<br />
              Age: {user.age}<br />
              Company: {user.company.name}

              <Button onClick={() => this.onClick(user.id)}>Delete</Button>
            </ListGroupItem>
          })}
        </ListGroup>

        <Link to="/users/add">Add User</Link>
      </section>
    );
  }
}

const mutation = gql`
  mutation DeleteUser($id: String!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(
  graphql(query)(UsersList)
);

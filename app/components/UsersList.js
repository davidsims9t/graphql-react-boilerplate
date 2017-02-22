import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { PageHeader, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router';

import '../styles/users-list.css';

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

    if (this.props.data.error) {
      return <div>Something went wrong...</div>
    }

    return (
      <section className="users">
        <PageHeader className="users-heading">Users List</PageHeader>

        <ListGroup className="users-list">
          {this.props.data.users.map(user => {
            return <ListGroupItem className="users-list-item" key={user.id}>
              <div className="users-list-item-row">
                Name: <Link to={`/users/${user.id}`}>{user.fullName}</Link>
              </div>
              <div className="users-list-item-row">Age: {user.age}</div>
              <div className="users-list-item-row justified-inline">
                Company: {user.company.name}
                <Button className="user-delete-btn" onClick={() => this.onClick(user.id)}>Delete</Button>
              </div>
            </ListGroupItem>
          })}
        </ListGroup>

        <Link to="/users/add" className="user-add-btn btn btn-primary">Add User</Link>
      </section>
    );
  }
}

const mutation = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(
  graphql(query)(UsersList)
);

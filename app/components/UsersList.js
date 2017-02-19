import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { PageHeader, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router';

import query from '../queries/users';

class UsersList extends Component {
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
            </ListGroupItem>
          })}
        </ListGroup>

        <Link to="/users/add">Add User</Link>
      </section>
    );
  }
}

export default graphql(query)(UsersList);

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
          {this.props.data.users.map(user => {
            return <ListGroupItem key={user._id}>
              Name: {user.fullName}<br />
              Age: {user.age}<br />
              Company: {user.company.name}
            </ListGroupItem>
          })}
        </ListGroup>
      </section>
    );
  }
}

const query = gql`
  {
    users {
      id
      fullName
      age
      company {
        name
      }
    }
  }
`;

export default graphql(query)(UsersList);

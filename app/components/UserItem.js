import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { PageHeader, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router';

class UserItem extends Component {
  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>
    }

    return (
      <section className="user">
        <PageHeader className="user-heading">{this.props.data.user.fullName}</PageHeader>

        <ListGroup className="user-list">
          <ListGroupItem>Age: {this.props.data.user.age}</ListGroupItem>
        </ListGroup>

        <Link to="/users" className="user-back-btn btn btn-primary">Go Back</Link>
      </section>
    );
  }
}

const query = gql`
query User($id: String!) {
  user(id: $id) {
    id
    fullName
    age
  }
}
`;

export default graphql(query, {
  options: props => { return { variables: { id: props.params.id } }; }
})(UserItem);

import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { PageHeader, ListGroup, ListGroupItem } from 'react-bootstrap';
import PreloaderIcon, {ICON_TYPE} from 'react-preloader-icon';

class UsersList extends Component {
  render() {
    if (this.props.data.loading) {
      return (
        <PreloaderIcon
          type={ICON_TYPE.OVAL}
          size={32}
          strokeWidth={3}
          strokeColor="#F0AD4E"
          duration={800} /> 
      )
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

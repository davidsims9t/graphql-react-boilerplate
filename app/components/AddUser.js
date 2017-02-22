import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { PageHeader, Form, FormGroup, Button, ControlLabel, FormControl } from 'react-bootstrap';
import { Link, hashHistory } from 'react-router';

import query from '../queries/users';
import mutation from '../mutations/addUser';

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      age: 0
    };
  }

  onChangeFullName = event => {
    this.setState({fullName: event.target.value});
  }

  onChangeAge = event => {
    this.setState({age: event.target.value});
  }

  onSubmit = event => {
    event.preventDefault();

    this.props.mutate({
      variables: {
        fullName: this.state.fullName,
        age: +this.state.age
      },
      // optimisticResponse: {
      //   __typename: 'Mutation',
      //   fullName: this.state.fullName,
      //   age: +this.state.age
      // },
      refetchQueries: [{ query }]
    }).then(() => {
      hashHistory.push('/users');
    }).catch(() => {
      // error...
    });
  }

  render() {
    return (
      <section className="add-user">
        <PageHeader>
          Add User
        </PageHeader>

        <Form onSubmit={this.onSubmit}>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Full Name</ControlLabel>
            <FormControl type="text" onChange={this.onChangeFullName} value={this.state.fullName} />
          </FormGroup>

          <FormGroup controlId="formInlineName">
            <ControlLabel>Full Name</ControlLabel>
            <FormControl type="text" onChange={this.onChangeAge} value={this.state.age} />
          </FormGroup>

          <Button type="submit">Add User</Button>
        </Form>

        <Link to="/users" className="user-back-btn btn btn-primary">Go Back</Link>
      </section>
    )
  }
}

export default graphql(mutation)(AddUser);

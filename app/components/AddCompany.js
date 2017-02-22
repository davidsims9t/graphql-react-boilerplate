import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { PageHeader, Form, FormGroup, Button, ControlLabel, FormControl } from 'react-bootstrap';
import { Link, hashHistory } from 'react-router';

import query from '../queries/users';
import mutation from '../mutations/addCompany';

class AddCompany extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  }

  onSubmit = event => {
    event.preventDefault();

    this.props.mutate({
      variables: {
        fullName: this.state.fullName,
        age: +this.state.age
      },
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

        <Form onSubmit={this.onSubmit.bind(this)}>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Full Name</ControlLabel>
            <FormControl type="text" onChange={this.onChangeFullName.bind(this)} value={this.state.fullName} />
          </FormGroup>

          <FormGroup controlId="formInlineName">
            <ControlLabel>Full Name</ControlLabel>
            <FormControl type="text" onChange={this.onChangeAge.bind(this)} value={this.state.age} />
          </FormGroup>

          <Button type="submit">Add User</Button>
        </Form>

        <Link to="/users" className="user-back-btn btn btn-primary">Go Back</Link>
      </section>
    )
  }
}

export default graphql(mutation)(AddCompany);

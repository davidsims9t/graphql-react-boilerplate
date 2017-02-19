import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { PageHeader, Form, FormGroup, Button, ControlLabel, FormControl } from 'react-bootstrap';
import { Link, hashHistory } from 'react-router';

import query from '../queries/users';

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      age: 0
    };
  }

  onChangeFullName(event) {
    this.setState({fullName: event.target.value});
  }

  onChangeAge(event) {
    this.setState({age: event.target.value});
  }

  onSubmit(event) {
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

        <Link to="/users">Go Back</Link>
      </section>
    )
  }
}

const mutation = gql`
  mutation AddUser($fullName: String!, $age: Int) {
    addUser(fullName: $fullName, age: $age) {
      fullName
      age
    }
  }
`;

export default graphql(mutation)(AddUser);

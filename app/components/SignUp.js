/* @flow */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { PageHeader, Form, FormGroup, Button, ControlLabel, FormControl } from 'react-bootstrap';

import mutation from '../mutations/signUp';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      errors: []
    };
  }

  onSubmit = event => {
    event.preventDefault();

    this.props.mutate({
      variables: {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      }
    }).then(res => {
      localStorage.setItem('id_token', res.data.logIn.id_token);
      browserHistory.push('/log-in');
    }).catch(err => {
      const errors = err.graphQLErrors.map(error => error.message);
      this.setState({ errors });
    });
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value});
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value});
  }

  onChangePassword = event => {
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <section className="container sign-up">
        <PageHeader>
          Sign Up
        </PageHeader>

        <Form onSubmit={this.onSubmit}>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Username</ControlLabel>
            <FormControl type="text" onChange={this.onChangeUsername} value={this.state.username} />
          </FormGroup>

          <FormGroup controlId="formInlineName">
            <ControlLabel>Email</ControlLabel>
            <FormControl type="text" onChange={this.onChangeEmail} value={this.state.email} />
          </FormGroup>

          <FormGroup controlId="formInlineName">
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" onChange={this.onChangePassword} value={this.state.password} />
          </FormGroup>

          <Button type="submit">Sign Up</Button>
        </Form>
      </section>
    );
  }
}

export default graphql(mutation)(SignUp);

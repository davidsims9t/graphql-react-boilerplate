/* @flow */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { browserHistory } from 'react-router';
import gql from 'graphql-tag';
import { PageHeader, Form, FormGroup, Button, ControlLabel, FormControl } from 'react-bootstrap';

import mutation from '../mutations/logIn';

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: []
    };
  }

  onSubmit = event => {
    event.preventDefault();

    this.props.mutate({
      variables: {
        username: this.state.username,
        password: this.state.password
      }
    }).then(res => {
      localStorage.setItem('id_token', res.data.logIn.id_token);
      browserHistory.push('/users');
    }).catch(err => {
      const errors = err.graphQLErrors.map(error => error.message);
      this.setState({ errors });
    });
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value});
  }

  onChangePassword = event => {
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <section className="container log-in">
        <PageHeader>
          Log In
        </PageHeader>

        <Form onSubmit={this.onSubmit}>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Username</ControlLabel>
            <FormControl type="text" onChange={this.onChangeUsername} value={this.state.username} />
          </FormGroup>

          <FormGroup controlId="formInlineName">
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" onChange={this.onChangePassword} value={this.state.password} />
          </FormGroup>

          <Button type="submit">Log In</Button>
        </Form>
      </section>
    );
  }
}

export default graphql(mutation)(LogIn);

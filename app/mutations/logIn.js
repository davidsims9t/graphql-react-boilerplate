import gql from 'graphql-tag';

export default gql`
  mutation LogIn($username: String!, $password: String!) {
    logIn(username: $username, password: $password) {
      id_token
    }
  }
`;

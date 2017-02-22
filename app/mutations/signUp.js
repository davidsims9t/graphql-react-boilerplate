import gql from 'graphql-tag';

export default gql`
  mutation SignUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password) {
      id
    }
  }
`;

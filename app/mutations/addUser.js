import gql from 'graphql-tag';

export default gql`
  mutation AddUser($fullName: String!, $age: Int) {
    addUser(fullName: $fullName, age: $age) {
      fullName
      age
    }
  }
`;

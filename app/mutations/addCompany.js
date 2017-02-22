import gql from 'graphql-tag';

export default gql`
  mutation AddCompany() {
    addCompany() {
      fullName
      age
    }
  }
`;

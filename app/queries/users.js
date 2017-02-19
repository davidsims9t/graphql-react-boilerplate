import gql from 'graphql-tag';

export default gql`
  {
    users {
      id
      fullName
      age
      company {
        name
      }
    }
  }
`;

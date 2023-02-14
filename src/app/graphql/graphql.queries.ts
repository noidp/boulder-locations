import { gql } from 'apollo-angular';

const GET_GYMS = gql`
  query listGyms {
    boulderingGyms {
      id
      name
      city
      score
      createdAt
    }
  }
`;
export { GET_GYMS };

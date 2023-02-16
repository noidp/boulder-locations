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

const GET_GYM = gql`
  query getGym($id: ID!) {
    boulderingGym(where: { id: $id }) {
      id
      name
      city
      score
      createdAt
    }
  }
`;
export { GET_GYMS, GET_GYM };

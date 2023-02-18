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

const ADD_GYM = gql`
  mutation createGym($data: BoulderingGymCreateInput!) {
    createBoulderingGym(data: $data) {
      id
      name
      city
      score
      createdAt
    }
  }
`;

const EDIT_GYM = gql`
  mutation updateGym($id: ID!, $data: BoulderingGymUpdateInput!) {
    updateBoulderingGym(data: $data, where: { id: $id }) {
      id
      name
      city
      score
      createdAt
    }
  }
`;

export { GET_GYMS, GET_GYM, ADD_GYM, EDIT_GYM };

export interface CreateGymResponse {
  createBoulderingGym: string;
  loading: boolean;
}

export interface EditGymResponse {
  updateBoulderingGym: string;
  loading: boolean;
}

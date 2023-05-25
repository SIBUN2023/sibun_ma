import { gql } from "@apollo/client";

export const MODALIDADES_QUERY = gql`
  query{
    allTorneosInternos{
      _id
    }
  }
`;

export const GetAllTorneosInternos = gql`
query {
    allTorneosInternos {
      _id
      nombre
      periodo
      tipo
      rama
      estado
    }
  }
`;

export const CREATE_TORNEO_INTERNO = gql`
mutation ($torneoInterno: TorneosInternosInput!) {
  createTorneoInterno(torneoInterno: $torneoInterno) {
    nombre
  }
}
`;

export const DELETE_TORNEO_INTERNO = gql`
mutation ($_id: String!) {
  deleteTorneoInterno(_id: $_id)
}
`;
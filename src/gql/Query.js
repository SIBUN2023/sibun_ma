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
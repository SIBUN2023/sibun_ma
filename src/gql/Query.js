import { gql } from "@apollo/client";

export const GetAllModalidades = gql`
  query {
  allModalidades {
    id
    modalidad_id
    modalidad_nombre
    modalidad_estado
    }
  }
`;

export const GetModalidadById = gql`
  query GetModalidadById($id: Int!) {
    modalidadById(id: $id) {
      id
      modalidad_id
      modalidad_nombre
      modalidad_estado
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

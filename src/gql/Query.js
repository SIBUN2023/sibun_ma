import { gql } from "@apollo/client";

export const MODALIDADES_QUERY = gql`
  query {
  allModalidades {
    id
    modalidad_id
    modalidad_nombre
    modalidad_estado
    }
  }
`;
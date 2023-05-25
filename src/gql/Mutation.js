import { gql } from "@apollo/client";

export const RemoveModalidades = gql`
  mutation DeleteModalidad($id: Int!) {
    deleteModalidad(id: $id)
  }
`;

export default RemoveModalidades;

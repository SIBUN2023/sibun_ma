import { gql } from '@apollo/client';

export const CreateModalidad = gql`
  mutation CreateModalidad($modalidad: ModalidadInput!) {
    createModalidad(modalidad: $modalidad) {
      id
    }
  }
`;

export default CreateModalidad;

import { Text, FlatList, Pressable } from 'react-native'
import { MODALIDADES_QUERY } from "./gql/Query";
import { useQuery } from "@apollo/client";

export default function HomeScreen() {
    const { data, loading } = useQuery(MODALIDADES_QUERY); //execute query
  
    const ModalidadItem = ({ modalidad }) => {
      const { modalidad_nombre, modalidad_estado } = modalidad; //get the name of continent
  
      return (
        <Pressable>
          <Text>{modalidad_nombre} : {modalidad_estado}</Text> 
          
        </Pressable>
      );
    };
  
    if (loading) {
      return <Text>Fetching data...</Text> //while loading return this
    }

    const modalidades = data.allModalidades.map((modalidad) => ({
      modalidad_nombre: modalidad.modalidad_nombre,
      modalidad_estado: modalidad.modalidad_estado,
    }));

    return (
        <FlatList
          data={data.allModalidades}
          renderItem={({ item }) => <ModalidadItem modalidad={item} />}
          keyExtractor={(item, index) => index}
        />
    );
  }  
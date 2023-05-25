import React from "react";
import { View, Text, Pressable, FlatList} from 'react-native';
import { GetAllTorneosInternos } from "../gql/Query";
import { useQuery } from "@apollo/client";

const TorneosList = () => {
    const { data, loading } = useQuery(GetAllTorneosInternos); //execute query
  
    const TorneosItem = ({ torneo }) => {
      const { _id,nombre,periodo,tipo,rama,estado } = torneo; //get the name of continent

      return (
        <Pressable>
          <Text>nombre : {nombre}</Text> 
          
        </Pressable>
      );
    }

    if (loading) {
        return <Text>Fetching data...</Text> //while loading return this
      }
  
      const torneos = data.allTorneosInternos.map((torneo) => ({
        torneo_id: torneo._id,
        torneo_nombre: torneo.nombre,
        torneo_periodo: torneo.periodo,
        torneo_tipo: torneo.tipo,
        torneo_rama: torneo._rama,
        torneo_estado: torneo.estado
    }));

    return(
        <FlatList
          data={data.allTorneosInternos}
          renderItem={({ item }) => <TorneosItem torneo={item} />}
          keyExtractor={(item, index) => index}
        />
    );
}

export default TorneosList
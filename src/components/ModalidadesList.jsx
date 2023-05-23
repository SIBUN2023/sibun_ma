import React from "react";
import { View, Text} from 'react-native';
import modalidades from "../Data/modalidades";
import { FlatList } from "react-native-web";

const ModalidadesList = () => {
    return(
        <FlatList
            data={modalidades}
            renderItem={({item: mod}) => (
                <View key={mod.id}>
                    <Text>MODALIDAD</Text>
                    <Text>-------------------------------</Text>
                    <Text>Id: {mod.id}</Text>
                    <Text>Modalidad_Id: {mod.modalidad_id}</Text>
                    <Text>Nombre: {mod.modalidad_nombre}</Text>
                    <Text>Estado: {mod.modalidad_estado}</Text>
                </View>
            )}
        />
    );
}

export default ModalidadesList
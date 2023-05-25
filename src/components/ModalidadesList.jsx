import React, { useState } from 'react';
import { View, Text, Pressable, FlatList, StyleSheet, ScrollView, TextInput } from 'react-native';
import { GetAllModalidades } from '../gql/Query';
import { useQuery, useMutation, useLazyQuery } from '@apollo/client';
import { Provider as PaperProvider, Button, Dialog, Paragraph, Portal } from 'react-native-paper'; // Import PaperProvider from react-native-paper
import RemoveModalidades from '../gql/Mutation';
import CreateModalidad from '../gql/MutationCreate';


const ModalidadesList = () => {
    const { data, loading } = useQuery(GetAllModalidades); // execute query

    const [modalidadId, setModalidadId] = useState('');
    const [deleteModalidad, { loading: deleting, error: deleteError }] = useMutation(RemoveModalidades);
    const [successDialogVisible, setSuccessDialogVisible] = useState(false);
    const [noDataDialogVisible, setNoDataDialogVisible] = useState(false);
    const [deleteErrorDialogVisible, setDeleteErrorDialogVisible] = useState(false);

    const [createModalidad, { loading: creating, error: createError }] = useMutation(CreateModalidad);
    const [newModalidadId, setNewModalidadId] = useState('');
    const [modalidadNombre, setModalidadNombre] = useState('');
    const [modalidadEstado, setModalidadEstado] = useState('');
    const [newSuccessDialogVisible, setNewSuccessDialogVisible] = useState(false);

    
    const handleDelete = async () => {
        if (deleting) return; // Ignore the button press if deletion is in progress
      
        if (!modalidadId) {
          setDeleteErrorDialogVisible(true);
          return;
        }
      
        try {
          const response = await deleteModalidad({
            variables: {
              id: parseInt(modalidadId),
            },
          });
      
          const { success } = response.data.deleteModalidad;
      
          if (success) {
            setSuccessDialogVisible(true); // Show success dialog on successful deletion
          } else {
            setNoDataDialogVisible(true); // Show dialog indicating deletion failure
          }
        } catch (error) {
          console.error('Error deleting modalidad:', error);
          const errorMessage = error.message || 'Error message not found.';
          console.error('Error message:', errorMessage);
          setNoDataDialogVisible(true); // Show dialog indicating no data found
        }
      };

    const handleCreate = () => {
        if (creating) return; // Ignore the button press if creation is in progress

        createModalidad({
            variables: {
                modalidad: {
                    modalidad_id: newModalidadId,
                    modalidad_nombre: modalidadNombre,
                    modalidad_estado: parseInt(modalidadEstado),
                },
            },
            // You can add any other necessary options here, such as update functions
        })
            .then(() => {
                setNewSuccessDialogVisible(true);
                setNewModalidadId(''); // Clear the input fields after successful creation
                setModalidadNombre('');
                setModalidadEstado('');
            })
            .catch((error) => {
                console.error('Error creating modalidad:', error);
            });
    };

    const ModalidadItem = ({ modalidad }) => {
        const { modalidad_nombre, modalidad_estado } = modalidad; // get the name of continent

        return (
            <Pressable>
                <Text>{modalidad_nombre} : {modalidad_estado}</Text>
            </Pressable>
        );
    }

    if (loading) {
        return <Text>Fetching data...</Text> // while loading, return this
    }

    return (
        <PaperProvider>
            <View style={styles.container}>
                <View style={{ flex: 1, backgroundColor: "green", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 25, fontWeight: "bold" }}> MODALIDADES </Text>
                </View>
                {/* <View>
                    <FlatList
                        data={data.allModalidades}
                        renderItem={({ item }) => <ModalidadItem modalidad={item} />}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View> */}
                <View style={{ flex: 5, marginHorizontal: 15, marginVertical:50 }}>

                    <ScrollView>
                        <TextInput style={styles.TextInputStyles} placeholder="Codigo modalidad" value={newModalidadId} onChangeText={setNewModalidadId} />
                        <TextInput style={styles.TextInputStyles} placeholder="Nombre de modalidad" value={modalidadNombre} onChangeText={setModalidadNombre} />
                        <TextInput keyboardType="Estado" maxLength={1} style={styles.TextInputStyles} placeholder="Estado" value={modalidadEstado} onChangeText={setModalidadEstado} />
                    </ScrollView>
                    <Button icon="rocket" style={{ backgroundColor: "#2ecc71", paddingVertical: 5, marginBottom: 10 }} mode="contained" onPress={handleCreate}>
                        Crear Modalidad
                    </Button>

                    <Button icon="rocket" style={{ backgroundColor: "#000", marginVertical: 5, marginBottom: 10 }} mode="contained" >
                        Actualizar Modalidad
                    </Button>

                    <TextInput keyboardType="number-pad" maxLength={12} style={styles.TextInputStyles} placeholder="Id" value={modalidadId} onChangeText={setModalidadId} />


                    <Button icon="rocket" style={{ backgroundColor: "red", marginVertical: 5, marginBottom: 10 }} mode="contained" onPress={handleDelete}>
                        Eliminar Modalidad
                    </Button>

                    <Button icon="rocket" style={{ backgroundColor: "blue", marginVertical: 5 }} mode="contained" >
                        Buscar Modalidad
                    </Button>

                </View>
                <Portal>
                    <Dialog visible={successDialogVisible} onDismiss={() => setSuccessDialogVisible(false)}>
                        <Dialog.Content>
                            <Paragraph>¡Modalidad eliminada satisfactoriamente!</Paragraph>
                        </Dialog.Content>
                    </Dialog>
                    <Dialog visible={deleteErrorDialogVisible} onDismiss={() => setDeleteErrorDialogVisible(false)}>
                        <Dialog.Content>
                            <Paragraph>Por favor brinde el ID para eliminar una modalidad.</Paragraph>
                        </Dialog.Content>
                    </Dialog>
                    <Dialog visible={noDataDialogVisible} onDismiss={() => setNoDataDialogVisible(false)}>
                        <Dialog.Content>
                            <Paragraph>No hay datos</Paragraph>
                        </Dialog.Content>
                    </Dialog>

                    <Dialog visible={newSuccessDialogVisible} onDismiss={() => setNewSuccessDialogVisible(false)}>
                        <Dialog.Content>
                            <Paragraph>¡Modalidad creada!</Paragraph>
                        </Dialog.Content>
                    </Dialog>
                </Portal>

            </View>
        </PaperProvider>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
    },
    TextInputStyles: {
        borderColor: "#000",
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 10
    }
});

export default ModalidadesList;

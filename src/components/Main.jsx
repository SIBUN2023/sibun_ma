import React from "react";
import Constants from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../HomeScreen.js';
import ModalidadesList from "./ModalidadesList.jsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
});

const Main = () => {
    return(
        <View style={{
            marginTop: Constants.statusBarHeight,
            flexGrow: 1
        }}>
        <ApolloProvider client={client}>
        <View style={styles.container}>
            <Text style={styles.title}>SIBUN</Text>
            <ModalidadesList />
        </View>
        </ApolloProvider>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default Main
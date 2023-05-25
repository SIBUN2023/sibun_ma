import React from "react";
import Constants from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../HomeScreen.js';
import TorneosList from "./TorneosList.jsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
    uri: 'http://192.168.0.3:5000/graphql',
    cache: new InMemoryCache()
});

const Main = () => {
    return(
        <ApolloProvider client={client}>

        <View style={{
            marginTop: Constants.statusBarHeight,
            flexGrow: 1
        }}>
        <View style={styles.container}>
            <Text style={styles.title}>SIBUN</Text>
            <TorneosList />
        </View>
        </View>
        </ApolloProvider>
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
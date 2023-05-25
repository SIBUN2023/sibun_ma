import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/HomeScreen.js';
import ModalidadesList from './src/components/ModalidadesList.jsx';
import Main from './src/components/Main.jsx';


// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://192.168.0.9:5000/graphql',
  cache: new InMemoryCache()
});

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>

      <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Torneos') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'TallerCultura') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Torneos" component={HomeScreen} />
        <Tab.Screen name="TallerCultura" component={ModalidadesList} />
      </Tab.Navigator>
    </NavigationContainer>

    </ApolloProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


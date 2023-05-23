import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Main from './src/components/Main.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
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

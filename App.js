import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import Home from './Screens/home'

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
      <Button
        onPress={() => Alert.alert('Cannot Log in at this time')}
        title="LogIn"
        color="#f194ff"
        accessibilityLabel="press this button to Log In "
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

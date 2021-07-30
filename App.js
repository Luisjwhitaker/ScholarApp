import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';
import PreviousLogsScreen from './Screens/PreviousLogsScreen';

export default App = () => {
  return (
    <View style={styles.container}>
      <PreviousLogsScreen/>
      <View>
        <Text style={styles.titleText}>Welcome, Scholars!</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
            style={styles.inputWide}
            placeholder=" Username"
            keyboardType="default"
        />
        <TextInput
            style={styles.inputWide}
            placeholder=" Password"
            keyboardType="default"
            secureTextEntry={true}
        />
        <Button
          onPress={() => Alert.alert('Cannot Log in at this time')}
          title="LogIn"
          color="#f194ff"
          accessibilityLabel="Log In button"
        />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6d9',
    alignItems: 'center',

  },
  inputView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  inputWide: {
    height: 40,
    width: '85%',
    margin: 12,
    borderWidth: 1,
    fontFamily: "monospace",
  },
  baseText: {
    fontFamily: "Roboto",
  },
  titleText: {
    fontFamily: "monospace",
    fontSize: 60,
    marginBottom: 50,
    marginTop: 50,
    fontWeight: "bold"
  },

});

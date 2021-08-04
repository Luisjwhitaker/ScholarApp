import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import LoginScreen from './Screens/LoginScreen';
import LobbyScreen from './Screens/LobbyScreen';
import LogActivityScreen from './Screens/LogActivityScreen';
import PreviousLogsScreen from './Screens/PreviousLogsScreen';

export default props => {
  let [fontsLoaded] = useFonts({
    'chalkboard-se-bold': require('./assets/fonts/chalkboard-se-bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <LogActivityScreen/>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6d9',
    alignItems: 'center',
  },

  subContainer: {
    flex: 1,
    backgroundColor: '#ffe6d9',
    alignItems: 'center',
    margin: 50,
  },

});

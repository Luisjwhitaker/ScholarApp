import React from 'react';
import { StyleSheet} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import Navigator from './routes/homeStack';

export default props => {
  let [fontsLoaded] = useFonts({
    'chalkboard-se-bold': require('./assets/fonts/chalkboard-se-bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Navigator/>
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

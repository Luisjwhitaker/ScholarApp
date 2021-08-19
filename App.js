import React from 'react';
import { StyleSheet} from 'react-native';

// font stuff and loading
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

// navigation imports
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screen imports
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import LobbyScreen from './screens/LobbyScreen';
import LogActivityScreen from './screens/LogActivityScreen';
import PreviousLogsScreen from './screens/PreviousLogsScreen';
import AnnouncementsScreen from './screens/AnnouncementsScreen';
import CreditsScreen from './screens/CreditsScreen';
import GuidesScreen from './screens/GuidesScreen';

// component imports
//import Axie from './components/Axie';

// naviagation constans
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

var isSignedIn = true;

function MyStack() {

  return (
      isSignedIn ? (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LobbyScreen" component={LobbyScreen} options={{header: () => null}}/>
          <Stack.Screen name="LogActivityScreen" component={LogActivityScreen} options={{header: () => null}}/>
          <Stack.Screen name="PreviousLogsScreen" component={PreviousLogsScreen} options={{header: () => null}}/>
          <Stack.Screen name="AnnouncementsScreen" component={AnnouncementsScreen} options={{header: () => null}}/>
          <Stack.Screen name="CreditsScreen" component={CreditsScreen} options={{header: () => null}}/>
          <Stack.Screen name="GuidesScreen" component={GuidesScreen} options={{header: () => null}}/>
        </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{header: () => null}}/>
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{header: () => null}}/>
        </Stack.Navigator>
        </NavigationContainer>
      )
  );

/*
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="LoginScreen" component={LoginScreen} options={{header: () => null}}/>
      <Tab.Screen name="RegisterScreen" component={RegisterScreen} options={{header: () => null}}/>
      <Tab.Screen name="LobbyScreen" component={LobbyScreen} options={{header: () => null}}/>
      <Tab.Screen name="LogActivityScreen" component={LogActivityScreen} options={{header: () => null}}/>
      <Tab.Screen name="PreviousLogsScreen" component={PreviousLogsScreen} options={{header: () => null}}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
*/
}

// app display and loading fonts
export default props => {
  let [fontsLoaded] = useFonts({
    'chalkboard-se-bold': require('./assets/fonts/chalkboard-se-bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <MyStack/>
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

import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';

// navigation imports
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation} from "@react-navigation/native";

export default function AnnouncementsScreen() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>New!</Text>
      </View>
      <View>
      <Button
        onPress={() => navigation.navigate('LobbyScreen')}
        title="Back"
        color="#f194ff"
        accessibilityLabel="Back Button"
      />
      </View>
    </View>
  );

// Function for LogIn button
  async function SubmittLogin(){
    try {
      await fetch('http://192.168.100.11:100/api/login/', {
        method:'post',
        mode:'no-cors',
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          username: username,
          password : password,
        })
      }).then(response => response.json() )
        .then(data => console.log(data) )
        .catch(error => console.log(error));

    } catch (e) {
      console.log(e);
    }
  }

}

// Function for Register button
//function Screen({ navigation }){
//  const RegisterPage = ({ navigation }) => ()
//  navigation.navigate("RegisterScreen");
//}

// Stylesheets
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6d9',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',

  },
  inputView: {
    width: '85%',
    alignItems: 'center',
    marginBottom: 50,
  },
  inputWide: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    fontFamily: "chalkboard-se-bold",
  },
  buttonView: {
    marginBottom: 75,
    width: '80%',
  },
  baseText: {
    fontFamily: "chalkboard-se-bold",
  },
  titleText: {
    fontFamily: "chalkboard-se-bold",
    fontSize: 60,
    marginTop: 150,
    textAlign: 'center',
  },

});

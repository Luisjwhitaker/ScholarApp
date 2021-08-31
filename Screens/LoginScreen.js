import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, TouchableOpacity} from 'react-native';

// navigation and auth imports
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation} from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';



export default function LoginScreen() {
  const [username, setUsername] = useState('username');
  const [password, setPassword] = useState('password');
  const [token, setToken] = useState(null);
  const navigation = useNavigation();

  const storeData = async (value) => {
    try {
      if (value == undefined) {
        alert('Invalid Login: Please Try Again')
      } else {
        await AsyncStorage.setItem('token', String(value))
        console.log('Data successfully saved')
      }
    } catch (e) {
      console.log(e)
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token')
      if(value !== null) {
        setToken(value)
      }
    } catch(e) {
      console.log(e)
    }
  }

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear()
      setToken(null)
      console.log('Storage successfully cleared!')
    } catch (e) {
      console.log('Failed to clear the async storage.')
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>Welcome, Scholars!</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputWide}
          placeholder=" Username *Case-sensitive"
          onChangeText={(val) => setUsername(val)}
          keyboardType="default"
          autoCapitalize='none'
        />
        <TextInput
          style={styles.inputWide}
          placeholder=" Password"
          onChangeText={(val) => setPassword(val)}
          keyboardType="default"
          secureTextEntry={true}
          autoCapitalize='none'
        />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.buttonTouchable}
          onPress={SubmitLogin}
          underlayColor='#fff'>
            <Text style={styles.baseText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTouchable}
          onPress={() => navigation.navigate('RegisterScreen')}
          underlayColor='#fff'>
            <Text style={styles.baseText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTouchable}
          onPress={() => getData()}
          underlayColor='#fff'>
            <Text style={styles.baseText}>logToken</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTouchable}
          onPress={() => clearStorage()}
          underlayColor='#fff'>
            <Text style={styles.baseText}>clearToken</Text>
        </TouchableOpacity>
      </View>
    </View>

  );

// Function for LogIn button
  async function SubmitLogin(){
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
      }).then(response => response.json())
        .then(response => storeData(JSON.stringify(response['token'])))
        .then(response => RNRestart.Restart())
        .catch(error => console.log(error))
    } catch (e) {
      console.log(e)
      console.log('could not connect to website')
    }

  }
}

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
    borderRadius: 15 ,
  },
  buttonView: {
    marginBottom: 150,
    width: '80%',
    borderRadius: 20 ,
  },
  buttonTouchable: {
    marginBottom: 10,
    width: '100%',
    borderRadius: 10 ,
    fontFamily: "chalkboard-se-bold",
    backgroundColor: '#f2f2f2',
    borderWidth: 2,
  },
  baseText: {
    fontFamily: "chalkboard-se-bold",
    fontSize: 30,
    textAlign: 'center',
  },
  titleText: {
    fontFamily: "chalkboard-se-bold",
    fontSize: 60,
    marginTop: 150,
    textAlign: 'center',
  },

});

import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';

export default function RegisterScreen() {
  const [username, setUsername] = useState('username');
  const [password, setPassword] = useState('password');
  const [password2, setPassword2] = useState('password2');

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
        />
        <TextInput
            style={styles.inputWide}
            placeholder=" Password"
            onChangeText={(val) => setPassword(val)}
            keyboardType="default"
            secureTextEntry={true}
        />
        <TextInput
            style={styles.inputWide}
            placeholder=" Verify Password"
            onChangeText={(val) => setPassword2(val)}
            keyboardType="default"
            secureTextEntry={true}
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          onPress={SubmittRegister}
          title="Register"
          color="#f194ff"
          accessibilityLabel="register submit button"
        />
      </View>
    </View>

  );

  async function SubmittRegister(){
    try {

      await fetch('http://192.168.100.11:100/api/register/', {
        method:'post',
        mode:'no-cors',
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          username: username,
          password : password,
          password2: password2,
        })
      });

    } catch (e) {
      console.log(e);
    }
  }

}

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

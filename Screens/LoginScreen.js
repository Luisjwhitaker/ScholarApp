import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';

export default function LoginScreen() {
  const [username, setUsername] = useState('username');
  const [password, setPassword] = useState('password');

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
      </View>
      <View style={styles.buttonView}>
        <Button
          onPress={SubmittLogin}
          title="LogIn"
          color="#f194ff"
          accessibilityLabel="Log In button"
        />
      </View>
    </View>

  );

  async function SubmittLogin(){
    try {

      await fetch('https://webhook.site/3d0ffd20-2ba3-4b89-92cd-dc40d6eac827', {
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

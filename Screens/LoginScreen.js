import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';

export default LoginScreen = () => {
  return (
    <View style={styles.container}>
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
      </View>
      <View style={styles.buttonView}>
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
    fontFamily: "monospace",
  },
  buttonView: {
    marginBottom: 75,
    width: '80%',
  },
  baseText: {
    fontFamily: "Roboto",
  },
  titleText: {
    fontFamily: "monospace",
    fontSize: 60,
    marginTop: 150,
    fontWeight: "bold",
    textAlign: 'center',
  },

});

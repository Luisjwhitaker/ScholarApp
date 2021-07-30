import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';

export default LogActivityScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>Daily Log</Text>
        <Text style={styles.titleSubText}>Date today</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
            style={styles.inputWide}
            placeholder=" Adventure SLP"
            keyboardType="number-pad"
        />
        <TextInput
            style={styles.inputWide}
            placeholder=" Arena SLP"
            keyboardType="number-pad"
        />
        <TextInput
            style={styles.inputWide}
            placeholder=" Quest SLP"
            keyboardType="number-pad"
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          onPress={() => Alert.alert('Cannot Log SLP at this time')}
          title="Submit"
          color="#f194ff"
          accessibilityLabel="Submit button"
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
  titleText: {
    fontFamily: "monospace",
    fontSize: 60,
    marginTop: 50,
    fontWeight: "bold",
    textAlign: 'center',
  },
  titleSubText: {
    fontFamily: "monospace",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
  },

});

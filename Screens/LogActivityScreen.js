import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';

export default LogActivityScreen = () => {

  const [adventureSlp, setAdventureSlp] = useState('');
  const [arenaSlp, setArenaSlp] = useState('');
  const [questSlp, setQuestSlp] = useState('');

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
            onChangeText={(val) => setAdventureSlp(val)}
            keyboardType="number-pad"
        />
        <TextInput
            style={styles.inputWide}
            placeholder=" Arena SLP"
            onChangeText={(val) => setArenaSlp(val)}
            keyboardType="number-pad"
        />
        <TextInput
            style={styles.inputWide}
            placeholder=" Quest SLP"
            onChangeText={(val) => setQuestSlp(val)}
            keyboardType="number-pad"
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          onPress={SubmittLog}
          title="Submit"
          color="#f194ff"
          accessibilityLabel="Submit button"
        />
      </View>
    </View>

  );

  async function SubmittLog(){
    try {

      await fetch('https://webhook.site/3d0ffd20-2ba3-4b89-92cd-dc40d6eac827', {
        method:'post',
        mode:'no-cors',
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          user: 1,
          adventure_slp : adventureSlp,
          arena_slp : arenaSlp,
          quest_slp : questSlp,
          date_submitted: 'figure out date later',
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
  titleText: {
    fontFamily: "chalkboard-se-bold",
    fontSize: 60,
    marginTop: 50,
    textAlign: 'center',
  },
  titleSubText: {
    fontFamily: "chalkboard-se-bold",
    fontSize: 20,
    textAlign: 'center',
  },

});

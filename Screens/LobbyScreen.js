import React from 'react';
import { StyleSheet, View, Button, Alert, Text, TouchableOpacity} from 'react-native';

// navigation imports
import { NavigationContainer, useNavigation} from "@react-navigation/native";

export default LobbyScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>Welcome %namehere%</Text>
      </View>
      <View style={styles.buttonCluster}>
        <View style={styles.buttonAlignment}>
          <TouchableOpacity
            style={styles.buttonTouchable}
            onPress={() => navigation.navigate('LogActivityScreen')}
            underlayColor='#fff'>
              <Text style={styles.baseText}>Daily Logs</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonAlignment}>
          <TouchableOpacity
            style={styles.buttonTouchable}
            onPress={() => navigation.navigate('GuidesScreen')}
            underlayColor='#fff'>
              <Text style={styles.baseText}>Guides</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonAlignment}>
          <TouchableOpacity
            style={styles.buttonTouchable}
            onPress={() => navigation.navigate('AnnouncementsScreen')}
            underlayColor='#fff'>
              <Text style={styles.baseText}>Announcements</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonAlignment}>
          <TouchableOpacity
            style={styles.buttonTouchable}
            onPress={() => navigation.navigate('PreviousLogsScreen')}
            underlayColor='#fff'>
              <Text style={styles.baseText}>Previous Logs</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonAlignment}>
          <TouchableOpacity
            style={styles.buttonTouchable}
            onPress={() => navigation.navigate('CreditsScreen')}
            underlayColor='#fff'>
              <Text style={styles.baseText}>Credits</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonBottom}>
        <TouchableOpacity
          style={styles.buttonTouchableBottom}
          onPress={() => Alert.alert('Cannot Logout at this time, Please close app to do so')}
          underlayColor='#fff'>
            <Text style={styles.baseText}>Log Out</Text>
        </TouchableOpacity>
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
  titleText: {
    fontFamily: "chalkboard-se-bold",
    textAlign: 'center',
    fontSize: 60,
    marginTop: 50,
  },
  buttonBottom: {
    width: '80%',
    marginBottom: 75,
  },
  buttonAlignment: {
    marginBottom: 6,
  },
  buttonCluster: {
    width: '80%',
    marginBottom: 130,
  },
  buttonView: {
    marginBottom: 150,
    width: '80%',
    borderRadius: 20 ,
  },
  buttonTouchable: {
    marginBottom: 10,
    width: '100%',
    borderRadius: 20 ,
    fontFamily: "chalkboard-se-bold",
    backgroundColor: '#f2f2f2',
    borderWidth: 2,
  },
  buttonTouchableBottom: {
    marginBottom: 10,
    width: '100%',
    borderRadius: 20 ,
    fontFamily: "chalkboard-se-bold",
    backgroundColor: '#f2f2f2',
    borderWidth: 2,
  },
  baseText: {
    fontFamily: "chalkboard-se-bold",
    fontSize: 30,
    textAlign: 'center',
  },

});

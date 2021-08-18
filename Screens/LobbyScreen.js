import React from 'react';
import { StyleSheet, View, Button, Alert, Text,} from 'react-native';

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
          <Button
            onPress={() => navigation.navigate('LogActivityScreen')}
            title="Daily Logs"
            color="#f194ff"
            accessibilityLabel="Daily logs button"
          />
        </View>
        <View style={styles.buttonAlignment}>
          <Button
            onPress={() => navigation.navigate('GuidesScreen')}
            title="Guides"
            color="#f194ff"
            accessibilityLabel="Guides button"
          />
        </View>
        <View style={styles.buttonAlignment}>
          <Button
            onPress={() => navigation.navigate('AnnouncementsScreen')}
            title="Announcements"
            color="#f194ff"
            accessibilityLabel="Announcements button"
          />
        </View>
        <View style={styles.buttonAlignment}>
          <Button
            onPress={() => navigation.navigate('PreviousLogsScreen')}
            title="Previous Logs"
            color="#f194ff"
            accessibilityLabel="Previous Logs button"
          />
        </View>
        <View style={styles.buttonAlignment}>
          <Button
            onPress={() => navigation.navigate('CreditsScreen')}
            title="Credits"
            color="#f194ff"
            accessibilityLabel="Credits button"
          />
        </View>
      </View>
      <View style={styles.buttonBottom}>
        <Button
          onPress={() => Alert.alert('Cannot Logout at this time, Please close app to do so')}
          title="Log Out"
          color="#f194ff"
          accessibilityLabel="Log out Button"
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
    marginBottom: 150,
  },

});

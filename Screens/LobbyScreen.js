import React from 'react';
import { StyleSheet, View, Button, Alert, Text,} from 'react-native';

export default LobbyScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>Welcome %namehere%</Text>
      </View>
      <View style={styles.buttonCluster}>
        <View style={styles.buttonAlignment}>
          <Button
            onPress={() => Alert.alert('Cannot Submitt Logs at this time')}
            title="Daily Logs"
            color="#f194ff"
            accessibilityLabel="Daily logs button"
          />
        </View>
        <View style={styles.buttonAlignment}>
          <Button
            onPress={() => Alert.alert('Cannot view Guides at this time')}
            title="Guides"
            color="#f194ff"
            accessibilityLabel="Guides button"
          />
        </View>
        <View style={styles.buttonAlignment}>
          <Button
            onPress={() => Alert.alert('Cannot view Announcements at this time')}
            title="Announcements"
            color="#f194ff"
            accessibilityLabel="Announcements button"
          />
        </View>
      </View>
      <View style={styles.buttonBottom}>
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
  titleText: {
    fontFamily: "monospace",
    fontWeight: "bold",
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

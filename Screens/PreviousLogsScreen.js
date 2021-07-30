import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet, Text, View,} from 'react-native';

export default PreviousLogsScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getLogs = async () => {
    try {
      const response = await fetch('http://192.168.100.11:100/api/task-list/');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getLogs();
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View key={id}>
              <Text style={styles.logText}>
                ------------------------------------{"\n"}
                User : {item.user},{"\n"}
                Adventure slp: {item.adventure_slp},{"\n"}
                Arena slp: {item.arena_slp},{"\n"}
                Quest slp: {item.quest_slp},
              </Text>
            </View>
          )}
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
    width: '100%',
  },
  subContainer: {
    backgroundColor: '#ffe6d9',
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 5,
  },
  logText: {
    width: '100%',
    fontFamily: "Roboto",
    fontSize: 20,
  },
});

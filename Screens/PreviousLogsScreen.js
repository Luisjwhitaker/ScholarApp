import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet, Text, View,} from 'react-native';

export default PreviousLogsScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
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
    getMovies();
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>
             User : {item.user},{"\n"}
            Adventure slp: {item.adventure_slp},{"\n"}
            Arena slp: {item.arena_slp},{"\n"}
            Quest slp: {item.quest_slp},{"\n"}{"\n"}
            </Text>
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
  },
});

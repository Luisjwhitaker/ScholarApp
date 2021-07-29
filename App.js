import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
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
        <Button
          onPress={() => Alert.alert('Cannot Log in at this time')}
          title="LogIn"
          color="#f194ff"
          accessibilityLabel="Log In button"
        />
      </View>
      <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <Text>{item.title}, {item.releaseYear}</Text>
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
  inputView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  inputWide: {
    height: 40,
    width: '85%',
    margin: 12,
    borderWidth: 1,
    fontFamily: "monospace",
  },
  baseText: {
    fontFamily: "Roboto",
  },
  titleText: {
    fontFamily: "monospace",
    fontSize: 60,
    marginBottom: 50,
    marginTop: 50,
    fontWeight: "bold"
  },

});

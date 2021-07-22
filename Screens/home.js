import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

function Home(){
  return(
    <Card style = {style.cardStyle}
    <Text>Hello From Home Screen</Text>
  )
}

const styles = StyleSheet.create({
  cardStyle: {
    flex: 1,
    backgroundColor: '#ffe6d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home

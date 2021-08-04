import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';

export default class TestPostScreen extends React.Component{

  const [username, setUsername] = useState('username');
  const [password, setPassword] = useState('password');

  async function SubmittLogin(){
    try {

      await fetch('https://webhook.site/3d0ffd20-2ba3-4b89-92cd-dc40d6eac827', {
        method:'post',
        mode:'no-cors',
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          username: username,
          password : password,
          user : 'luis',
          adventure_slp : "1",
          arena_slp : "2",
          quest_slp : "3",
        })
      });

    } catch (e) {
      console.log(e);
    }
  }

  render(){
    return(
      <View><Text></Text></View>
    );
  }
}

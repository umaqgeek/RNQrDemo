import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>QR Code Demo</Text>
        <View>
          <Text>Enter username</Text>
          <TextInput style={styles.username} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: '10%',
    backgroundColor: 'white'
  },
  text: {
    fontSize: 30,
    backgroundColor: 'aliceblue',
    padding: 20,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1
  },
  username: {
    padding: 10,
    width: 30,
    borderWidth: 1
  }
});

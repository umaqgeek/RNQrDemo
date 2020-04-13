import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';

export default class RegisterPage1Screen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>QR Information</Text>
        <TextInput
          placeholder='Enter booking name here'
          style={styles.inputs} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('RegisterPage2')}
          style={styles.button}>
          <Text style={styles.buttonText}>Press me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    fontSize: 30,
    marginBottom: 30
  },
  inputs: {
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
    width: 300
  },
  button: {
    marginTop: 50,
    borderWidth: 1,
    borderRadius: 5,
    width: 100,
    padding: 10
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center'
  }
});

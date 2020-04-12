import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };

    this.onHandler = this.onHandler.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onHandler = (val, name) => {
    this.setState({
      ...this.state,
      [name]: val
    });
  }

  onLogin = () => {
    var self = this;
    if (this.state.username === '') {
      alert('Do not leave blank for username!');
      return;
    }
    AsyncStorage.setItem('username', this.state.username)
    .then(() => {
      self.props.navigation.navigate('Drawer');
    })
    .catch(err => alert('Ops! Error..'+err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>QR Code Demo</Text>
        <View style={{marginTop: 50, alignItems: 'center'}}>
          <TextInput
            style={styles.username}
            placeholder='Enter your username here'
            value={this.state.username}
            onChangeText={(val) => this.onHandler(val, 'username')} />
          <TouchableOpacity
            onPress={this.onLogin}
            style={styles.button}>
            <Text style={{color: 'white'}}>Enter</Text>
          </TouchableOpacity>
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
    borderTopWidth: 1,
    width: '100%',
    textAlign: 'center'
  },
  username: {
    padding: 10,
    width: 300,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    borderColor: 'rgba(0, 0, 0, 0.8)'
  },
  button: {
    marginTop: 50,
    padding: 10,
    width: 150,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 255, 0.8)',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.8)'
  }
});

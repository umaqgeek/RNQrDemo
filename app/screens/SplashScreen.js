import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      greetingMsg: ''
    };
  }

  componentDidMount() {
    var self = this;
    setTimeout(() => {
      this.setState({
        ...this.state,
        greetingMsg: 'Greeting, Earthling ..'
      }, () => {
        setTimeout(() => {
          self.props.navigation.navigate('Login');
        }, 1500);
      })
    }, 500);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>QR Code Demo</Text>
        <Text style={styles.greetingMsg}>{this.state.greetingMsg}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: '50%',
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
  greetingMsg: {
    marginTop: 20,
    fontSize: 15
  }
});

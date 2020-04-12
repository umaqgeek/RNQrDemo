import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class RegisterPage1Screen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Name</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('RegisterPage2')}>
          <Text>Press me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});

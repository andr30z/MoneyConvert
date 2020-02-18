import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.viewInit}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <Text>Home</Text>
      </View>
    );
  }

}

const style = StyleSheet.create({
  viewInit: {
    fontSize: 14,
    color: 'red'
  },
  container: {
    flex: 1,
    backgroundColor: '#007531',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
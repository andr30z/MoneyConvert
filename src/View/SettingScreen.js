import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SettingScreen extends Component {
  render() {
    return (
      <View style={style.viewInit}>
        <Text>Criado por @Andr3zinh000 </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  viewInit: {
    fontSize: 14,
    color: 'red',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#007531'
  }
});
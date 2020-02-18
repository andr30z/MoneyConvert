import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Picker } from 'react-native';


const ConvertController = (props) => {

  return (
    props.data.map((item, id) => (
      <Text> {item} </Text>

    )));
}



export default ConvertController;
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./src/View/Home";
import SettingScreen from "./src/View/SettingScreen";
import ConvertScreen from "./src/View/Convert";
//
const btmNav = createBottomTabNavigator();
function Inicial() {
  return (
    <NavigationContainer>
      <btmNav.Navigator
        initialRouteName='Home'
        tabBarOptions={
          { style: styles.barStyle }
        }

      >
        <btmNav.Screen name="Home" component={HomeScreen} />
        <btmNav.Screen name="ConvertScreen" component={ConvertScreen} />
        <btmNav.Screen name="Settings" component={SettingScreen} />
      </btmNav.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: 'black',
    borderTopWidth:0
  }
});

export default Inicial;
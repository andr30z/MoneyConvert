import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { TopNav } from './src/routes/routes';
import * as SplashScreen from 'expo-splash-screen';

import BackgroundSvg from './src/components/BackgroungSvg/BackgroundSvg.component';

import { Ubuntu_700Bold, Ubuntu_400Regular, useFonts } from "@expo-google-fonts/ubuntu";
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
// import "intl";
// import { Platform } from "react-native";
// import "intl/locale-data/jsonp/en";

// if (Platform.OS === "android") {
//     // Veja https://github.com/expo/expo/issues/6536 para esse problema.
//     if (typeof (Intl).__disableRegExpRestore === "function") {
//         (Intl).__disableRegExpRestore();
//     }
// }

const App = () => {
  const [fontsloaded] = useFonts({
    Ubuntu_400Regular, Ubuntu_700Bold, Roboto_400Regular, Roboto_500Medium
  });

  useEffect(() => {
    try {
      async function hide() {
        await SplashScreen.preventAutoHideAsync();
      }
      hide();
    } catch (error) {
      console.warn(error)
    }
  }, [])

  if (fontsloaded) {
    try {
      SplashScreen.hideAsync();
    } catch (error) {
      console.warn(error)
    }
  }


  return !fontsloaded ?
    null
    :
    <>
        <TopNav />
    </>
}

export default App;

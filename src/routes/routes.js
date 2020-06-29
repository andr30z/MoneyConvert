import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { FontAwesome5 } from '@expo/vector-icons';

import Currency from '../pages/Currency/Currency.page';
import Convert from '../pages/Convert/Convert.page';
import Settings from '../pages/Setting/Settings.page';

import ApiProvider from '../contexts/Api.context';
import CurrencyDetail from '../pages/CurrencyDetail/Currency-Detail.page';
import BackgroundSvg from '../components/BackgroungSvg/BackgroundSvg.component';


const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const StackNav = () => (
    <Stack.Navigator
        headerMode="none"
        initialRouteName="Currency"
    >
        <Stack.Screen name="Currency" component={Currency} />
        <Stack.Screen name="CurrencyDetail" component={CurrencyDetail} />
    </Stack.Navigator>
);

export const TopNav = () => {
    return (
        <ApiProvider>
            <NavigationContainer>
                <Tab.Navigator
                    lazy
                    initialRouteName="Stack"
                    swipeEnabled={false}
                    sceneContainerStyle={styles.backgroundNav}
                    tabBarOptions={{
                        activeTintColor: "#74D8E7",
                        inactiveTintColor: 'white',
                        showIcon: true,
                        iconStyle: {
                            width: 31,
                            height: 25,
                            alignItems: 'center',
                            justifyContent: 'center'
                        },
                        showLabel: false,
                        indicatorStyle: { backgroundColor: '#7040CF' },
                        pressColor: "#74D8E7",
                        style: {
                            backgroundColor: '#7040CF',
                            paddingTop: 5 + Constants.statusBarHeight,
                            paddingBottom: 10,
                            shadowColor: "transparent",
                            borderBottomColor: '#7040CF',
                            elevation: 0,
                        },
                    }}
                >

                    <Tab.Screen
                        options={{
                            tabBarIcon: ({ focused, color }) => (
                                <FontAwesome5 name="cash-register" size={!focused ? 25 : 30} color={color} />
                            )
                        }}
                        name="Convert"
                        component={Convert} />
                    <Tab.Screen
                        options={{
                            tabBarIcon: ({ focused, color }) => (
                                <FontAwesome5 size={!focused ? 25 : 30} name="layer-group" color={color} />
                            )
                        }}
                        name="Stack"
                        component={StackNav} />
                    <Tab.Screen
                        options={{
                            tabBarIcon: ({ focused, color }) => (
                                <FontAwesome5 name="align-justify" size={!focused ? 25 : 30} color={color} />
                            )
                        }}
                        name="Settings"
                        component={Settings} />
                </Tab.Navigator>

            </NavigationContainer>
        </ApiProvider>
    );
}



const styles = StyleSheet.create({
    backgroundNav: {
        backgroundColor: '#7040CF',
        zIndex: 1
    },
    icon: {
        color: "rgb(170, 207, 202)",
    }
});

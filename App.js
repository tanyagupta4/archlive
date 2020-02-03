import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import 'react-native-gesture-handler'
import HomeScreen from './Screens/home.js'
import Map from './Screens/Maps.js'
import Information from './Screens/Information.js'

type Props = {};

const mainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Map: Map,
    Information: Information,
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(mainStack);

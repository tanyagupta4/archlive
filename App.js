import React, {Component, useEffect } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import 'react-native-gesture-handler'

import SplashScreen from 'react-native-splash-screen'
import HomeScreen from './Screens/HomeScreen.js'
import AboutScreen from './Screens/AboutScreen.js'
import TourScreen from './Screens/TourScreen.js'
import TourInformationScreen from './Screens/TourInformationScreen.js'
import ExploreEvents from './Screens/ExploreEvents.js'
import ExploreScreen from './Screens/ExploreScreen.js'
import ExploreInformationScreen from './Screens/ExploreInformationScreen.js'

import PeytonRoad from './Screens/ExplorePages/PeytonRoad.js'
import CivilRights from './Screens/ExplorePages/CivilRights.js'
import LesterMaddox from './Screens/ExplorePages/LesterMaddox.js'
import Stadium from './Screens/ExplorePages/Stadium.js'
import SummerhillRiot from './Screens/ExplorePages/SummerhillRiot.js'

import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'


type Props = {};

//insert any other navigators here

const exploreStack = createStackNavigator(
  {
    ExploreEvents: ExploreEvents,
    ExploreScreen: ExploreScreen,
    ExploreInformationScreen: ExploreInformationScreen,

    PeytonRoad: PeytonRoad,
    CivilRights: CivilRights,
    LesterMaddox: LesterMaddox,
    Stadium: Stadium,
    SummerhillRiot: SummerhillRiot
  },
  {
    initialRouteName: 'ExploreScreen',
    headerMode: () => null
  },
);

const tourStack = createStackNavigator(
  {
    TourScreen: TourScreen,
    TourInformationScreen: TourInformationScreen,
  },
  {
    initialRouteName: 'TourScreen',
    headerMode: () => null
  },
);

const homeTabs = createMaterialTopTabNavigator(
  {
    HomeScreen: HomeScreen,
    AboutScreen: AboutScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    swipeEnabled: true,
    headerMode: () => null,
    tabBarOptions: {
      style: { display: "none" }
    }
  }
);

const main = createStackNavigator({
  homeTabs,
  tourStack,
  exploreStack,

  },
  {
    headerMode: () => null
  },
);


export default createAppContainer(main);

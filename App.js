import React, {Component, useEffect } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import 'react-native-gesture-handler'

//initial launch pages
import SplashScreen from 'react-native-splash-screen'
import HomeScreen from './Screens/HomeScreen.js'
import AboutScreen from './Screens/AboutScreen.js'

//Tour
import TourScreen from './Screens/Tour/TourScreen.js'
import TourInformationScreen from './Screens/Tour/TourInformationScreen.js'
import TourScreen2 from './Screens/Tour/TourScreen2.js'
import TourInformationScreen2 from './Screens/Tour/TourInformationScreen2.js'

//Explore
import Events from './Screens/Explore/Events.js'
import ExploreMapCR from './Screens/Explore/ExploreMapCR.js'
import ExploreMapFCS from './Screens/Explore/ExploreMapFCS.js'
import ExploreMapLM from './Screens/Explore/ExploreMapLM.js'
import ExploreMapPR from './Screens/Explore/ExploreMapPR.js'
import ExploreMapSR from './Screens/Explore/ExploreMapSR.js'
import ExploreInfo from './Screens/Explore/ExploreInfo.js'

//ExploreSubPages
import PeytonRoad from './Screens/ExploreSubPages/PeytonRoad.js'
import CivilRights from './Screens/ExploreSubPages/CivilRights.js'
import LesterMaddox from './Screens/ExploreSubPages/LesterMaddox.js'
import Stadium from './Screens/ExploreSubPages/Stadium.js'
import SummerhillRiot from './Screens/ExploreSubPages/SummerhillRiot.js'

import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'


type Props = {};

//insert any other navigators here

const exploreStack = createStackNavigator(
  {
    Events: Events,
    ExploreMapCR: ExploreMapCR,
    ExploreMapFCS: ExploreMapFCS,
    ExploreMapLM: ExploreMapLM,
    ExploreMapPR: ExploreMapPR,
    ExploreMapSR: ExploreMapSR,
    ExploreInfo: ExploreInfo,

    PeytonRoad: PeytonRoad,
    CivilRights: CivilRights,
    LesterMaddox: LesterMaddox,
    Stadium: Stadium,
    SummerhillRiot: SummerhillRiot
  },
  {
    initialRouteName: 'Events',
    headerMode: () => null
  },
);

const tourStack = createStackNavigator(
  {
    TourScreen: TourScreen,
    TourInformationScreen: TourInformationScreen,
    TourScreen2: TourScreen2,
    TourInformationScreen2: TourInformationScreen2,
  },
  {
    initialRouteName: 'TourScreen',
    headerMode: () => null
  },
);

const homeTabs = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    AboutScreen: AboutScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: () => null
  },
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

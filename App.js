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

//Explore
import Events from './Screens/Explore/Events.js'
import ExploreMap1 from './Screens/Explore/ExploreMap1.js'
import ExploreMap2 from './Screens/Explore/ExploreMap2.js'
import ExploreMap3 from './Screens/Explore/ExploreMap3.js'
import ExploreMap4 from './Screens/Explore/ExploreMap4.js'
import ExploreMap5 from './Screens/Explore/ExploreMap5.js'
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
    ExploreMap1: ExploreMap1,
    ExploreMap2: ExploreMap2,
    ExploreMap3: ExploreMap3,
    ExploreMap4: ExploreMap4,
    ExploreMap5: ExploreMap5,
    ExploreInfo: ExploreInfo,

    PeytonRoad: PeytonRoad,
    CivilRights: CivilRights,
    LesterMaddox: LesterMaddox,
    Stadium: Stadium,
    SummerhillRiot: SummerhillRiot
  },
  {
    initialRouteName: 'ExploreMap',
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

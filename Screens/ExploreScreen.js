import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { testArray } from './ExploreEvents.js';
import Carousel from 'react-native-snap-carousel';
import MapView from "react-native-maps";

const Images = [
  require('../Images/IvanAllen3.png'),
  require('../Images/IvanAllen3.png'),
  require('../Images/IvanAllen3.png'),
  require('../Images/IvanAllen3.png')
]

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 2.8;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default class screens extends Component<Props> {

  render() {
    return (<View>
    <Text>test</Text>
    </View>);
  }


}

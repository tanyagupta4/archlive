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

import Carousel from 'react-native-snap-carousel';

const { width, height } = Dimensions.get("window");

const testArray = [
    {
        title: "summerhill",
    },
    {
        title: "dummy",
    },
]



export default class ExploreEvents extends Component<Props> {

    _renderItem = ({item, index}) => {
        return(
            <View style={styles.slide}>
                <Text>{item.title}</Text>
            </View>
        );
    }

    render() {
        return (<Carousel
          data={testArray}
          sliderWidth = {width}
          itemWidth = {width - 50}
          renderItem={this._renderItem}
          />
          )
      }
}

const styles = StyleSheet.create({
	slide: {
        flex: 1,
        color: 'green'
        height: 100,
	}
})
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
  state = {
    markers: [
      {
        coordinate: {
          latitude: 33.73981,
          longitude: -84.38973,
        },
        title: "Fulton County Stadium",
        description: "Summary",
        image: Images[0],
      },
      {
        coordinate: {
          latitude: 33.73768,
          longitude: -84.38688,
        },
        title: "Summerhill neighborhood/Summerhill Race Riot",
        description: "Summary",
        image: Images[1],
      },
      {
        coordinate: {
          latitude: 33.77396,
          longitude: -84.40425,
        },
        title: "Ivan Allen College of Liberal Arts",
        description: "Summary",
        image: Images[2],
      },
      {
        coordinate: {
          latitude: 33.78359,
          longitude: -84.40543,
        },
        title: "Hemphill Avenue Northwest",
        description: "Summary",
        image: Images[3],
      },
    ],
    region: {
		latitude: 33.7420,
		longitude: -84.3880,
		latitudeDelta: 0.120,
		longitudeDelta: 0.096,
    },
  };

  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }
  componentDidMount() {
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / width + 0.3); // animate 30% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index != index) {
          this.index = index;
          const { coordinate } = this.state.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  }

  render() {
    const interpolations = this.state.markers.map((marker, index) => {
      const inputRange = [
		(index-1) * width,
		index * width,
		(index+1) * width,
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [0.5, 10, 0.5],
        extrapolate: "clamp",
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.3, 1.5, 0.3],
        extrapolate: "clamp",
      });
      return { scale, opacity };
    });

    return (
      <View style={styles.container}>
        <MapView
          ref={map => this.map = map}
          initialRegion={this.state.region}
          style={styles.container}
        >
          {this.state.markers.map((marker, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            };
            const opacityStyle = {
              opacity: interpolations[index].opacity,
            };
            return (
              <MapView.Marker key={index} coordinate={marker.coordinate} onPress={() => {
				this.props.navigation.navigate("ExploreInformationScreen", {location: marker.location});}}>
                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                  <Animated.View style={[styles.ring, scaleStyle]} />
                  <View style={styles.marker} />
                </Animated.View>
              </MapView.Marker>
            );
          })}
        </MapView>
        <Animated.ScrollView
          horizontal
		  scrollEventThrottle={0}
		  decelerationRate={0}
		  snapToAlignment={"center"}
          showsHorizontalScrollIndicator={false}
          snapToInterval={width}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.markers.map((marker, index) => (
            <View style={styles.card} key={index}>
              <Image 
                source={marker.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {marker.description}
                </Text>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "seashell",
    marginHorizontal: (width - CARD_WIDTH)/2,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
});

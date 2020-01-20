import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, PixelRatio } from 'react-native';
import MapView from 'react-native-maps';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const mapPaddingBottom = screen.heigh * 0.1;
const mapPaddingTop = screen.height * 0.1;


export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsTraffic={false}
          region={{
            latitude: 33.7500,
            longitude: -84.3880,
            latitudeDelta: 0.030,
            longitudeDelta: 0.024,
        }}>
     </MapView>
   </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  border: {
    borderWidth: 10,
    borderColor: '#faa',
    borderBottomWidth: 10,
    borderBottomColor: '#faa',
    borderTopWidth: 10,
    borderTopColor: '#faa',
    borderLeftWidth: 10,
    borderLeftColor: '#faa',
    borderRightWidth: 10,
    borderRightColor: '#faa',
  }
 });

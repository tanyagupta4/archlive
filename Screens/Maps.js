import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'


const instructions = Platform.select({
  ios: 'ios Home',
  android: 'Android home',
});

type Props = {};

export default class Maps extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsTraffic={false}
          showsUserLocation={true}
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
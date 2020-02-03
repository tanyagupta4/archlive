import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'


const instructions = Platform.select({
  ios: 'ios Home',
  android: 'Android home',
});

type Props = {};

export default class Information extends Component<Props> {
  render() {
     const location = this.props.navigation.getParam('location', 'nothing sent')
    return (
      <View style={styles.container}>
    <Text> {location} </Text>
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

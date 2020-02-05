import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import ImageSlider from 'react-native-image-slider';


const instructions = Platform.select({
  ios: 'ios Home',
  android: 'Android home',
});

type Props = {};

export default class Information extends Component<Props> {
  render() {
    const images = [
        require('../Images/summerhill_riot.jpg'),
    ];
     const location = this.props.navigation.getParam('location', 'nothing sent')
    return (
      <View style={styles.container}>
    <Text style={styles.title}>{location} </Text>
    <ImageSlider
        style={styles.pic}
        images={images}
    />
    <Text style={styles.info}>Date: 1966 September 6</Text>
    <Text style={styles.info}> Description: View of part of the crowd gathered in the Summerhill 
      neighborhood of Atlanta, Georgia during a riot, including people identified 
      as members of the Student Nonviolent Coordinating Committee speaking into 
      microphones, while Atlanta Mayor Ivan Allen, Jr. (not pictured) attempts 
      to lead people to Atlanta Stadium to calm the situation.</Text>
   </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: '#EED000',
    fontWeight: 'bold',
    textAlignVertical: 'top',
  },
  pic: {
    marginBottom: 100,
    width: 400,
    height: 400,
    top: 0,
  },
  info: {
    textAlign: 'left',
    margin: 10,
    top: -200,
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
 });

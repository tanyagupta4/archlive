import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import ImageSlider from 'react-native-image-slider';


const instructions = Platform.select({
  ios: 'ios Home',
  android: 'Android home',
});

//list of events
//can add multiple images within images list
//could be a cool idea to do a slideshow of images on information page
const events = [
  {
    location : "Summerhill",
    date : "Date: 1966 September 6",
    description : "Description: View of part of the crowd gathered in the Summerhill neighborhood of Atlanta, Georgia during a riot, including people identified as members of the Student Nonviolent Coordinating Committee speaking into microphones, while Atlanta Mayor Ivan Allen, Jr. (not pictured) attempts to lead people to Atlanta Stadium to calm the situation.",
    images : [require('../Images/summerhill_riot.jpg')],
  },
]
  
type Props = {};

//initalize the selectedLocation to empty location
let selectedLocation = {
  location : "empty",
  date : "date not yet added",
  description: "location & description not yet added",
  images : [require('../Images/nophoto.png')],
} 

//in case we don't have the location entered yet
const emptyLocation = {
  location : "empty",
  date : "date not yet added",
  description: "location & description not yet added",
  images : [require('../Images/nophoto.png')],
} 

export default class TourInformationScreen extends Component<Props> {
  
  render() {
    //iterating through event list and finding the location we want or else it'll be set to empty state
    let location = this.props.navigation.getParam('location');
    console.log(location);
    for (let i = 0, l = events.length; i < l; i++) {
      if (events[i].location == location) {
        selectedLocation = { 
          location: events[i].location,
          date: events[i].date,
          description: events[i].description,
          images: events[i].images,
        }
      } else {
        selectedLocation = emptyLocation;
      }
    }
    //rendering of each page
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{selectedLocation.location} </Text>
          <ImageSlider
            style={styles.pic}
            images={selectedLocation.images}/>
          <Text style={styles.info}>{selectedLocation.date}</Text>
        <Text style={styles.info}>{selectedLocation.description}</Text>
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

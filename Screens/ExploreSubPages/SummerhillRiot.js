import React, {Component, useEffect } from 'react';
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
    Button,
  } from "react-native";

export default class SummerhillRiot extends Component<Props> {


    render() {
      return (
        <ScrollView scrollEventThrottle={16}>
        <View style={{ flex: 1, backgroundColor: "white", paddingTop: 50 }}>
          <Text
            style={{
              fontSize: 48,
              fontWeight: "700",
              paddingHorizontal: 20,
              textAlign: 'center',
              color: "#6e6262"
            }}
          >
            Summerhill Riot
          </Text>
          <Image source={require('../../Images/riot.jpg')} style={{ paddingHorizontal: 20, paddingTop: 10}}/>
          <Text style={{
            fontSize: 20,
            fontWeight: "700",
            paddingHorizontal: 20,
            paddingTop: 5,
            color: 'black',
            textShadowColor: '#f0eded',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10,
            textAlign: 'center',
          }}>
          What happened on September 6, 1966 in the Summerhill neighborhood of Atl?
          </Text>
          <Text style={{
            paddingTop: 10,
            paddingHorizontal: 15,
            color: "#6e6262",
            fontSize: 14
          }}>
          The Summerhill Riot is a series of events that began on September 6, 1966 in the majority black neighborhood of Summerhill following the police shooting of an unarmed black man, Harold Prather. A thousand people gathered together in response to the shooting to protest longterm local problems regarding inequities, such as discriminatory policing, poor housing, inadequate public services, and the recent construction of the Atlanta-Fulton County Stadium on the edge of Summerhill. The Student Nonviolent Coordinating Committee became involved when members of the organization joined the protests. A heavy police presence was met with resistance by protestors, which resulted in the image of a "riot." As the sitatuion escalated, Mayor Allen visited the site to address protestors directly. Allen placed blame for the events directly on SNCC.
          </Text>
          <View style ={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'}}>

          <TouchableOpacity style={styles.SubmitButtonStyle}>
          <Text
          style={styles.TextStyle}>
          People
          </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SubmitButtonStyle}>
          <Text
          style={styles.TextStyle}>
          Letters
          </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SubmitButtonStyle}>
          <Text
          style={styles.TextStyle}>
          Documents
          </Text>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
    }

}

const styles = {

  SubmitButtonStyle: {
    marginTop:15,
      paddingTop:15,
      paddingBottom:15,
      paddingLeft:30,
      paddingRight:30,
      backgroundColor:'#6a7fa1',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff'
},
TextStyle:{
     color:'white',
     fontWeight: "400",
     textAlign:'center',
 },
}

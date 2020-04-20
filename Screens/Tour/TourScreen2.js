import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import MapView,{ PROVIDER_GOOGLE, OverlayComponent } from 'react-native-maps'

const instructions = Platform.select({
  ios: 'ios Home',
  android: 'Android home',
});

type Props = {};


const markers = [
  {
    "name" : "Summerhill neighborhood/Summerhill Race Riot",
    "text" : "Summary",
    "longlat" : [33.73768, -84.38688],
    "location" : "Summerhill Riot",
  },
  {
    "name" : "Fulton County Stadium",
    "text" : "Summary",
    "longlat" : [33.73981, -84.38973],
    "location" : "Fulton County Stadium",
  },
  //
  // {
  //   "name" : "Ivan Allen College of Liberal Arts",
  //   "text" : "Summary",
  //   "longlat" : [33.77396, -84.40425],
  //   "location" : "empty",
  //
  // },
  //
  // {
  //   "name" : "Hemphill Avenue Northwest",
  //   "text" : "Summary",
  //   "longlat" : [33.78359, -84.40543],
  //   "location" : "empty",
  //
  // },
  //
  // {
  //   "name" : "National Center for Civil and Human Rights",
  //   "text" : "Summary",
  //   "longlat" : [33.76402, -84.39307],
	//   "location" : "empty",
  // },
  //
  //
  // {
  //   "name" : "International Civil Rights Walk of Fame",
  //   "text" : "Summary",
  //   "longlat" : [33.75704, -84.37333],
	//   "location" : "empty",
  // },
  //
  //
  // {
  //   "name" : "Ebenezer Baptist Church",
  //   "text" : "Summary",
  //   "longlat" : [33.75537, -84.3742],
	//   "location" : "empty",
  // },
  //
  // {
  //   "name" : "Sweet Auburn",
  //   "text" : "Summary",
  //   "longlat" : [33.75378, -84.37654],
	//   "location" : "empty",
  // },
  //
  // {
  //   "name" : "SNCC Headquarters",
  //   "text" : "Summary",
  //   "longlat" : [33.75109, -84.39916],
	//   "location" : "empty",
  // },
  //
  // {
  //   "name" : "Peyton Road Wall",
  //   "text" : "Summary",
  //   "longlat" : [33.74796, -84.4745],
	//   "location" : "empty",
  // },
  //
  // {
  //   "name" : "Proctor Creek",
  //   "text" : "Summary",
  //   "longlat" : [33.77709, -84.4424],
	//   "location" : "empty",
  // },
  //
  // {
  //   "name" : "Perry Homes Community",
  //   "text" : "Summary",
  //   "longlat" : [33.79341, -84.4527],
	//   "location" : "empty",
  // },
  //
  // {
  //   "name" : "Ivan Allen Jr. Residence",
  //   "text" : "Summary",
  //   "longlat" : [33.82559, -84.38771],
	//   "location" : "empty",
  // },
  //
  // {
  //   "name" : "Atlanta History Center",
  //   "text" : "Summary",
  //   "longlat" : [33.84218, -84.38598],
	//   "location" : "empty",
  // },
  //
  // {
  //   "name" : "East Point Transit Station",
  //   "text" : "Summary",
  //   "longlat" : [33.67742, -84.44054],
	//   "location" : "empty",
  // },
];

const markerRef = null;

export default class TourScreen2 extends Component<Props> {


  constructor(props) {
    super(props);
    this.state = {
      showSettings: false,
      tour: {
          latitude: 33.73768,
          longitude: -84.38684,
          latitudeDelta: 0.07,
          longitudeDelta: 0.05,
        }
      };
  }

  setMarkerRef = (ref) => {
    this.marker = ref
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          loadingEnabled = {true}
          ref = {(ref)=>this.mapView=ref}
          style={styles.map}
          provider= {PROVIDER_GOOGLE}
          showsUserLocation={true}
          initialRegion={this.state.tour}
          onRegionChangeComplete={() => this.marker.showCallout()}
          scrollEnabled = {false}
        >


		{markers.map((marker, i) =>
      <MapView.Marker
      pinColor = '#73cdeb'
      ref={this.setMarkerRef}
      key={i}
			coordinate={{latitude: marker.longlat[0],
			            longitude: marker.longlat[1]}}>

				<MapView.Callout
          style ={styles.SubmitButtonStyle}
          tooltip = {true}
					onPress={() => {
						this.props.navigation.navigate("TourInformationScreen2", {location: marker.location});
						return;
					}}>
          <TouchableOpacity >
          <Text
          style={styles.header}>
          {marker.name}
          </Text>
          <View style={{width: 300, flexDirection:'row', flex: 1, flexWrap: 'wrap'}}>
          <Text>
          Stop number 2! Stop 1 and 2 are related.. click to learn more!
          </Text>
          </View>
          </TouchableOpacity>
				</MapView.Callout>
			</MapView.Marker>
    )}
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
  header: {
	fontWeight: 'bold',
  textAlign: "center",
  marginBottom: 100,

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
  },
  overlay: {
  position: 'absolute',
  bottom: 50,
  backgroundColor: 'rgba(255, 255, 255, 1)',
},
  calloutStyle: {
    backgroundColor: '#597b91',
     color: 'black',
     textAlign: 'center',
  },
  SubmitButtonStyle: {
      paddingTop:10,
      paddingBottom:30,
      paddingLeft:10,
      paddingRight:10,
      backgroundColor:'#73cdeb',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff',
      marginLeft: 20,
},
 });

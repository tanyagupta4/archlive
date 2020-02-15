import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
import { NavigationActions, withOrientation } from 'react-navigation'

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const mapPaddingBottom = screen.height * 0.01;
const mapPaddingTop = screen.height * 0.65;
const mapPaddingLeft = screen.width * 0.05;

const width = Dimensions.get("window").width;

export default class AboutScreen extends Component<Props> {

render() {
		return(
			<View style={styles.container}>
			<ImageBackground source={require('../Images/IvanAllenRunThisCity.png')} style={styles.imageBackground}>
				<Text style={styles.placeholder}>Two paragraphs here about Ivan Allen/the archives. Details about each tour.</Text>
					<View style={styles.transparentTour}></View>
						<TouchableOpacity style={styles.TourButton} activeOpacity={0.3} onPress={()=> this.props.navigation.navigate(NavigationActions.navigate({
								routeName: 'tourStack',
								action: NavigationActions.navigate({ routeName: 'TourScreen' })
								}))}>
								<Text style={styles.guidedText}>Take our guided tour!</Text>
						</TouchableOpacity>
					<View style={styles.transparentGuide}></View>
						<TouchableOpacity style={styles.ExploreButton} activeOpacity={0.3} onPress={()=> this.props.navigation.navigate(NavigationActions.navigate({
							routeName: 'exploreStack',
							action: NavigationActions.navigate({ routeName: 'ExploreScreen' })
							}))}>
								<Text style={styles.tourText}>Explore on your own!</Text>
						</TouchableOpacity>
			</ImageBackground>
			</View>
		);
}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
	},
	placeholder: {
		fontSize: 22,	
		color: 'white',
		backgroundColor: 'black',
		opacity: 0.7,
	},
	guidedText: {
		fontSize: 25,
    color: 'white',
    fontFamily: 'didot',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
	},
	tourText: {
		fontSize: 25,
    color: 'white',
    fontFamily: 'didot',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
	},
	imageBackground: {
		width: '100%',
		height: '100%',
	},
	TourButton: {
		position: 'absolute',
		top: mapPaddingTop,
		left: width/2 - 125,
		height: 50,
		width: 250,
	},
	ExploreButton: {
		position: 'absolute',
		top: mapPaddingTop * 1.12,
		left: width/2 - 125,
		height: 50,
		width: 250,
	},
	transparentTour: {
		position: 'absolute',
		top: mapPaddingTop,
		left: width/2 - 130,
		height: 40,
		width: 250,
		backgroundColor: 'black',
		opacity: 0.4,
	},
	transparentGuide: {
		position: 'absolute',
		top: mapPaddingTop * 1.12,
		left: width/2 - 130,
		height: 40,
		width: 250,
		backgroundColor: 'black',
		opacity: 0.4,
	},
});


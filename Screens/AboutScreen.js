import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class AboutScreen extends Component<Props> {

	render() {
			return(
					<View style={styles.Screen}>
							<Text>Hi. Two paragraphs here about Ivan Allen/the archives. Details about each tour.</Text>
							<TouchableOpacity style={styles.TourButton} activeOpacity={0.3} onPress={()=> this.props.navigation.navigate(NavigationActions.navigate({
									routeName: 'tourStack',
									action: NavigationActions.navigate({ routeName: 'TourScreen' })
							}))}>
									<Text>Take our directed tour. Click here.</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.ExploreButton} activeOpacity={0.3} onPress={()=> this.props.navigation.navigate(NavigationActions.navigate({
								routeName: 'exploreStack',
								action: NavigationActions.navigate({ routeName: 'ExploreScreen' })
						}))}>
									<Text>Explore on your own. Click here.</Text>
							</TouchableOpacity>
					</View>
			);
	}
}

const styles = StyleSheet.create({
	Screen: {
			backgroundColor: 'white',
			flex: 1,
	},
	TourButton: {
			position: 'absolute',
			top: 100,
			height: 50,
			width: 100,
			backgroundColor: 'white',
	},
	ExploreButton: {
			position: 'absolute',
			top: 200,
			height: 50,
			width: 100,
			backgroundColor: 'white',
	},
});


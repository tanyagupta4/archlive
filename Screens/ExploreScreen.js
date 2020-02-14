import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const markers = [
	{
		"name" : "Test",
		"text" : "Test",
		"longlat" : [33.73768, -84.38688],
		"location" : "Test",
	},
];


export default class ExploreScreen extends Component<Props> {
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
			{markers.map((marker, i) =>
				<MapView.Marker 
				key={i}
				coordinate={{latitude: marker.longlat[0],
										longitude: marker.longlat[1]}}>
	
					<MapView.Callout
						onPress={() => {
							this.props.navigation.navigate("ExploreInformationScreen", {location: marker.location});
							return;
						}}>
							
							<View>
								<View>
									<Text style={styles.header}>{marker.name}</Text>
								</View>
									<Text>{marker.text}</Text>
							</View>
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
});

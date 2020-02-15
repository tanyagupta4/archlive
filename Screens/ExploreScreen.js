import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, Image } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const screen = Dimensions.get('window');
const mapPaddingBottom = screen.height * 0.01;
const boxSize = screen.width/5 * 0.95;

const markers = [
	{
		"name" : "Test",
		"text" : "Test",
		"longlat" : [33.73768, -84.38688],
		"location" : "Test",
	},
];

const testMarkers = [
	{
		"name" : "Test",
		"text" : "Test",
		"longlat" : [33.7408023, -84.3813697,],
		"location" : "Test",
	}, 
	{
		"name" : "Test",
		"text" : "Test",
		"longlat" : [33.7911489, -84.3103276],
		"location" : "Test",
	}, 
	{
		"name" : "Test",
		"text" : "Test",
		"longlat" : [33.7394969, -84.4361509],
		"location" : "Test",
	}, 
	{
		"name" : "Test",
		"text" : "Test",
		"longlat" : [33.784299, -84.3714672],
		"location" : "Test",
	}, 
	{
		"name" : "Test",
		"text" : "Test",
		"longlat" : [33.7394969, -84.4361509],
		"location" : "Test",
	}, 
];


export default class ExploreScreen extends Component<Props> {

	constructor(props) {
		super(props);
		this.state = {
			displayGlobalMap: true,
			displayBox: true,
			seeLetters: false,
			showLetters: false,
			//what else do we show?
		};
	}

	render() {
		return (
			<View style={styles.container}>
			{this.state.displayBox &&
				<View style={styles.containerBox}>
					<View style={styles.transparentBox}>
						<TouchableOpacity style={styles.letters} onPress={()=> this.setState({displayGlobalMap: false, displayBox: false, seeLetters: true})}>
							<Image style={styles.letterImage} source={require('../Images/letter.png')}>
							</Image>
						</TouchableOpacity>
					</View>
				</View>
			}

			{this.state.seeLetters && 
				<View style={styles.container}>
				<TouchableOpacity onPress={()=> this.setState({displayGlobalMap: true, displayBox: true, seeLetters: false})}>
					<Text style={{fontSize: 18}}>This is a display of all the letters in support or opposition of Allen's testimony on behalf of the Civil Rights Act. Click here to go back.</Text>
				</TouchableOpacity>
				<MapView
				style={styles.map}
				provider={PROVIDER_GOOGLE}
				showsTraffic={false}
				showsUserLocation={true}
				region={{
					latitude: 33.7500,
					longitude: -84.3880,
					latitudeDelta: 0.240,
					longitudeDelta: 0.192,
			}}>

			{testMarkers.map((marker, i) =>
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
			}

			{this.state.displayGlobalMap &&
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
		}

		</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
	...StyleSheet.absoluteFillObject,
		flex: 1,
	},
	map: {
	...StyleSheet.absoluteFillObject,
	zIndex: -1,
	},
	transparentBox: {
		width: screen.width,
		height: 80,
		backgroundColor: 'black',
		opacity: 0.5,
		flexDirection: 'row',
	},
	letters: {
		backgroundColor: 'black',
		width: boxSize,
	},
	letterImage: {
		width: "100%",
		height: "100%",
	}
});

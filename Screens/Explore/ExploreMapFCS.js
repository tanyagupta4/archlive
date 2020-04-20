import React, { Component } from "react";
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
	TouchableWithoutFeedback
} from "react-native";

import Carousel, { Pagination } from 'react-native-snap-carousel';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const { width, height } = Dimensions.get("window");
const arrow = require('../../Images/arrow.png');

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const mapPaddingBottom = screen.height * 0.1;
const mapPaddingTop = screen.height * 0.01;
const mapPaddingLeft = screen.width * 0.01;

export default class ExploreMapFCS extends Component<Props> {

    constructor(props){
        super();
        this.state = {
        }
        this.props = props;
        this._carousel = {};
        this.init();
    }

    init(){
        this.state = {
            index: 0,
            events: [
            {
                id: "PeytonRoad",
                image: require('../../Images/peytonroad.jpg'),
                name: "Peyton Road Wall",
				longlat: [33.73768, -84.38688],
            },
            {
                id: "CivilRights",
                image: require('../../Images/civilrights.jpg'),
                name: "The Civil Rights Act",
				longlat: [33.73981, -84.38973],
            },
            {
                id: "LesterMaddox",
                image: require('../../Images/lestermaddox.jpg'),
                name: "Lester Maddox",
				longlat: [33.77396, -84.40425],
            },
            ]
        };
    }

    componentDidMount() {
		//not currently being used
        //this._carousel.snapToItem(2);
    }

	//renders the cards in carousel
    _renderItem = ( {item, index} ) => {
        return (
            <View style={styles.cardContainer}>
                <TouchableOpacity activeOpacity={.8}>
                    <View style={styles.card}>
                        <Image style={styles.image}
                            source={item.image}>
                        </Image>
                    </View>
                </TouchableOpacity>
                <Image source={arrow} style={styles.arrowR}>
                    </Image>
                <Image source={arrow} style={styles.arrowL}>
                    </Image>
			</View>
		);
    }

	//updates the index variable in state to reflect which card we're looking at
	_onSnapToItem = index => {
		this.setState({ index });
    };

    render = () => {
        return (
            <View style={styles.container}>

				<MapView
				style={styles.map}
				provider= {PROVIDER_GOOGLE}
				showsTraffic={false}
				showsUserLocation={true}
				region={{
					latitude: this.state.events[this.state.index].longlat[0],
					longitude: this.state.events[this.state.index].longlat[1],
					latitudeDelta: 0.030,
					longitudeDelta: 0.096,
				}}>
					{this.state.events.map((marker, i) =>
						<MapView.Marker
						key={i}
						pinColor={"wheat"}
						coordinate={{latitude: marker.longlat[0],
									longitude: marker.longlat[1]}}>
						</MapView.Marker>
					)}
					{this.state.events.map((marker, i) =>
						{let cord={latitude: this.state.events[this.state.index].longlat[0],
								   longitude: this.state.events[this.state.index].longlat[1]}
							return (
								<MapView.Marker
								ref="marker"
								pinColor="red"
								key={i}
								coordinate={cord} />
					)})}

                 </MapView>

                 <TouchableOpacity style={styles.backpress} onPress={ () => {
                    this.props.navigation.goBack(null);
                    }}>
                    <Image style={styles.image} resizeMode="contain"
                        source={require('../../Images/backbutton2.png')}>
                    </Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.homepress} onPress={ () => {
                    this.props.navigation.navigate('AboutScreen');
                    }}>
                    <Image style={styles.image} resizeMode="contain"
                    source={require('../../Images/homebutton.png')}>
                    </Image>
                </TouchableOpacity>

								<View style={styles.column}>
								<Text style={styles.instructionText}> Artifacts about the Stadium </Text>

                <Carousel
                ref={ (c) => { this._carousel = c; } }
                data={this.state.events}
                renderItem={this._renderItem.bind(this)}
                sliderWidth={width}
                sliderHeight={height}
                itemWidth={width}
                itemHeight={height}
                useScrollView={true}
                onSnapToItem={this._onSnapToItem}
                firstItem={0}/>

								</View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%"
    },
		arrowR: {
        width: "10%",
        height: "10%",
        left: width/2 * .85,
        bottom: height * .22
    },
    arrowL: {
        width: "10%",
        height: "10%",
        transform: [
            {"rotateY": "180deg"}
        ],
        left: -width/2 * .85,
        bottom: height * .32
    },
	card: {
        paddingTop:10,
        paddingBottom:10,
				marginBottom: height * 0.15,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'lightslategray',
        borderRadius:10,
        borderWidth: 1,
        borderColor: 'white',
        width: width * .7,
        height: height * .3,
        bottom: -height * .08,
        overflow: "hidden"
    },
    cardContainer: {
        top: height * .17,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height
    },
    backgroundVideo: {
        height: height,
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0
    },
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
    },
    backpress: {
			width: "16%",
			height: "10.5%",
			top: height * 0.05,
			right: mapPaddingLeft * -22,
			alignItems: "center",
			justifyContent: "center"
	},
	backimage: {
		width: "80%",
		height: "80%",
    },

    homepress: {
			width: "17.5%",
			height: "12%",
			top: -(height * 0.067),
			right: mapPaddingLeft * -41,
			alignItems: "center",
			justifyContent: "center"
	},
	instructionText: {
		marginTop: -(height * 0.05),
		backgroundColor:'lightslategray',
		width: width * .9,
		color: "white",
		alignItems: "center",
		justifyContent: "center",
		textAlign: 'center',
		marginLeft: width * .05,
	},
	column:{
	flex: 1,
	flexDirection: 'column',
	alignItems: 'center',
	paddingLeft: 10,
	},
})

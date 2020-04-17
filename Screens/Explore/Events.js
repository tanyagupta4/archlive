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
  TouchableWithoutFeedback,
  ImageBackground
} from "react-native";

import Carousel, { Pagination } from 'react-native-snap-carousel';
import Video from 'react-native-video';

const { width, height } = Dimensions.get("window");

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const mapPaddingBottom = screen.height * 0.1;
const mapPaddingTop = screen.height * 0.01;
const mapPaddingLeft = screen.width * 0.01;

export default class Events extends Component<Props> {

    constructor(props){
        super();
        this.state = {
          errors: []
        }
        this.props = props;
        this._carousel = {};
        this.init();
      }

    init(){
        this.state = {
            events: [
            {
                id: "PeytonRoad",
                image: require('../../Images/peytonroad.jpg'),
                name: "Peyton Road Wall"
            }, {
                id: "CivilRights",
                image: require('../../Images/civilrights.jpg'),
                name: "The Civil Rights Act"
            },
                {
                id: "LesterMaddox",
                image: require('../../Images/lestermaddox.jpg'),
                name: "Lester Maddox"
            },
                {
                id: "Stadium",
                image: require('../../Images/fultonstadium.jpg'),
                name: "Atlanta-Fulton County Stadium"
            },
                {
                id: "SummerhillRiot",
                image: require('../../Images/summerhill.jpg'),
                name: "The so-called Summerhill Riot"
            },
            ]
        };
    }

    componentDidMount() {
        this._carousel.snapToItem(2);
        }

    _renderItem = ( {item, index} ) => {
        console.log("rendering,", index, item)
        return (
            <View style={styles.cardContainer} >
                <TouchableOpacity activeOpacity={.8} onPress={ () => {
                this.props.navigation.navigate(item.id);
                }}>
                    <View style={styles.card}>
                        <Image style={styles.image}
                            source={item.image}>
                        </Image>
                    </View>
                </TouchableOpacity>
                    <View style={styles.titleBackground}>
                        <Text style={styles.title}>{item.name}</Text>
                    </View>
            </View>
        );
        }

    render = () => {

        console.log("videos: updating")

        return (

            <View style={styles.container}>

                <ImageBackground source={require('../../Images/restoredatl.jpg')} style={styles.imageBackground}>

                <Carousel
                ref={ (c) => { this._carousel = c; } }
                data={this.state.events}
                renderItem={this._renderItem.bind(this)}
                sliderWidth={width}
                sliderHeight={height}
                itemWidth={width}
                itemHeight={height}
                layout={'default'}
                firstItem={0}
                background/>

                <TouchableOpacity style={styles.backpress} onPress={ () => {
                    this.props.navigation.goBack(null);
                    }}>
                    <Image style={styles.image}
                        source={require('../../Images/backbutton.png')}>
                    </Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.homepress} onPress={ () => {
                    this.props.navigation.navigate('AboutScreen');
                    }}>
                    <Image style={styles.image}
                    source={require('../../Images/homebutton.png')}>
                    </Image>
                </TouchableOpacity>

                </ImageBackground>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        height: '100%',
        width: '100%',
      },
    image: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    backpress: {
		width: "17.5%",
		height: "11%",
		top: mapPaddingTop * -71.8,
		right: mapPaddingLeft * -61,
		alignItems: "center",
		justifyContent: "center"
    },
    homepress: {
		width: "17.5%",
		height: "12%",
		top: mapPaddingTop * -83.8,
		right: mapPaddingLeft * -81,
		alignItems: "center",
		justifyContent: "center"
	},
	backimage: {
		width: "80%",
		height: "80%",
	},
	card: {
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'lightslategray',
        borderRadius:10,
        borderWidth: 1,
        borderColor: 'white',
        width: width * .9,
        height: height * .35,
        overflow: "hidden"
    },
    cardContainer: {
        top: height * .45,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
    },
    title: {
        fontSize: 40,
        color: 'white',
        fontFamily: 'didot',
        fontWeight: 'bold',
    },
    titleBackground: {
        paddingTop:1,
        paddingBottom:1,
        paddingLeft:3,
        paddingRight:3,
        backgroundColor:'lightslategray',
        borderRadius:10,
        borderWidth: 1,
        borderColor: 'white',
        top: -height * .52,
        width: width * .9,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundVideo: {
        height: height,
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0
      }
})

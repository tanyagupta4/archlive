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
import Video from 'react-native-video';


const { width, height } = Dimensions.get("window");

export default class ExploreEvents extends Component<Props> {

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
                image: require('../Images/peytonroad.jpg'),
                name: "Peyton Road Wall"
            }, {
                id: "CivilRights",
                image: require('../Images/civilrights.jpg'),
                name: "The Civil Rights Act"
            },
                {
                id: "LesterMaddox",
                image: require('../Images/lestermaddox.jpg'),
                name: "Lester Maddox"
            },
                {
                id: "Stadium",
                image: require('../Images/fultonstadium.jpg'),
                name: "Atlanta-Fulton County Stadium"
            },
                {
                id: "SummerhillRiot",
                image: require('../Images/summerhill.jpg'),
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
                    console.log("test")
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
            <View>

                <Video
                source={require('../Images/atlantaskyline.mp4')}
                style={styles.backgroundVideo}
                muted={true}
                repeat={true}
                resizeMode={"cover"}
                rate={1.0}
                ignoreSilentSwitch={"obey"}
                />

                <Carousel
                ref={ (c) => { this._carousel = c; } }
                data={this.state.events}
                renderItem={this._renderItem.bind(this)}
                sliderWidth={width}
                sliderHeight={height}
                itemWidth={width}
                itemHeight={height}
                layout={'stack'}
                firstItem={0}
                background
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
	card: {
        width: width * .7,
        height: height * .3,
        overflow: "hidden"
    },
    cardContainer: {
        top: height * .27,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height
    },
    title: {
        fontSize: 45,
        color: 'white',
        fontFamily: 'didot',
        fontWeight: 'bold',
    },
    titleBackground: {
        top: -height * .7,
        width: width * .9,
        backgroundColor: "black",
        opacity: 0.75
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

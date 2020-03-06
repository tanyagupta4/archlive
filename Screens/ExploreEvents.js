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

import Carousel from 'react-native-snap-carousel';

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
                image: require('../Images/IvanAllen3.png')
            }, {
                id: "CivilRights",
                image: require('../Images/IvanAllen2.jpg')
            },
                {
                id: "LesterMaddox",
                image: require('../Images/IvanAllen2.jpg')
            },
                {
                id: "Stadium",
                image: require('../Images/IvanAllen2.jpg')
            },
                {
                id: "SummerhillRiot",
                image: require('../Images/IvanAllen2.jpg')
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
            <View style={styles.test} >
                <TouchableWithoutFeedback onPress={ () => { 
                    console.log("test")
                this.props.navigation.navigate(item.id);
                }}>
                    <Image style={styles.card}
                        source={item.image}>
                    </Image>
                </TouchableWithoutFeedback>
                <Text>{item.id}</Text>
            </View>
        );
        }

    render = () => {

        console.log("videos: updating")
    
        return (
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
            background
            />
        );
    }
}

const styles = StyleSheet.create({
	test: {
        width: width,
        height: height
    },
    card: {
        width: width,
        height: height
    }
})

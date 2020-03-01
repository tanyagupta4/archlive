import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image, ImageBackground, Dimensions, TouchableOpacity} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const instructions = Platform.select({
  ios: 'ios Home',
  android: 'Android home',
});

//might be time to start playing around with these
const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const mapPaddingBottom = screen.height * 0.18;
const mapPaddingTop = screen.height * 0.11;
const mapPaddingLeft = screen.width * 0.02;

const width = Dimensions.get("window").width;


type Props = {};
export default class HomeScreen extends Component<Props> {

  componentDidMount() {
//    SplashScreen.hide()
  }

  constructor(props) {
    super(props);
    //not using this for now, could implement later
    //this.state = { myButtonOpacity: 1, };
  }

  render() {
    return (
      <ImageBackground source={require('../Images/home.png')} style={styles.imageBackground}>
        <View style={styles.transparentTextBackground}>
        </View>
        <View style={styles.textLocation}>
          <Text style={styles.textStyle}>A Tour Of {"/n"} Ivan Allen's {"\n"}Atlanta</Text>
        </View>
        <View style={styles.transparentButtonBackground}>
        </View>
        <TouchableOpacity style={styles.touchable} activeOpacity={0.3} onPress={()=> this.props.navigation.navigate('Map')}>
          <Text style={styles.button}>Start</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

//<Text style={styles.hiddentext}>The Ivan Allen {"\n"}Civil Rights Tour</Text>

// <Button title="Begin" color={'black'} onPress={()=> this.props.navigation.navigate('Map')}/>

const styles = StyleSheet.create({
  transparentTextBackground: {
    position: 'absolute',
    marginTop: mapPaddingTop,
    marginLeft: mapPaddingLeft - 2,
    height: 100,
    width: 295,
    backgroundColor: 'black',
    opacity: 0.4,
  },
  textStyle: {
    fontSize: 39,
    color: 'bisque',
    fontFamily: 'didot',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  textLocation: {
    position: 'absolute',
    marginTop: mapPaddingTop,
    marginLeft: mapPaddingLeft,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  touchable: {
    position: 'absolute',
    width: 100,
    height: 50,
    bottom: mapPaddingBottom,
    left: width/2 - 50,
  },
  transparentButtonBackground: {
    position: 'absolute',
    width: 100,
    height: 50,
    bottom: mapPaddingBottom,
    left: width/2 - 50,
    backgroundColor: 'seashell',
    opacity: 0.7,
  },
  button: {
    position: 'absolute',
    top: 3,
    left: 13,
    fontSize: 32,
    fontFamily: 'didot',
    fontWeight: 'bold',
    color: 'black',
    opacity: 0.8,
    textDecorationLine: 'underline',
  }
});

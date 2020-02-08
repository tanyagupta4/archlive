import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image, ImageBackground, Dimensions} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const instructions = Platform.select({
  ios: 'ios Home',
  android: 'Android home',
});

//might be time to start playing around with these
const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const mapPaddingBottom = screen.height * 0.1;
const mapPaddingTop = screen.height * 0.1;

var width = Dimensions.get("window").width;


type Props = {};
export default class HomeScreen extends Component<Props> {

  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (
      <ImageBackground source={require('../Images/home.png')} style={styles.imageBackground}>
        <View style={styles.hiddentextB}>
          <Text style={styles.hiddentext}>The Ivan Allen {"\n"}Civil Rights Tour</Text>
        </View>
        <View style={styles.textLocation}>
          <Text style={styles.textStyle}>The Ivan Allen {"\n"}Civil Rights Tour</Text>
        </View>
        <View style={styles.button}>
          <Button title="Begin" onPress={()=> this.props.navigation.navigate('Map')} />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  hiddentext: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'bisque',
    opacity: 0.0,
  },
  hiddentextB: {
    position: 'absolute',
    marginTop: 85,
    backgroundColor: 'gray',
    opacity: 0.6,
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
    marginTop: 85,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  button: {
    position: 'absolute',
    bottom:150,
    left: 180,
  }
});

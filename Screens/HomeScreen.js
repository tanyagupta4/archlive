import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image, ImageBackground, Dimensions, TouchableOpacity, Linking, Animated, Easing} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const instructions = Platform.select({
  ios: 'ios Home',
  android: 'Android home',
});

//might be time to start playing around with these
const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const mapPaddingBottom = screen.height * 0.1;
const mapPaddingTop = screen.height * 0.01;
const mapPaddingLeft = screen.width * 0.01;

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const arrow = require('../Images/arrow.png');

type Props = {};
export default class HomeScreen extends Component<Props> {

  componentDidMount() {
    this.animate()
    SplashScreen.hide()

  }

  constructor(props) {
    super(props);
    this.state = { showSettings: false};
    this.fadeAnim = new Animated.Value(0);
  }

  animate () {
    this.fadeAnim.setValue(0)
    Animated.timing(
      this.fadeAnim,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      }
    ).start(() => this.animate())
  }

  render() {
    return (
      //image background wraps everything
      <View style={styles.container}>
      <ImageBackground source={require('../Images/home.png')} style={styles.imageBackground}>

        <View style={styles.transparentTextBackground}>
        </View>
        <View style={styles.textLocation}>
          <Text style={styles.textStyle}>Touring {"\n"}Ivan Allen's {"\n"}Atlanta</Text>
        </View>

        <TouchableOpacity style={styles.settings} activeOpacity={0.3} onPress={()=> this.setState({showSettings: true})}>
          <Text style={styles.settingsButton}>Acknowledgements</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.SubmitButtonStyle} activeOpacity={0.3} onPress={()=> this.props.navigation.navigate('AboutScreen')}>
          <Text style={styles.button}>Let's Go!</Text>
        </TouchableOpacity>

        {this.state.showSettings &&
          <TouchableOpacity style={styles.transparentSettingsBackground} activeOpacity={0} onPress={()=> this.setState({showSettings: false})}>
            <Text style={styles.archivesLink}>The Ivan Allen Archives
            </Text>
            <Text style={styles.linkStyle}
                onPress={() => Linking.openURL('http://allenarchive.iac.gatech.edu/')}>
                http://allenarchive.iac.gatech.edu/
            </Text>
            <Text style={styles.drmadden}>& Dr. Madden!
            </Text>
          </TouchableOpacity>
        }

      </ImageBackground>
      </View>
    );
  }
}



// <View style={styles.arrows}>
//         <Animated.Image source={arrow} style={{width: 50, resizeMode:'contain', top: 495, marginLeft: this.fadeAnim.interpolate({
//               inputRange: [0, 0.5, 1],
//               outputRange: [50, 70, 50]
//             })}} />
//             <Animated.Image source={arrow} style={{width: 50, resizeMode:'contain', top: 495, marginLeft: this.fadeAnim.interpolate({
//                   inputRange: [0, 0.5, 1],
//                   outputRange: [50, 70, 50]
//                 })}} />
//         <Animated.Image source={arrow} style={{width: 50, resizeMode:'contain', top: 495, marginLeft: this.fadeAnim.interpolate({
//               inputRange: [0, 0.5, 1],
//               outputRange: [50, 70, 50]
//             })}} />

//         </View>


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
transparentTextBackground: {
  position: 'absolute',
  marginTop: height * 0.1,
  marginLeft: mapPaddingLeft - 2,
  height: 200,
  width: 290,
  backgroundColor: 'black',
  opacity: 0.4,
},
textStyle: {
  marginTop: height * 0.090,
  fontSize: 52,
  color: 'white',
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
  height: '100%',
  width: '111%',
},
touchable: {
  position: 'absolute',
  width: 100,
  height: 50,
  bottom: mapPaddingBottom,
  left: width/2 - 50,
},
transparentButtonBackground: {
  flexDirection: 'row',
  position: 'absolute',
  right: 0,
  justifyContent: 'center',
  alignItems: 'center',
},
button: {
  position: 'absolute',
  fontSize: 30,
  top: 2,
  fontFamily: 'didot',
  fontWeight: 'bold',
  color: 'white',
  textAlign:'center',
},
settings: {
  position: 'absolute',
  bottom: mapPaddingBottom * .1,
},
settingsButton: {
  fontSize: 20,
  color: "black",
  marginLeft: mapPaddingLeft,
},
transparentSettingsBackground: {
  flex: 1,
  backgroundColor: 'black',
  opacity: 0.7,
},
linkStyle: {
    top: 300,
    fontSize: 25,
    textDecorationLine: 'underline',
    color: 'aqua',
},
archivesLink: {
    top: 295,
    fontSize: 30,
    textDecorationLine: 'underline',
    color: 'white',
  },
drmadden: {
    top: 305,
    fontSize: 30,
    color: 'white',
  },
arrow: {
  width: 50,
  resizeMode: 'contain',
  top: 495,
},
arrows: {
  flex:1,
  flexDirection: 'row',
},
SubmitButtonStyle: {
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:15,
    paddingRight:15,
    backgroundColor:'slategray',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    position: 'absolute',
    width: 160,
    height: 45,
    bottom: mapPaddingBottom,
    left: width/2 - 80,
}
});

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image, ImageBackground, Dimensions, TouchableOpacity, Linking} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

//const Tab = createMaterialTopTabNavigator();

const instructions = Platform.select({
  ios: 'ios Home',
  android: 'Android home',
});

//might be time to start playing around with these
const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const mapPaddingBottom = screen.height * 0.01;
const mapPaddingTop = screen.height * 0.01;
const mapPaddingLeft = screen.width * 0.01;

const width = Dimensions.get("window").width;


type Props = {};
export default class HomeScreen extends Component<Props> {

  componentDidMount() {
    SplashScreen.hide()
  }

  constructor(props) {
    super(props);
    //not using this for now, could implement later
    this.state = { showSettings: false, };
  }
  

  render() {
    return (
      //image background wraps everything
      <ImageBackground source={require('../Images/home.png')} style={styles.imageBackground}>
      
        <View style={styles.transparentTextBackground}>
        </View>
        <View style={styles.textLocation}>
          <Text style={styles.textStyle}>Touring the {"\n"}Ivan Allen {"\n"}Archives</Text>
        </View>

        <TouchableOpacity style={styles.settings} activeOpacity={0.3} onPress={()=> this.setState({showSettings: true})}>
          <Text style={styles.settingsButton}>Acknowledgements</Text>
        </TouchableOpacity>
      
        {this.state.showSettings &&
          <TouchableOpacity style={styles.transparentSettingsBackground} activeOpacity={0} onPress={()=> this.setState({showSettings: false})}>
            <Text style={styles.archivesLink}>The Ivan Allen Archives
            </Text>
            <Text style={styles.linkStyle}
                onPress={() => Linking.openURL('http://allenarchive.iac.gatech.edu/')}>
                http://allenarchive.iac.gatech.edu/
            </Text>
          </TouchableOpacity> 
        }

      </ImageBackground>
    );
  }
}

// <View style={styles.transparentButtonBackground}>
// </View>
// <TouchableOpacity style={styles.touchable} activeOpacity={0.3} onPress={()=> this.props.navigation.navigate('AboutScreen')}>
// <Text style={styles.button}>Start</Text>
// </TouchableOpacity>


const styles = StyleSheet.create({
  transparentTextBackground: {
    position: 'absolute',
    marginTop: mapPaddingTop,
    marginLeft: mapPaddingLeft - 2,
    height: 190,
    width: 285,
    backgroundColor: 'black',
    opacity: 0.4,
  },
  textStyle: {
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
  },
  settings: {
    position: 'absolute',
    bottom: mapPaddingBottom,
  },
  settingsButton: {
    fontSize: 20,
  },
  transparentSettingsBackground: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.7,
  },
  linkStyle: {
      top: 500,
      fontSize: 25,
      textDecorationLine: 'underline',
      color: 'aqua',
  },
  archivesLink: {
      top: 495,
      fontSize: 30,
      textDecorationLine: 'underline',
      color: 'white',
  }
});

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image} from 'react-native';
import ImageSlider from 'react-native-image-slider';

const instructions = Platform.select({
  ios: 'ios Home',
  android: 'Android home',
});

type Props = {};
export default class HomeScreen extends Component<Props> {
  render() {
    const images = [
        require('./IvanAllen.jpg'),
        require('./IvanAllen2.jpg'),
        require('./IvanAllen3.png'),
    ];
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>IVAN ALLEN</Text>
        <Button title="Map" style={styles.instructions} onPress={()=> this.props.navigation.navigate('Map')} />
        <ImageSlider
            style={styles.pic}
            loop
            autoPlayWithInterval={2000}
            images={images}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#002D56',
    justifyContent: 'flex-end',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: '#EED000',
    fontWeight: 'bold',
//    fontFamily: 'serif',
    textAlignVertical: 'top',
  },
  instructions: {
    textAlign: 'center',
    color: '#EED000',
    marginBottom: 5,
  },
  pic: {
    marginBottom: 150,
    width: 400,
    height: 400,
    top: 40,
  },
  button: {
    height: 50,
    marginBottom: 50,
  }
});

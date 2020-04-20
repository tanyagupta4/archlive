import React, {Component, useEffect } from 'react';
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
    Button,
  } from "react-native";

const { width, height } = Dimensions.get("window");

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const mapPaddingBottom = screen.height * 0.1;
const mapPaddingTop = screen.height * 0.01;
const mapPaddingLeft = screen.width * 0.01;

export default class Stadium extends Component<Props> {
    render() {
      return (
          <>
        <ScrollView scrollEventThrottle={16}>
        <View style={{ flex: 1, backgroundColor: "white", paddingTop: 50 }}>
          <Text
            style={{
              marginTop: height * 0.063,
              fontSize: 48,
              fontWeight: "700",
              paddingHorizontal: 20,
              textAlign: 'center',
              color: "#6e6262"
            }}
          >
            Fulton County Stadium
          </Text>
          <Image source={require('../../Images/stadium2.jpg')} style={{ justifyContent: 'center', alignItems: 'center', width: "100%", height: 200}}/>
          <Text style={{
            fontSize: 20,
            fontWeight: "700",
            paddingHorizontal: 20,
            paddingTop: 5,
            color: 'black',
            textShadowColor: '#f0eded',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10,
            textAlign: 'center',
          }}>
          History about the Stadium
          </Text>
          <Text style={{
            paddingTop: 10,
            paddingHorizontal: 15,
            color: "#6e6262",
            fontSize: 14
          }}>
          On March 5, 1964, the Milwaukee Braves publicized that they
          would move to Atlanta if a stadium was finished by 1966. With this in mind,
          Mayor Ivan Allen Jr. immediately began construction on April 15, 1964. Construction was
          completed on April 9, 1965, sparking a new era in Atlanta’s rich history.


          In his piece Mayor, a personal memoir of his mayoral tenure, Ivan Allen prides himself
          on his ability to construct Atlanta Stadium, which was later renamed the Atlanta Fulton County
          Stadium. From the beginning of his campaign, Allen had promised to build a stadium that would turn
           still-segregated Atlanta, into a “major-league city” (Allen 153). Once in office, Allen chose a
            plot in the Washington–Rawson neighborhood as the building site. His reasoning for the location
            had to do with its close proximity to the state capitol, considerable businesses, and major highways.
            As Allen describes it, the Washington–Rawson neighborhood was part of the “worst slums” in the area and
             “was being cleared under the urban renewal program” (Allen 156). It is important to consider that by building
             the stadium, Allen wanted to “break away from the old small-town attitudes” (Allen 159). From an outsider’s perspective
             however, Allen dismisses the slums and the people living within it to accomplish his ‘major-league city’ dream. He is taken
             by surprise at the lack of resistance he encounters: “how we ever built something that large without a strike or some other
             slowdown, I’ll never know” (Allen 159). Allen expected his project to lead to social turmoil, however went through with the construction.
​
                Furthermore in his memoir, Allen asserts that “the only way you were going to lure major-league
                sports to a city was to have, or to show you could have, an acceptable stadium” (Allen 154). And
                he was correct. The Milwaukee Braves players and management alike were excited about their scheduled
                move to the promising city of Atlanta. In an article titled “Wise Panning Earned Atlanta The Milwaukee
                Braves” by Atlanta Daily World, the author discusses how the players on the Milwaukee Braves wanted to
                move to Atlanta particularly because of the stadium being built. So much so, that the clubspokemen states
                that they “may play in Milwaukee but our hearts will be in Atlanta during the regular 1965 season.”
          </Text>


          <Text style={{
            fontSize: 20,
            fontWeight: "700",
            paddingHorizontal: 20,
            paddingTop: 5,
            color: 'black',
            textShadowColor: '#f0eded',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10,
            textAlign: 'center',
          }}>
          The Construction
          </Text>
          <Text style={{
            paddingTop: 10,
            paddingHorizontal: 15,
            color: "#6e6262",
            fontSize: 14
          }}>
          Allen had previously been in business with the architecture company of Finch, Alexander,
          Barnes, Rothschild, and Paschal (FABRAP) and wanted their hand in building his new marvel.
           After the company had proved a lack of organization, Allen hired another company, Heery
            Heery, to help manage the construction project. The two firms worked well together, sharing
             the same vision of the Atlanta Fulton County Stadium. According to This Great Game, “they both
             embraced a modern, quasi-minimalist international style based on Bauhaus principles that prioritized
             function over form, certainly over décor.” Traditional southern aesthetics were rejected in the quest
             to build a contemporary stadium that would hold both a professional baseball team and professional football
              team. The crossbreed of companies, as promised, miraculously finished the stadium in just 51 weeks.

                After it was complete, the construction of the stadium cost the city of Atlanta approximately $18 million.
                Allen had not only accomplished a major league stadium, but he also won over people’s approval
                "and made them realize that getting the stadium built in less than one year had … saved us from spiraling construction costs" (Allen 132).
          </Text>

          <Text >

              {"\n"}
              {"\n"}
              {"\n"}

          </Text>
        <TouchableOpacity style={styles.linksnmedia}>
            <Text
            style={styles.TextStyle}>
            Links & Multimedia
            </Text>
        </TouchableOpacity>
      </View>


    </ScrollView>

    <View style={styles.fabMenuStyle}>

    <TouchableOpacity style={styles.SubmitButtonStyle}  onPress={()=> this.props.navigation.navigate('ExploreMapCR')}>
        <Text style={styles.TextStyle}>
          Explore The Interactive Map!
        </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.homepress} onPress={ () => {
      this.props.navigation.goBack(null);
      }}>
      <Image style={styles.homeImage} resizeMode='contain'
        source={require('../../Images/backbutton2.png')}>
      </Image>
    </TouchableOpacity>

</View>

  </>
)}

}

const styles = {
linksnmedia: {
flex: 1,
paddingTop:8,
paddingBottom:8,
paddingLeft:8,
paddingRight:8,
backgroundColor:'slategray',
borderRadius:8,
borderWidth: 1,
borderColor: '#fff',
},
SubmitButtonStyle: {
paddingTop:12,
paddingBottom:12,
paddingLeft:8,
paddingRight:8,
left: mapPaddingLeft * 14,
top: height * 0.05,
backgroundColor:'lightslategray',
borderRadius:8,
borderWidth: 1,
borderColor: '#fff',
justifyContent: 'center',
alignItems: 'center',
},
backpress: {
width: "100%",
height: "100%",
right: mapPaddingLeft * -42,
alignItems: "center",
justifyContent: "center"
},
backimage: {
flex: 1,
width: "100%",
height: "100%",
},

homeImage: {
flex: 1,
width: "100%",
height: "100%",
},

homepress: {
width: "25%",
height: "100%",
top: -(height * 0.025),
right: mapPaddingLeft * -81,
alignItems: "center",
justifyContent: "center",
},
TextStyle:{
color:'white',
fontWeight: "400",
fontSize: 20,
textAlign:'center',
textDecorationLine: 'underline',
fontFamily: 'didot',
},
fabMenuStyle: {
position: 'absolute',
},
MapButton: {
marginTop:10,
paddingTop:25,
paddingBottom:10,
paddingLeft:15,
paddingRight:15,
backgroundColor:'darkslategray',
borderRadius:5,
borderWidth: 1,
borderColor: '#fff'
},
MapButtonText: {
color: 'white',
fontSize: 20,
}}

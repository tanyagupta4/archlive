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

export default class Stadium extends Component<Props> {


    render() {
      return (
          <>
        <ScrollView scrollEventThrottle={16}>
        <View style={{ flex: 1, backgroundColor: "white", paddingTop: 50 }}>
          <Text
            style={{
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

          <View style ={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'}}>

            <View style={[{ width: 70, margin: 10}]}>
                <Button color="green" title="some" />

            </View>


            <View style={[{ width: 70, margin: 10}]}>
                <Button color="red" title="More" />

            </View>
          
            <View style={[{ width: 70, margin: 10}]}>
                <Button title="Video" />

            </View>


          </View>
        </View>
      </ScrollView>

        <View style={styles.fabMenuStyle}>
            <View>
                <Button
            title="CLick to MAP"
            accessibilityLabel="Go to map to see more"
            onPress={()=> this.props.navigation.navigate('ExploreScreen')}/>
            </View>
        </View>

        </>
    )}

}

const styles = {

  SubmitButtonStyle: {
    marginTop:15,
      paddingTop:15,
      paddingBottom:15,
      paddingLeft:30,
      paddingRight:30,
      backgroundColor:'#6a7fa1',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff'
},


fabMenuStyle: {
    flexDirection: 'row',
    position: 'absolute',
    top: 5,
    right:0,
    justifyContent: 'center',
    alignItems: 'center',
},

TextStyle:{
     color:'white',
     fontWeight: "400",
     textAlign:'center',
 },
}

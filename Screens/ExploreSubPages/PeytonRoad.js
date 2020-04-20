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

export default class PeytonRoad extends Component<Props> {


    render() {
      return (
          <>
        <ScrollView scrollEventThrottle={16}>
        <View style={styles.column, { flex: 1, backgroundColor: "white", paddingTop: 50 }}>
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
            Peyton Road Wall
          </Text>
          <Image source={require('../../Images/peytonroad.jpg')} style={{ justifyContent: 'center', alignItems: 'center', width: "100%", height: 400}}/>
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
          History about the Peyton Road Wall
          </Text>
          <Text style={{
            paddingTop: 10,
            paddingHorizontal: 15,
            color: "#6e6262",
            fontSize: 14
          }}>
          The Peyton Road wall was an attempt by the Atlanta city government to separate and divide a neighborhood
          based on the race of its residents. This “wall,” an actual physical barrier that blocked Peyton Road in
          order to segregate a white neighborhood from Black Atlantans, lasted from December 1962 to March 1963 when
          a judge struck the wall down as unconstitutional. The actions taken by the Mayor's Office under Ivan Allen,
          Jr. had lasting effects and consequences not only for those who lived in the neighborhood around Peyton Road
          but also for the history of "white flight" in the South.
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
          White Stabalization Plan
          </Text>
          <Text style={{
            paddingTop: 10,
            paddingHorizontal: 15,
            color: "#6e6262",
            fontSize: 14
          }}>
          White Flight was the large scale migration of white Americans moving out of racially-mixed urban areas to the
          racially homogenous suburbs during the 1960s in Atlanta. White flight was the product of “blockbusting,” the term
          white people coined to describe how blacks were moving into their neighborhoods and trying to drive them out.
          When a black family moved into their neighborhood, the value of everyone’s property decreased. White families did
          everything they could to try and drive the black families out, from verbal threats to actual bombings. However,
          their efforts were futile. Eventually, they decided to just move out to other all-white neighborhoods in the suburbs.
​           This mass movement drew the attention of community leaders such as the All Citizens Committee for Better City Planning
            and led to the development of the Proposed Community Stabilization Plan. The Proposed Community Stabilization Plan was
            a plan drafted by the All Citizens Committee for Better City Planning that addressed how to stop the mass movement of
            white flight, and the racial tensions associated with blacks moving into all-white neighborhoods in Southwest Atlanta.
            In fact, it is in the Stabilization Plan where the idea that Peyton Road should be closed off first emerges:
            First, it offers the white citizens permanent relief through the closure of Harlan and Peyton Roads at points north of the Peyton -
            Utoy Forest community. Secondly, it offers the Negro citizens a tremendous advantage by providingthem with approximately
            250 acres of land, heretofore not available, forresidential development.
            The plan proposes that the blacks who desire to move in should have their own residential area and school, thus preserving
            the property values and minimizing racial tensions in established communities. Without a doubt, everyone on the All Citizens
            Committee for Better City Planning is white, as this proposal is a clear example of segregation. Although the committee paints
            a promising picture of “separate but equal,” separation is inherently unequal.
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
          Black Response
          </Text>
          <Text style={{
            paddingTop: 10,
            paddingHorizontal: 15,
            color: "#6e6262",
            fontSize: 14
          }}>
          Within the African American community in the Peyton Road area, there was a communal sense of outrage at the new wall that was constructed. The wall was a critical point in the racial tensions of Atlanta that had been rising steadily over the previous years. To have a physical barrier of “white vs black” was something that simply manifested the evil that had been brewing within the community the whole time. This was yet again another example of Separate but Equal. However, unlike the name would imply, there was no equality about the whole situation. In fact, many times the black community would suffer and be subjected to lesser amenities and public facilities at the hands of this ideology. Because of this, the wall was the last straw. The black community was being physically separated from a part of their own neighborhood.
            The idea of separate but equal was now tearing communities and families apart and it the black community had had enough. With this came the fight against Peyton Road Wall and the fight to win back their community from the government. The community tore down the wall, wrote letters and gained media attention, they fought for the home that they had.
            From this effort, they went and tore down the Peyton Road wall. The original wall was made out of wood and cheaply made as the city did not expect such a response from the community surrounding the wall. When the community tore down the wall, the government put up a new wall made of concrete and other materials that were not so easy to tear down as well as the neighborhood making their own “guard watch” over the wall so that the Black community could not alter the barrier itself.
            So why was the wall even erected? What was the cause that could be deemed good enough to justify erecting a racial barrier in the middle of a neighborhood? The simple answer, irrational fears of the people living there. In a time of blockbusting and of white flight, many people were scared of their homes losing value and in turn them losing money on their house. In fact, so many people were afraid of this they personally wanted something done to prevent it in the future. The government’s response? Build a wall in the heart of a community to help soothe the fears of those living there. It was from this, outrage in the black community grew. There was no need for the wall and it only created further division and clashes between the communities living there.
            As the two groups fought over who was in the right and whether or not a wall belonged there, a lawsuit was brought against the city of Atlanta, challenging the city’s right the divide the neighborhood into separate sections based on the idea of race. This lawsuit went from when the wall was erected in December of 1962 to March 1st, 1963 when a judge declared the wall unconstitutional. Within minutes of this decision, the wall was ordered to be brought down by Ivan Allen.
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
          The Lawsuit
          </Text>
          <Text style={{
            paddingTop: 10,
            paddingHorizontal: 15,
            color: "#6e6262",
            fontSize: 14
          }}>
          Though the Peyton Road Wall’s lifespan was limited to less than 90 days, the barrier was repeatedly torn down then rebuilt, thanks to the efforts of black vigilantes and white supremacists alike. However, several frustrated citizens opted for legal recourse, which culminated in a lawsuit against the City of Atlanta featuring upwards of 15 plaintiffs.
            While initial proceedings over the legality of the Peyton and Harlan Road blockades were dismissed in court, Justice Whitman (Superior Court Judge of the Atlanta Circuit) declared their unconstitutionality on March 1st, 1963, ruling that they were to be removed within 3 days from the decision. Mayor Allen, by this point fully fraught with embarrassment and a desire to turn the glaring global spotlight away from Atlanta, hastily ordered his chief of construction to dismantle the walls as soon as possible. Within a matter of minutes, the barriers had been effaced, with their legacy soon to follow.
            Since Allen was eager to assuage fears that he was, in fact, a proponent of racist policies, he not only instructed the City of Atlanta’s attorney to not pursue an appeal of the court’s decision but also established resolutions and commissions aimed at the equitable allocation of land, devoid of any racial bias. Before Mayor Allen could officially reverse his stance on the Peyton Road Wall however, he was forced to wait on the outcome of L.K. Googer vs. City of Atlanta. Breaking down the legalese of the cases’s transcript, the judges ruled that the blockading of Peyton and Harlan roads was inherently unconstitutional.
            The crux of this decision derived from the fact that the relevant ordinances described the wall’s purpose as “for the benefit of private persons”, a designation the Court unequivocally assessed as “in violation of constitutional rights”. The Atlanta Circuit Court drew upon numerous precedents established by both the Georgia and United States Supreme Courts in reaching their verdict. One such case argued before the Georgia Supreme Court was Dunlap v. Tift, which delineated the illegality of the government vacating a public street for purely private interest(s). Particularly relevant were two landmark U.S. Supreme Court cases: Minnesota v. Barber and Mugler v. Kansas. These decisions introduced ideas essential to understanding the decision in the Peyton Road affair.
            For example, Barber made clear that the good faith with which a statute may have been written plays no role in defending said law’s legal basis if the legislation encroaches on constitutional protections, while Mugler set a precedent for protection against governmental intrusion into basic rights, even when not explicitly protected by the Constitution. Given the relatively straightforward legal context surrounding the Peyton Road situation, it is not surprising that the court quickly came to the conclusion that it was “unreasonable, arbitrary, capricious, and therefore, illegal and void.”
​            However, the lack of lasting reminders of the wall presents an interesting, yet worrying conundrum. How could it be that there exist so few historical records about an event that seemed to have captivated worldwide attention? Since politics is inherently intertwined with the media, we considered the possibility that there was some connection between the mayoral bureaucracy and the media outlets reporting on the controversy. In fact, in curating the Ivan Allen Digital Archive, we came across several letters from the City of Atlanta to media conglomerates. The content of this correspondence often directly related to how the Peyton Road affair was described in each media group’s respective articles. For example, magazines like Time that had treated the controversy in a manner beneficial to the city received heaping praise, while those who had called Atlanta out for its haphazardly thought-out plan were addressed in an admonishing and reprehending tone. Perhaps the city’s influence on the press implicitly informed the way the Peyton Road Wall has been historically presented, thereby illustrating the lack of a variety of sources on the matter
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

          <TouchableOpacity style={styles.SubmitButtonStyle}  onPress={()=> this.props.navigation.navigate('ExploreMapPR')}>
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

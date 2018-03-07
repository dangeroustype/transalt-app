import React, { Component } from "react";
import {
  Text,
  View,
  WebView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView
} from "react-native";

import { NavigationActions } from "react-navigation";

import Icon from "react-native-vector-icons/MaterialIcons";
const win = Dimensions.get('window');
const ratio = win.width/541; //541 is actual image width

class AboutUs extends Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: "About TransAlt",
    title: "About TransAlt",
    headerLeft: (
      <View style={{ paddingHorizontal: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
         <Icon name="menu" size={30} color="#666" />
        </TouchableOpacity>
      </View>
    )
  });



  render() {

    return (
      <ScrollView style={styles.container}>


      <Image
      style={styles.image}
       resizeMode={'contain'}

      source={require('../assets/img/heroimg.jpg')}
       />

       <View  style={styles.textcontainer}>

      <Text style={styles.firstparagraph}>Transportation Alternatives' mission is to reclaim New York City's streets from the automobile and advocate for better bicycling, walking, and public transit for all New Yorkers.</Text>

      <Text  style={styles.paragraph}>With 100,000 active supporters and a committee of activists working locally in every borough, T.A. fights for the installation of infrastructure improvements that reduce speeding and traffic crashes, save lives and improve everyday transportation for all New Yorkers.</Text>

      <Text style={styles.paragraph}>Since our founding in 1973, T.A. has paved the way for remarkable changes in New York City’s transportation infrastructure: the extraordinary growth of bicycling, the launch of Citi Bike and the introduction of innovations to city streets, like Complete Streets, parking-protected bike lanes, automated speed enforcement cameras, public plazas, Select Bus Service and Neighborhood Slow Zones, and much more.</Text>

      <Text style={styles.paragraph}>Right now, Transportation Alternatives activists are leading the fight to improve infrastructure for bicycling and walking on scores of local streets and to change traffic enforcement policy and practices citywide. The goal is to achieve Vision Zero — the elimination of traffic deaths and serious injuries on New York City’s streets. </Text>
      </View>


      </ScrollView>


    )

  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  textcontainer: {
    paddingTop: 10,
  paddingHorizontal: 10,

  },
  firstparagraph: {
    fontFamily: 'Gotham',
    color: '#0d9c4a',
    fontSize: 22,
    paddingBottom: 10,
  },

  paragraph: {
    fontFamily: 'Gotham',
    color: '#363636',
    fontSize: 16,
    paddingBottom: 10,
  },
  image: {
    width: win.width,
    height: 362 * ratio, //362 is actual height of image
}

});

export default AboutUs;

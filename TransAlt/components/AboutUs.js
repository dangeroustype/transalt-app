import React, { Component } from "react";
import {
  Text,
  View,
  WebView,
  TouchableOpacity,
} from "react-native";

import { NavigationActions } from "react-navigation";

import Icon from "react-native-vector-icons/MaterialIcons";
import MyWebView from 'react-native-webview-autoheight';


const customStyleAboutUs = "<style> body {font-family: sans-serif; font-size: 40px; padding: 40px;} .greenintro {color: #0d9c4a;}</style>";
const aboutushtml = "<body>\r\n<div class=\"greenintro\">Transportation Alternatives\u2019 mission is to reclaim New York City\'s streets from the automobile and to promote bicycling, walking, public transit.<\/div><br><br>\r\n\r\nWith 100,000 active supporters and a committee of activists working locally in every borough, T.A. fights for the installation of infrastructure improvements that reduce speeding and traffic crashes, save lives and improve everyday transportation for all New Yorkers.<br>\r\n<br>\r\nSince our founding in 1973, T.A. has paved the way for remarkable changes in New York City\u2019s transportation infrastructure: the extraordinary growth of bicycling, the launch of Citi Bike and the introduction of innovations to city streets, like Complete Streets, parking-protected bike lanes, automated speed enforcement cameras, public plazas, Select Bus Service and Neighborhood Slow Zones, and much more.<br>\r\n<br>\r\nRight now, Transportation Alternatives activists are leading the fight to improve infrastructure for bicycling and walking on scores of local streets and to change traffic enforcement policy and practices citywide. The goal is to achieve Vision Zero \u2014 the elimination of traffic deaths and serious injuries on New York City\u2019s streets.\r\n<\/body>";

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
      <MyWebView
          source={{html: customStyleAboutUs + aboutushtml, baseUrl: "https://www.transalt.org"}}


      />


    )

  }

}

export default AboutUs;

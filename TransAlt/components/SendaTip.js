import React, { Component } from "react";
import {
  Text,
  View,
  WebView,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import { NavigationActions } from "react-navigation";

import Icon from "react-native-vector-icons/MaterialIcons";



class SendaTip extends Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: "Send a Tip",
    title: "Send a Tip",
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


      <WebView
  source={{uri: 'https://www.transalt.org/bike-forecast/tips'}}

  />



    )

  }

}


const styles = StyleSheet.create({

  tipicon: {
     paddingTop: 10,
    textAlign: 'center',
  },

  introText: {
    padding: 20,
    textAlign: 'center',
  },




  })

export default SendaTip;

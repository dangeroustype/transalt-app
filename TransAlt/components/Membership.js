import React, { Component } from "react";
import {
  Text,
  View,
  WebView,
  TouchableOpacity,
} from "react-native";

import { NavigationActions } from "react-navigation";

import Icon from "react-native-vector-icons/MaterialIcons";

class Membership extends Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: "Membership",
    title: "Membership",
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
  source={{uri: 'https://www.transalt.org/membership'}}
        startInLoadingState={true}
  />


    )

  }

}

export default Membership;

import React, { Component } from "react";
import {
  Text,
  View,
  WebView,
  TouchableOpacity,
} from "react-native";

import { NavigationActions } from "react-navigation";

import Icon from "react-native-vector-icons/MaterialIcons";

class GetInvolved extends Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: "Get Involved",
    title: "Get Involved",
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
  source={{uri: 'https://www.transalt.org/getinvolved'}}
  style={{marginTop: 20}}
  />


    )

  }

}

export default GetInvolved;

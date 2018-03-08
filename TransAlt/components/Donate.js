import React, { Component } from "react";
import {
  Text,
  View,
  WebView,
  TouchableOpacity,
} from "react-native";

import { NavigationActions } from "react-navigation";

import Icon from "react-native-vector-icons/MaterialIcons";

class Donate extends Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: "Donate",
    title: "Donate",
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
  source={{uri: 'https://secure.transalt.org/site/Donation2?df_id=11533&11533.donation=form1&pw_id=3581&s_src=2018mbr-web-member'}}
      startInLoadingState={true}
  />


    )

  }

}

export default Donate;

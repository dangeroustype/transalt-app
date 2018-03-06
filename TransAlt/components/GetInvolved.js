import React, { Component } from "react";
import {
  Text,
  View,
  WebView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image
} from "react-native";

import { NavigationActions } from "react-navigation";

import Icon from "react-native-vector-icons/MaterialIcons";

const win = Dimensions.get('window');
const ratio = win.width/1140; //541 is actual image width

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
      <ScrollView style={styles.container}>

      <Image
      style={styles.image}
       resizeMode={'contain'}

      source={require('../assets/img/getinvolved.png')}
       />

      <Text style={styles.firstparagraph}>You can make real, tangible changes to how streets and sidewalks function in your Neighborhood. Your local activist committee campaigns and fights for changes on-the-ground in their neighborhoods, like bike lanes and new pedestrian plazas. </Text>

      <Text>
      Choose your committee
      </Text>

      <Text>
      Manhattan
      </Text>

      <Text>
      Brooklyn
      </Text>

      <Text>
      Queens
      </Text>

      <Text>
      the Bronx
      </Text>
      <Text>
      Staten Island
      </Text>



<WebView
source={{uri: 'https://www.transalt.org/getinvolved'}}
style={{marginTop: 20}}
/>

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

    color: '#0d9c4a',
    fontSize: 18,
    padding: 10,
  },

  paragraph: {
    color: '#363636',
    fontSize: 16,
    paddingBottom: 10,
  },
  image: {
    width: win.width,
    height: 650 * ratio, //362 is actual height of image
}

});

export default GetInvolved;

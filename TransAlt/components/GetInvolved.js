import React, {Component} from "react";
import {
  Text,
  View,
  WebView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  Linking,
  TouchableHighlight
} from "react-native";

import firebase from 'react-native-firebase';

import {NavigationActions} from "react-navigation";

import Icon from "react-native-vector-icons/MaterialIcons";

const win = Dimensions.get('window');
const ratio = win.width / 1140; //541 is actual image width

class GetInvolved extends Component {

  static navigationOptions = ({navigation, screenProps}) => ({drawerLabel: "Get Involved", title: "Get Involved", headerLeft: (<View style={{
      paddingHorizontal: 10
    }}>
    <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
      <Icon name="menu" size={30} color="#666"/>
    </TouchableOpacity>
  </View>)});

  componentDidMount() {
    firebase.analytics().setCurrentScreen('GetInvolved');
  }

  render() {

    return (<ScrollView style={styles.container}>

      <Image style={styles.image} resizeMode={'contain'} source={require('../assets/img/getinvolved.png')}/>

      <Text style={styles.firstparagraph}>You can make real, tangible changes to how streets and sidewalks function in New York City. Your local activist committee campaigns and fights for changes on-the-ground in their neighborhoods, like bike lanes and new pedestrian plazas.
      </Text>



      <View style={styles.flex}>
        <TouchableHighlight style={styles.borobutton} onPress={() => {
             Linking.openURL('https://www.transalt.org/manhattan')

          }}>
          <Text style={styles.borobuttontext}>
            MANHATTAN
          </Text>
        </TouchableHighlight>


        <TouchableHighlight style={styles.borobutton} onPress={() => {
             Linking.openURL('https://www.transalt.org/brooklyn')

          }}>

        <Text style={styles.borobuttontext}>
          BROOKLYN
        </Text>
      </TouchableHighlight>
      </View>

      <View style={styles.flex}>

      <TouchableHighlight style={styles.borobutton} onPress={() => {
           Linking.openURL('https://www.transalt.org/queens')

        }}>

        <Text style={styles.borobuttontext}>
          QUEENS
        </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.borobutton} onPress={() => {
               Linking.openURL('https://www.transalt.org/bronx')

          }}>

        <Text style={styles.borobuttontext}>
          BRONX
        </Text>
                </TouchableHighlight>
      </View>

      <View style={styles.flex}>


              <TouchableHighlight style={styles.borobutton} onPress={() => {
                 Linking.openURL('https://www.transalt.org/statenisland')


                }}>
        <Text style={styles.borobuttontext}>
          STATEN ISLAND
        </Text>
                </TouchableHighlight>


                <TouchableHighlight style={styles.borobutton} onPress={() => {
                   Linking.openURL('https://www.transalt.org/citywide')


                  }}>
          <Text style={styles.borobuttontext}>
            CITYWIDE
          </Text>
                  </TouchableHighlight>


      </View>

      <WebView source={{
          uri: 'https://www.transalt.org/getinvolved'
        }} style={{
          marginTop: 20
        }}/>

    </ScrollView>)

  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  flex: {
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  borobutton: {
    flex: 1,

    padding: 10,
    margin: 5,

    backgroundColor: '#f15d22',
    borderRadius: 5,
    overflow: 'hidden'
  },
  borobuttontext: {
    fontFamily: 'Gotham-Medium',
    textAlign: 'center',
    fontSize: 16,
    color: '#ffffff'
  },

  textcontainer: {
    paddingTop: 10,
    paddingHorizontal: 10
  },
  firstparagraph: {
    fontFamily: 'Gotham-Book',
    color: '#292929',
    fontSize: 16,
    lineHeight: 25,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },

  choose: {
    fontFamily: 'Gotham-Book',
    fontSize: 19,
    padding: 10,
    textAlign: 'center'
  },

  paragraph: {
    color: '#363636',
    fontSize: 16,
    paddingBottom: 10
  },
  image: {
    width: win.width,
    height: 650 * ratio, //362 is actual height of image
  }

});

export default GetInvolved;

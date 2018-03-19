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

      <Text style={styles.firstparagraph}>You can make real, tangible changes to how streets and sidewalks function in your Neighborhood. Your local activist committee campaigns and fights for changes on-the-ground in their neighborhoods, like bike lanes and new pedestrian plazas.
      </Text>

      <Text style={styles.choose}>See campaigns in your borough</Text>

      <View style={styles.flex}>
        <TouchableHighlight style={styles.borobutton} onPress={() => {
            this.props.navigation.navigate('BoroScreen', {committee: 'Manhattan'})

          }}>
          <Text style={styles.borobuttontext}>
            Manhattan
          </Text>
        </TouchableHighlight>


        <TouchableHighlight style={styles.borobutton} onPress={() => {
            this.props.navigation.navigate('BoroScreen', {committee: 'Brooklyn'})

          }}>

        <Text style={styles.borobuttontext}>
          Brooklyn
        </Text>
      </TouchableHighlight>
      </View>

      <View style={styles.flex}>

      <TouchableHighlight style={styles.borobutton} onPress={() => {
          this.props.navigation.navigate('BoroScreen', {committee: 'Queens'})

        }}>

        <Text style={styles.borobuttontext}>
          Queens
        </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.borobutton} onPress={() => {
            this.props.navigation.navigate('BoroScreen', {committee: 'Bronx'})

          }}>

        <Text style={styles.borobuttontext}>
          the Bronx
        </Text>
                </TouchableHighlight>
      </View>

      <View style={styles.flex}>


              <TouchableHighlight style={styles.borobutton} onPress={() => {
                  this.props.navigation.navigate('BoroScreen', {committee: '  Staten Island'})

                }}>
        <Text style={styles.borobuttontext}>
          Staten Island
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  borobutton: {
    flex: 1,

    padding: 10,
    margin: 5,

    backgroundColor: '#cccccc',
    borderRadius: 5,
    overflow: 'hidden'
  },
  borobuttontext: {
    fontFamily: 'Gotham-Book',
    textAlign: 'center',
    fontSize: 19
  },

  textcontainer: {
    paddingTop: 10,
    paddingHorizontal: 10
  },
  firstparagraph: {
    fontFamily: 'Gotham-Book',
    color: '#0d9c4a',
    fontSize: 15,
    padding: 10
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

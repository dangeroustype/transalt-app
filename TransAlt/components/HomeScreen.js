import React, { Component } from "react";
import {
  StatusBar,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
} from "react-native";

import firebase from 'react-native-firebase';

import Icon from "react-native-vector-icons/FontAwesome";

import { NavigationActions } from "react-navigation";

class HomeScreen extends Component {

  static navigationOptions = ({navigation, screenProps}) => ({drawerLabel: "Home", title: "TransAlt", headerLeft: (<View style={{
      paddingHorizontal: 10
    }}>
    <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
      <Icon name="bars" size={30} color="#666"/>
    </TouchableOpacity>
  </View>)});



  _navigate(route) {
    return this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: `${route}` })]
      })
    );
  }
  render() {
    return (
      <ScrollView style={styles.container}>


<View style={styles.logoimgcontainer}>

    <Image
  style={styles.logoimg}

    source={require('../assets/img/talogo.png')} />

    </View>

<View style={styles.twobuttons} >

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() =>
            this._navigate("BikeForecast", { isStatusBarHidden: false })}
        >
        <View style={styles.iconRow}>
          <Icon name="calendar" size={50} color="#f15d22" />
        </View>
          <Text style={styles.menuItemText}>Bike Forecast</Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => this._navigate("TravelAdvisories", { isStatusBarHidden: false })}
        >

        <View style={styles.iconRow}>
          <Icon name="exclamation-circle" size={50} color="#f15d22" />
        </View>
          <Text style={styles.menuItemText}>Travel Advisories</Text>

        </TouchableOpacity>

</View>

<View style={styles.twobuttons} >


        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => this._navigate("SendaTip", { isStatusBarHidden: false })}
        >
        <View style={styles.iconRow}>
          <Icon name="paper-plane" size={50} color="#f15d22" />
          </View>
          <Text style={styles.menuItemText}>Send a Tip</Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => this._navigate("GetInvolved", { isStatusBarHidden: false })}
        >
            <View style={styles.iconRow}>
          <Icon name="bullhorn" size={50} color="#f15d22" />
            </View>
          <Text style={styles.menuItemText}>Get More Involved</Text>
          </TouchableOpacity>


</View>

<View style={styles.twobuttons} >

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
               Linking.openURL('https://www.transalt.org/giveapp')

            }}
        >
        <View style={styles.iconRow}>
      <Icon name="star" size={50} color="#f15d22" />
        </View>
          <Text style={styles.menuItemText}>Donate</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => this._navigate("AboutUs", { isStatusBarHidden: false })}
        >

        <View style={styles.iconRow}>
      <Icon name="question-circle" size={50} color="#f15d22" />
        </View>
          <Text style={styles.menuItemText}>About us</Text>
        </TouchableOpacity>

      </View>


    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#e0e0e0',
  },
  twobuttons: {
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',

  },
  menuItem: {
  flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    paddingTop: 20,
    backgroundColor: '#ffffff',
      height: 130,

  },
  menuItemText: {
    padding: 10,
    fontFamily: 'Gotham-Medium',
    color: '#414042',
    fontSize: 15,
    textAlign: 'center',


  },
  iconRow: {
  marginLeft: 'auto',
    marginRight: 'auto'


  },
  logoimg: {

          alignSelf: 'center',
          height: 70,
          width: 250,
  },
  logoimgcontainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
  },
});

HomeScreen.defaultProps = {};

HomeScreen.propTypes = {};

export default HomeScreen;

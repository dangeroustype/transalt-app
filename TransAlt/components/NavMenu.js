import React, { Component } from "react";
import {AppRegistry, View, Text, StyleSheet } from "react-native";



class NavMenu extends Component {

  static navigationOptions = {
    title: 'Nav Menu',
  }

    render() {

  const { navigate } = this.props.navigation

      return (

<View style={styles.NavMenu}>

<Text style={styles.navText}
onPress={() =>
    navigate('Home')
  }>Today&apos;s Forecast
  </Text>
<Text style={styles.navText}>
Travel Advisories
</Text>

<View style={styles.navSection}>
<Text style={[styles.navText]}
>Send a Tip
</Text>
</View>
<Text style={styles.navText}>
Get Involved
  </Text>
<Text style={styles.navText}>
Donate
</Text>
<Text style={styles.navText}>
Membership
</Text>


</View>


)
}

}


const styles = StyleSheet.create({

  NavMenu: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    flex: 1,
  },
  navText: {
    color: '#6da3d0',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 30
  },
  navSection: {
    borderBottomColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 15,
    marginLeft: 25,
    marginRight: 25,
  }



})

  export default NavMenu;

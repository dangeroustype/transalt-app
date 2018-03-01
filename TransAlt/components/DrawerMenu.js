import React, { Component } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import { NavigationActions } from "react-navigation";

class DrawerMenu extends Component {
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
      <View style={styles.container}>
<View
  style={{
    paddingLeft: 10,
    paddingRight: 10,
}}>

    <Image
    style={{

      alignSelf: 'flex-start',
      height: 145,
      width: 200,
}}

    source={require('../assets/img/dotpeoplelockup.png')} />

    </View>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() =>
            this._navigate("BikeForecast", { isStatusBarHidden: false })}
        >
        <View style={styles.iconRow}>
          <Icon name="today" size={24} color="#acacac" />
        </View>
          <Text style={styles.menuItemText}>Bike Forecast</Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => this._navigate("TravelAdvisories", { isStatusBarHidden: false })}
        >

        <View style={styles.iconRow}>
          <Icon name="info" size={24} color="#acacac" />
        </View>
          <Text style={styles.menuItemText}>Travel Advisories</Text>

        </TouchableOpacity>


        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => this._navigate("SendaTip", { isStatusBarHidden: false })}
        >
        <View style={styles.iconRow}>
          <Icon name="send" size={24} color="#acacac" />
          </View>
          <Text style={styles.menuItemText}>Send a Tip</Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => this._navigate("GetInvolved", { isStatusBarHidden: false })}
        >
            <View style={styles.iconRow}>
          <Icon name="record-voice-over" size={24} color="#acacac" />
            </View>
          <Text style={styles.menuItemText}>Get Involved</Text>


        </TouchableOpacity>


        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => this._navigate("Donate", { isStatusBarHidden: false })}
        >
          <Text style={styles.menuItemText}>Donate</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => this._navigate("Membership", { isStatusBarHidden: false })}
        >
          <Text style={styles.menuItemText}>Membership</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => this._navigate("AboutUs", { isStatusBarHidden: false })}
        >
          <Text style={styles.menuItemText}>About us</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#363636',
  },
  menuItem: {
    padding: 10,
    justifyContent: "center",
    marginBottom: 5,
    backgroundColor: '#555555',
  },
  menuItemText: {
    color: '#ffffff',
    fontSize: 18,
    paddingLeft: 35,
  },
  iconRow: {
  width: 100,
  flex: 1,
  }
});

DrawerMenu.defaultProps = {};

DrawerMenu.propTypes = {};

export default DrawerMenu;

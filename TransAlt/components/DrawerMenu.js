import React, { Component } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
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
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() =>
            this._navigate("BikeForecast", { isStatusBarHidden: false })}
        >
        <View style={{flexDirection: "row"}}>
          <Icon name="today" size={30} color="#666" />
          <Text style={styles.menuItemText}>Bike Forecast</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => this._navigate("TravelAdvisories", { isStatusBarHidden: false })}
        >
        <View style={{flexDirection: "row"}}>
          <Icon name="info" size={30} color="#666" />
          <Text style={styles.menuItemText}>Travel Advisories</Text>
            </View>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => this._navigate("SendaTip", { isStatusBarHidden: false })}
        >
        <View style={{flexDirection: "row"}}>
          <Icon name="send" size={30} color="#666" />
          <Text style={styles.menuItemText}>Send a Tip</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => this._navigate("GetInvolved", { isStatusBarHidden: false })}
        >
            <View style={{flexDirection: "row"}}>
          <Icon name="record-voice-over" size={30} color="#666" />
          <Text style={styles.menuItemText}>Get Involved</Text>

            </View>
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
    paddingTop: 100
  },
  menuItem: {
    padding: 10,
    justifyContent: "center",
    backgroundColor: "rgba(12, 12, 12, 0.2)",
    marginBottom: 2
  },
  menuItemText: {
    fontSize: 20
  }
});

DrawerMenu.defaultProps = {};

DrawerMenu.propTypes = {};

export default DrawerMenu;

import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import firebase from 'react-native-firebase';

import BikeForecast from './components/BikeForecast'
import TravelAdvisories from "./components/TravelAdvisories";
import GetInvolved from "./components/GetInvolved";
import Donate from "./components/Donate";
import SendaTip from "./components/SendaTip";
import Membership from "./components/Membership";
import AboutUs from "./components/AboutUs";


import DrawerMenu from "./components/DrawerMenu";

  const MainScreenNavigator = StackNavigator({

    BikeForecast: { screen: BikeForecast },
    TravelAdvisories: { screen: TravelAdvisories },
    SendaTip: { screen: SendaTip },
    GetInvolved: { screen: GetInvolved },
    Donate: { screen: Donate },
    Membership: { screen: Membership },
    AboutUs: { screen: AboutUs },

  });

  const App = DrawerNavigator(
    {
      Main: { screen: MainScreenNavigator }
    },
    {
      contentComponent: DrawerMenu,
      drawerWidth: 220
    }
  );

  export default App;


AppRegistry.registerComponent('BikeForecast', () => App);

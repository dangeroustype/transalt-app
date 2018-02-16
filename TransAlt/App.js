import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";


import BikeForecast from './components/BikeForecast'
import TravelAdvisories from "./components/TravelAdvisories";
import GetInvolved from "./components/GetInvolved";
import Donate from "./components/Donate";
import SendaTip from "./components/SendaTip";
import Membership from "./components/Membership";
import AboutUs from "./components/AboutUs";

import DrawerMenu from "./components/DrawerMenu";


{/*
 @TODO

* Implement navigation
* Style text inside the WebView with our fonts (already done in a subfolder)
* there is a big space under each item when loaded on android
* if 24 hours have passed since last refresh, refresh automatically

@TODO DONE!

* fix html entities in titles (FIXED 2/9 by adding title to HTML blob)
* Currently loading new posts is broken.  (fixed 2/8)
* Posts also don't have the right height when they load in the WebView. (fixed 2/8)

* images don't load, do a find-and-replace on the string (fixed 2/9)
  */}

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

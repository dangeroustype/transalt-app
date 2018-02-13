import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { StackNavigator } from 'react-navigation'


import BikeForecast from './components/BikeForecast'
import NavMenu from './components/NavMenu'

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


const App = StackNavigator({
  Home: { screen: BikeForecast},
  NavMenu: { screen: NavMenu}
}

)

export default App;


AppRegistry.registerComponent('BikeForecast', () => App);

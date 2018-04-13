import React, { Component } from "react";
import { View, Text, WebView, StyleSheet } from 'react-native';
import MyWebView from 'react-native-webview-autoheight';

const customStyle = "<style>* {max-width: 98.5%;} a {color: #ff3600; text-decoration: none} p { line-height: 23px}  body {font-family: sans-serif;} h3 {color: #000;}</style>";



class BikeForecastArticle extends Component {



    render() {
        return (
                  <View style={styles.row}>
                  <Text style={styles.title}>{this.props.title}</Text>
                  <MyWebView style={styles.webcontainer}
                      source={{
                          html: customStyle + this.props.article,
                          baseUrl: "https://www.transalt.org"

                        }}
                      startInLoadingState={true}

                  />




                  </View>


        );
    }
}


const styles = StyleSheet.create({

title: {
  color: '#000000',
  fontSize: 19,
  textAlign: 'left',
  fontFamily: 'Gotham-Bold',
  padding: 13,
},

webcontainer: {
  marginLeft: 5,
},
  row: {

    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    marginBottom: -1,
    borderBottomColor: '#E5EDF5',
    borderTopColor: '#E5EDF5',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },



})

export default BikeForecastArticle;

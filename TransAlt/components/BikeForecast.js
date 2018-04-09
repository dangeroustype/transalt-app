import React, { Component } from "react";
import {AppRegistry, View, TouchableOpacity, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import firebase from 'react-native-firebase';

import BikeForecastArticle from "./BikeForecastArticle";

class BikeForecast extends Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: "Bike Forecast",
    title: "Bike Forecast",
    headerLeft: (
      <View style={{ paddingHorizontal: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
         <Icon name="menu" size={30} color="#666" />
        </TouchableOpacity>
      </View>


    )
  });



    constructor() {
        super();
        this.onEndReachedCalledDuringMomentum = true;
        this.unsubscribe = null;
        this.state = {
            textInput: '',
            loading: true,
            bike_forecast: [],
            refreshing: false,
            page: 1,

        };
        this.ref = firebase.firestore().collection('bike_forecast').orderBy("created", 'DESC');

    }

// @TODO make sure that next page loads work correctly in this architecture



  componentDidMount() {



    this.unsubscribe = this.ref.limit(this.state.page).onSnapshot(this.onCollectionUpdate)

    firebase.analytics().setCurrentScreen('BikeForecast');


    firebase.messaging().requestPermissions(); //for IOS

        firebase.messaging().getToken().then((token) => {
        //  manager.setNotificationToken(token);
          console.log('Device FCM Token: ', token);
        });

        firebase.messaging().onTokenRefresh((token) => {
          console.log('Refreshed FCM token: ', token);
      //    this.manager.setNotificationToken(token);
        });



  }

  componentWillUnmount() {
    this.unsubscribe();
}

onCollectionUpdate = (querySnapshot) => {
  const bike_forecast = [];
  querySnapshot.forEach((doc) => {
    const { article, title } = doc.data();
    console.log ({querySnapshot})
    bike_forecast.push({
      key: doc.id,
      doc, // DocumentSnapshot
      article,
      title

    });
  });

  this.setState({
    bike_forecast,
    loading: false,
 });

}

handleRefresh = () => {

      this.unsubscribe = this.ref.limit(this.state.page).onSnapshot(this.onCollectionUpdate)

      console.log('refreshing')

 };


 onEndReached = ({ distanceFromEnd }) => {
     if(!this.onEndReachedCalledDuringMomentum){

          console.log(this.state.page)

          // update new page number

          this.setState({ page: this.state.page + 1 }, function() {

              // load more posts!

               this.unsubscribe = this.ref.limit(this.state.page).onSnapshot(this.onCollectionUpdate)

          });

         this.onEndReachedCalledDuringMomentum = true;
     }
 }





  render() {
    if (this.state.loading) {
      return (

        <View
          style={{
            paddingVertical: 20,
            borderTopWidth: 1,
            borderColor: "#CED0CE",
            flex: 1,
          }}
        >
          <ActivityIndicator animating size="large" />
          </View>
      )
    }
      return (

            <View style={styles.container}>
            <FlatList
              data={this.state.bike_forecast}
              renderItem={({ item }) => <BikeForecastArticle {...item} />}
              onEndReached={this.onEndReached.bind(this)}
              onEndReachedThreshold={0.5}
              onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
              refreshing={this.state.refreshing}
              onRefresh={this.handleRefresh}
            />
            </View>

      )
    }
}

const styles = StyleSheet.create({


container: {
  flex: 1,
  flexDirection: 'column',

},
  titleView: {
    paddingTop: 10,
    fontSize: 22,
    paddingBottom: 10,

  },

  headerBar: {
    fontSize: 33,
    paddingTop: 35,
    height: 80,
    justifyContent: 'center',
    backgroundColor: '#F7F7F8',
    color: '#000',
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',

  },
  WebViewParent: {

  },
  WebViewStyle: {

    width: '100%',

  },
  FlatList: {
    width: '100%',
  },
  ListItem: {
    width: '100%',
        backgroundColor: 'green'
  },

  container: {
    flex: 1,
  },

  row: {

    padding: 10,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    marginBottom: -1,
    borderBottomColor: '#E5EDF5',
    borderTopColor: '#E5EDF5',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  navText: {
    color: '#6da3d0',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 30
  }



})



export default BikeForecast;

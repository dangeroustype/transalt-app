import React, { Component } from "react";
import {AppRegistry, View, TouchableOpacity, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import HTMLView from 'react-native-htmlview';
import Icon from "react-native-vector-icons/MaterialIcons";
import firebase from 'react-native-firebase';

class TravelAdvisories extends Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: "Travel Advisories",
    title: "Travel Advisories",
    headerLeft: (
      <View style={{ paddingHorizontal: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
         <Icon name="menu" size={30} color="#666" />
        </TouchableOpacity>
      </View>
    )
  });

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 0,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
      firebase.analytics().setCurrentScreen('TravelAdvisories');
  }


    makeRemoteRequest = () => {
      const { page, seed } = this.state;
      const url = `https://www.transalt.org/app/bikeforecast/alerts?_format=json&page=${page}`;
      this.setState({ loading: true });

      fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState({
            data: page === 0 ? res.results : [...this.state.data, ...res.results],
            error: res.error || null,
            loading: false,
            refreshing: false
          });
        })
        .catch(error => {
          this.setState({ error, loading: false });
        });
    };

  handleRefresh = () => {
    this.setState(
      {
        page: 0,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return (



      <View style={styles.container}>



        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <View style={styles.row}>




              <HTMLView
                  value={item.snippet.replace(/(\r\n\t|\n|\r\t)/gm,"")}
                    startInLoadingState={true}
                    stylesheet={styles}
                    addLineBreaks={false}

              />
              <Text style={styles.lastUpdatedText}>Last updated {item.changed} </Text>


                </View>
          )}
          keyExtractor={item => item.nid}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={1}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({

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


lastUpdatedText: {

  color: '#666666',
  textAlign: 'center',
  padding: 15,
  fontFamily: 'Gotham-Bold',

},

  a: {
    color: '#009b40', // make links coloured pink
  },

  p: {
    paddingBottom: 15,
    fontFamily: 'Gotham-Book',
    fontSize: 19,
  },
  strong: {
        fontFamily: 'Gotham-Bold',
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
  },

  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
  },

  row: {
    marginLeft: 5,
    backgroundColor: '#ffffff',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    color: '#6da3d0'
  },
  navText: {
    color: '#6da3d0',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 30
  }



})



export default TravelAdvisories;

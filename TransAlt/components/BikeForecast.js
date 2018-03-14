import React, { Component } from "react";
import {AppRegistry, View, TouchableOpacity, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import MyWebView from 'react-native-webview-autoheight';
import Icon from "react-native-vector-icons/MaterialIcons";

const customStyle = "<style>* {max-width: 100%;} body {font-family: sans-serif;} h3 {color: #000;}</style>";



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
  }


    makeRemoteRequest = () => {
      const { page, seed } = this.state;
      const url = `https://www.transalt.org/app/bikeforecast?_format=json&page=${page}`;
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
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <View style={styles.row}>


              <MyWebView
                  source={{html: customStyle + item.snippet, baseUrl: "https://www.transalt.org"}}
                  startInLoadingState={true}

              />


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

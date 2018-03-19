import React, { Component } from "react";
import {
  Text,
  View,
  WebView,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
  Button
} from "react-native";

import firebase from 'react-native-firebase';

import { NavigationActions } from "react-navigation";

import Icon from "react-native-vector-icons/MaterialIcons";

import t from 'tcomb-form-native'; // 0.6.9

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  email: t.String,
  yourtip: t.String,
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {

      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

var _ = require('lodash');
// clone the default stylesheet
const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

// overriding the text color
stylesheet.textbox.normal.height = 150;

const options = {
  fields: {
    name: {
      label: 'Name',
      error: 'Please enter your name',
      returnKeyType: 'next',
      blurOnSubmit: false,
  //    onSubmitEditing: () => {this.refs.form.getComponent('email').refs.input.focus()},
  //   @TODO Upon hitting next, have the cursor pop into the next text box.
      autoFocus: true,
    },
    email: {
      label: 'Email',
      error: 'We require an email address to follow up with you, if necessary.',
      ref:'yourtip',
      keyboardType: 'email-address',
      autoCapitalize: 'none',
      blurOnSubmit: false,
      returnKeyType: 'next',
      maxHeight: 300,
    },
    yourtip: {
      label: 'Your Tip',
      ref:'yourtip',
      error: 'Please include something to send',
      multiline: true,
      textAlignVertical: 'top',
      stylesheet: stylesheet // overriding the style of the textbox

    },
  },
  stylesheet: formStyles,
};



class SendaTip extends Component {



  static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: "Send a Tip",
    title: "Send a Tip",
    headerLeft: (
      <View style={{ paddingHorizontal: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
         <Icon name="menu" size={30} color="#666" />
        </TouchableOpacity>
      </View>
    )
  });


  handleSubmit = () => {
    const value = this._form.getValue();



fetch('https://hooks.zapier.com/hooks/catch/372105/k6zby5/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    value
  }),
});

  }

  componentDidMount() {
    firebase.analytics().setCurrentScreen('SendaTip');
  }

  render() {
    return (
      <KeyboardAwareScrollView style={styles.container}>
      <View >

      <Text style={styles.intro}>See something out there that we should be aware of?</Text>


        <Form
          ref={c => this._form = c}
          type={User}
          options={options}
        />



        <Button
          title="Send"
          onPress={this.handleSubmit}
        />

      <View style={{ height: 60 }} />

      </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  intro: {
    paddingBottom: 20,
    fontSize: 19,
    textAlign: 'center',
    fontFamily: 'Gotham-Book',

  },

  })

export default SendaTip;

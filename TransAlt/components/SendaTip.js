import React, { Component } from "react";
import {
  Text,
  View,
  WebView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableHighlight,
  Modal,
  Image,
  Button
} from "react-native";

import firebase from 'react-native-firebase';

import { NavigationActions } from "react-navigation";

import Icon from "react-native-vector-icons/MaterialIcons";

import t from 'tcomb-form-native'; // 0.6.9

import ImageFactory from 'react-native-image-picker-form' // for photo upload

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Loader from "./Loader"

const Form = t.form.Form;

const User = t.struct({

  image: t.maybe(t.String),
  name: t.String,
  email: t.String,

  yourtip: t.String,

});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 5
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

stylesheet.textbox.normal.height = 150;
stylesheet.textbox.normal.paddingTop = 5;
stylesheet.textbox.normal.textAlignVertical = 'top'



class SendaTip extends Component {





  static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: "Send a Tip",
    title: "Send a Tip",
    headerLeft: (
      <View style={{ paddingHorizontal: 10 }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
         <Icon name="menu" size={30} color="#666" />
        </TouchableOpacity>
      </View>
    )
  });

  constructor() {

    super();
      this.state = {

         successState: false,
         loading: false,

      };

  }

  clearForm() {
    // clear content from all textbox
    this.setState({
      value: null,


    });

  }


  handleSubmit = () => {
console.log('see state of image field with value?');
   console.log(this.state);

    this.setState({
      loading: true,

    });


    //var value = this.tipform.getValue(); This function does an unwanted
    //validate operation. Refactored below:

const value = this.tipform.refs.input.getValue();

  console.log('new value call. below!');
            console.log(value);

    var rawfilename = value.image

 // is there an image in this post? If so, upload it!

if( rawfilename && rawfilename !== "null" && rawfilename !== "undefined" ){

        console.log('there is an image. upload it!');

    var filename= rawfilename.split('\\').pop().split('/').pop();

    firebase.storage()
    .ref(filename)
    .putFile(value.image)



    .then(uploadedFile => {
        //success



          console.log('Upload of image succeeded!');

            var fulldlurl = uploadedFile.downloadURL + '.jpg'


        const postvalue = Object.assign({}, value, {image: fulldlurl});

            console.log('The full object to be sent to the API follows');

            console.log(postvalue);

          fetch('https://hooks.zapier.com/hooks/catch/372105/k6zby5/', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              postvalue
            }),
          })
            .then(response => {
              if (response.status === 200) {
                return response.json();
              } else {
                throw new Error('Something went wrong on api server!');
              }
            })
            .then(response => {

              console.log('API response follows.');

              console.log(response);

              this.setState({
                loading: false,
                successState: true,
              });

              this.clearForm();

              // ...
            }).catch(error => {
                  console.log('Image upload failed.');
              console.log(error);

              this.setState({
                loading: false
              });

            });

    }) // end uploadfile event


  } else {  // end if image loop


  fetch('https://hooks.zapier.com/hooks/catch/372105/k6zby5/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      value
    }),
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Something went wrong on api server!');
      }
    })
    .then(response => {

        console.log('API response follows.');
      console.log(response);

      this.setState({
        loading: false,
        successState: true,

      });

    }) // end then.response


  }  // end else


} // end handleSubmit


componentWillMount(){

this.props.navigation.closeDrawer();

 }

  componentDidMount() {
    firebase.analytics().setCurrentScreen('SendaTip');


      this.setState({
        successState: false,
        loading: false,
        value: null,
      });

  }


 turnoffSuccess = () => this.setState({ successState: false })

  render() {


    return (


      <KeyboardAwareScrollView style={styles.container}>



      <Modal
        transparent={true}
        animationType={'fade'}
        visible={this.state.successState}
        onRequestClose={this.turnoffSuccess}
        >


         <TouchableWithoutFeedback onPress={this.turnoffSuccess}>
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>


                <Image
                style={styles.image}
                 resizeMode={'contain'}

                source={require('../assets/img/success.png')}
                 />
          <Text style={styles.successtext}>Thank you for sending a tip!</Text>
          </View>
        </View>
          </TouchableWithoutFeedback>

      </Modal>



      <View >
      <Loader
  loading={this.state.loading} />

      <Text style={styles.intro}>See something out there that we should be aware of?</Text>

        <Form
          ref={c => this.tipform = c}
          type={User}
                options={{
                    fields: {
                      name: {
                        label: 'Name *',
                        error: 'Please enter your name',
                        returnKeyType: 'next',
                        blurOnSubmit: false,
                        onSubmitEditing: () => this.tipform.getComponent('email').refs.input.focus(),

                      },
                      email: {
                        label: 'Email *',
                        error: 'We require an email address to follow up with you, if necessary.',
                        ref:'yourtip',
                        keyboardType: 'email-address',
                        autoCapitalize: 'none',
                        autoCorrect: false,
                        blurOnSubmit: false,
                        returnKeyType: 'next',
                        onSubmitEditing: () => this.tipform.getComponent('yourtip').refs.input.focus(),
                        maxHeight: 300,
                      },
                      image: {
                        config: {
                          title: 'Select image',
                          options: ['Open camera', 'Select from gallery', 'Cancel'],
                          // Used on Android to style BottomSheet
                          style: {
                            titleFontFamily: 'Roboto'
                          }
                        },
                        error: 'No image provided',
                        factory: ImageFactory
                      },
                      yourtip: {
                        label: 'Your Tip *',
                        ref:'yourtip',
                        error: 'Please include something to send',
                        multiline: true,
                        returnKeyLabel: 'Enter',
                        stylesheet: stylesheet // overriding the style of the textbox

                      },

                    },
                    stylesheet: formStyles,
  }} />

          <View style={styles.submitbutton}>

        <Button style={styles.submitbuttonitself}

          title="Send"
          onPress={this.handleSubmit}

        />
          </View>

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
  submitbutton: {
    marginBottom: 35,
    height: 70,
  },
  submitbuttonitself: {
      height: 70,
      width: '100%',
      marginBottom: 35,
  },
  intro: {
    paddingBottom: 20,
    fontSize: 19,
    lineHeight: 26,
    textAlign: 'center',
    fontFamily: 'Gotham-Book',

  },
  image: {
    height: 60,

  },
  successtext: {
    textAlign: 'center',
    fontFamily: 'Gotham-Book',
    fontSize: 18,
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 150,
    width: '80%',
    borderRadius: 10,
    paddingTop: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }

  })

export default SendaTip;

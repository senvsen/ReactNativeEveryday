/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';
const Forecast = require('./Forecast');

class Day2Sentiment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      sentiment: '',
      gif: require('./luffy.jpg')
    };
  };

  handleTextChange(event) {
    var searchText = event.nativeEvent.text;
    var _this = this;
    this.setState({searchText: searchText});
    fetch('http://www.airloft.org/api/getSentimentTextMulti?text='
      + searchText)
      .then((response) => response.json())
      .then((responseJSON) => {
        var sentiment = responseJSON.results[0].sentiment
        this.setState({
          sentiment: sentiment
        });
        var firstSenti = sentiment[0].split("/")[0];
        var url = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + firstSenti;
        fetch(url)
        .then((imgresponse) => imgresponse.json())
        .then(function(imgresponseJSON){
          console.log(imgresponseJSON.data.image_url);
          _this.setState({
            gif: imgresponseJSON.data.image_url
          });
        })
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  render() {
    var content = null;
    if (this.state.sentiment !== null) {
      content = <Forecast mainText={this.state.sentiment} />;
    }
    return (
      <View style={styles.container}>
          <View style={styles.overlay}>
           <View style={styles.row}>
             <Text style={styles.mainText}>
               Analyze emotion for:
             </Text>
             <View style={styles.sentiContainer}>
               <TextInput
                 style={[styles.zipCode, styles.mainText]}
                 onSubmitEditing={this.handleTextChange.bind(this)}
                 />
             </View>
           </View>
           {content}
         </View>
         <Image style={styles.mainGif} source={this.state.gif}>
         </Image>
      </View>
    );
  }

}

const baseFontSize = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  overlay: {
    flex: 3,
    backgroundColor: '#000',
    opacity: 0.6,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainGif: {
    flex: 6,
    backgroundColor: '#343434',
    width: null,
    height: null
  },
  row: {
    flex: 1,
    flexWrap: 'nowrap',
    justifyContent: 'center',
    paddingTop: 40
  },
  sentiContainer: {
    flex: 1,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
  },
  zipCode: {
    width: 50,
    height: baseFontSize,
  },
  mainText: {
    flex: 1,
    fontSize: baseFontSize,
    color: '#FFFFFF'
  }
});

AppRegistry.registerComponent('Day2Sentiment', () => Day2Sentiment);

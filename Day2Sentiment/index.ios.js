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
      sentiment: 'happy'
    };
  };

  handleTextChange(event) {
    var searchText = event.nativeEvent.text;
    this.setState({searchText: searchText});
    fetch('http://www.airloft.org/api/getSentimentTextMulti?text='
      + searchText)
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({
          sentiment: responseJSON.results[0].sentiment
        });
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  render() {
    var content = null;
    if (this.state.sentiment !== null) {
      content = <Forecast main={this.state.sentiment} />;
    }
    return (
      <View style={styles.container}>
          <View style={styles.overlay}>
           <View style={styles.row}>
             <Text style={styles.mainText}>
               Current sentiment for
             </Text>
             <View style={styles.zipContainer}>
               <TextInput
                 style={[styles.zipCode, styles.mainText]}
                 onSubmitEditing={this.handleTextChange.bind(this)}/>
             </View>
           </View>
           {content}
         </View>
      </View>
    );
  }

}

const baseFontSize = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column'
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: 30
  },
  zipContainer: {
    flex: 1,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
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

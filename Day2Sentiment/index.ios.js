/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
const Forecast = require('./Forecast');
class Day2Sentiment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStart: false,
      searchText: '',
      sentiment: '',
      gif: 'http://ww1.sinaimg.cn/large/72f96cbagw1f52lv09lzgj211o0vstda',
      notice: ''
    };
  };

  handleTextChange(text) {
    var searchText = text;
    var _this = this;
    this.setState({
      isStart: true,
      searchText: searchText
    });
    fetch('http://www.airloft.org/api/getSentimentTextMulti?text='
      + searchText)
      .then((response) => response.json())
      .then((responseJSON) => {
        var sentiment = responseJSON.results[0].sentiment
        this.setState({
          sentiment: sentiment
        });
        var firstSenti = sentiment[0].split("/")[0];
        _this.handleGifFetch(firstSenti, _this);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  /**
   * _this: points to current component.
   */
  handleGifFetch(text, _this){
    var url = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + text;
    fetch(url)
    .then((imgresponse) => imgresponse.json())
    .then(function(imgresponseJSON){
      console.log(imgresponseJSON.data.image_url);
      _this.setState({
        gif: imgresponseJSON.data.image_url
      });
    })
  };

  onPress(event){
    if(this.state.isStart == true){
      var searchText = this.state.sentiment[0].split("/")[0];
      this.handleGifFetch(searchText, this);
    }
  };

  render() {
    var {height, width} = Dimensions.get('window');
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
                 style={styles.mainText}
                //  onSubmitEditing={this.handleTextChange.bind(this)}
                 onChangeText={this.handleTextChange.bind(this)}
                 />
             </View>
           </View>
           {content}
         </View>
         <TouchableOpacity style={styles.mainGif} onPress={this.onPress.bind(this)}>
           <Image style={[styles.mainGif, {
             width: width
           }]} source={{uri: this.state.gif}}>
           </Image>
         </TouchableOpacity>

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
    flex: 5,
    height: null
  },
  row: {
    flex: 1,
    flexWrap: 'nowrap',
    justifyContent: 'center',
    paddingTop: 50
  },
  sentiContainer: {
    flex: 1,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
  },
  mainText: {
    flex: 1,
    height: baseFontSize,
    fontSize: baseFontSize,
    color: '#FFFFFF'
  }
});

AppRegistry.registerComponent('Day2Sentiment', () => Day2Sentiment);

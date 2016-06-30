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
  Navigator
} from 'react-native';
const Home = require('./Home');
const PostDetailed = require('./PostDetailed');

class Day3SimpleNavigator extends Component {

  renderScene(route, navigator) {
    if(route.name == 'Main'){
      return <Home navigator={navigator} />
    }
    if(route.name == 'Article') {
      return <PostDetailed navigator={navigator} {...route.passProps} />
    }
  };

  render() {
    return (
      <Navigator
        style={styles.navigator}
        initialRoute={{
          name: 'Main',
        }}
        renderScene={ this.renderScene }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  navigator: {
    flex: 1,
    margin: 20
  },
});

AppRegistry.registerComponent('Day3SimpleNavigator', () => Day3SimpleNavigator);

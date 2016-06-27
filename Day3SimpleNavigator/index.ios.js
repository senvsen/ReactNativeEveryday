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
  NavigatorIOS
} from 'react-native';
const Home = require('./Home');

class Day3SimpleNavigator extends Component {
  render() {
    return (
      <NavigatorIOS
        barTintColor='#48BBEC'
        titleTextColor='#FFF'
        style={styles.navigator}
        initialRoute={{
          title: 'My blog',
          component: Home
        }}
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
    flex: 1
  },
});

AppRegistry.registerComponent('Day3SimpleNavigator', () => Day3SimpleNavigator);

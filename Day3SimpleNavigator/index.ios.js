/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
const NavigatorEntry = require('./NavigatorEntry');

class Day3SimpleNavigator extends Component {

  render() {
    return (
      <NavigatorEntry />
    );
  }
}

AppRegistry.registerComponent('Day3SimpleNavigator', () => Day3SimpleNavigator);

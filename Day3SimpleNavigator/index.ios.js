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

class Day3SimpleNavigator extends Component {

  renderScene(route, navigator) {
    return < route.component {...route.passProps} navigator={navigator} />
  };

  render() {
    return (
      <Navigator
        style={styles.navigator}
        initialRoute={{
          name: 'Home',
          component: Home
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

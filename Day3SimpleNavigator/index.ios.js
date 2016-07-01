/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  TabBarIOS
} from 'react-native';
const NavigatorEntry = require('./NavigatorEntry');
const Welcome = require('./welcome');

class Day3SimpleNavigator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'welcome'
    };
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'welcome'}
          systemIcon="featured"
          onPress={() => {this.setState({selectedTab: 'welcome'});}}>
          <Welcome/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'navigatorEntry'}
          systemIcon="contacts"
          onPress={() => {this.setState({selectedTab: 'navigatorEntry'});}}>
          <NavigatorEntry/>
        </TabBarIOS.Item>
      </TabBarIOS>
      // <NavigatorEntry />
    );
  }
}

AppRegistry.registerComponent('Day3SimpleNavigator', () => Day3SimpleNavigator);

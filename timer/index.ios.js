/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { icons } from './theme';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

class timer extends Component {
  render() {
      return (
        <View style={styles.container}>
          <View style={styles.timerDisplayLayout}>
            <View style={styles.timerCircle}>
              <Text style={styles.mainLabel}>
                00:00
              </Text>

              <Text style={styles.subLabel}>
                00
              </Text>
            </View>
          </View>

          <View style={styles.controlsLayout}>
            <Image source={icons.start} style={styles.startIcon} />
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },

  timerCircle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    borderColor: '#fff',
    borderWidth: 5,
    borderRadius: 100,
  },

  mainLabel: {
    color: '#fff',
    fontSize: 50
  },

  subLabel: {
    color: '#fff',
    fontSize: 20,
    marginTop: 15,
    marginLeft: 1
  },

  startIcon: {
    tintColor: '#fff'
  },

  // flexDirection set default to column.
  timerDisplayLayout: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,0,0,0.3)',
  },

  controlsLayout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,255,0,0.3)',
  },
});

AppRegistry.registerComponent('timer', () => timer);

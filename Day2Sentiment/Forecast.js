import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';


class Forecast extends Component {
  render() {
    return (
      <Image style={styles.bgImage}>
        <View>
          <Text style={styles.preText}>
            {this.props.mainText}
          </Text>
        </View>
      </Image>
    );
  }
};

var styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    width: null,
    height: null
  },
  preText: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  mainText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF'
  }
})

module.exports = Forecast;

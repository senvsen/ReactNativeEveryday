import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.home}>
        <Text>
          hello world!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1
  }
});

module.exports = Home;

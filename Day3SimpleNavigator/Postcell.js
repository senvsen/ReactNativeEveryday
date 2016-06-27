import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

class Postcell extends Component {
  render() {
    return (
      <TouchableHighlight style={styles.container}>
        <Image style={styles.profileImg} source={{uri: 'http://ww1.sinaimg.cn/large/72f96cbagw1f52lv09lzgj211o0vstda'}} />
        <View style={styles.rightCol}>
          <Text>
          'interesting!'
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 40
  },
  profileImg: {
    flex: 1,
    margin: 5,
    width: null,
    height: null
  },
  rightCol: {
    flex: 3,
    flexDirection: 'column'
  }
});

module.exports = Postcell;

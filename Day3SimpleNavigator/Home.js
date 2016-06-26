import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
const Post = require('./Post');

class Home extends Component {

  _handleListBook() {
    console.log("pressed!");
    this.props.navigator.push({
      title: 'Book Shelf',
      component: Post
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBlock} />
        <View style={styles.bottomBlock}>
          <TouchableHighlight style={styles.button}
          onPress={this._handleListBook.bind(this)}
          underlayColor="#99d9f4">
            <Text style={styles.buttonText}>
              List books
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topBlock: {
    flex: 2
  },
  bottomBlock: {
    flex: 1
  },
  button: {
    flex: 1,
    backgroundColor: '#48BBEC',
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center',
    margin: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center'
  }
});

module.exports = Home;

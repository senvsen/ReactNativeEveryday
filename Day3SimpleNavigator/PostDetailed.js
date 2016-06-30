import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  WebView
} from 'react-native';

/**
 * Template for each detailed article, use react-native-htmltext to render inline html markup.
 */
class PostDetailed extends Component {
  _filterImgFromHTML(content) {

  };

  render() {
    return (
      <WebView
      ref={'webview'}
      automaticallyAdjustContentInsets={false}
      style={styles.webview}
      source={{uri: this.props.link}} />
    );
  }
}

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    marginTop: 50
  }
});

module.exports = PostDetailed;

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
  render() {
    return (
      <WebView
      ref={'webview'}
      automaticallyAdjustContentInsets={false}
      style={styles.webview}
      html={this.props.content} />
    );
  }
}

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    margin: 10
  }
});

module.exports = PostDetailed;

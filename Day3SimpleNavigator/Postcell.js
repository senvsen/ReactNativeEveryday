import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const PostDetailed = require('./PostDetailed');

class Postcell extends Component {

  _cellTapped() {
      console.log("pressed!", this.props.data.title);
      this.props.navigator.push({ // All these properties will be a property of route.
        component: PostDetailed,
        passProps: {
          content: this.props.data.content,
          link: this.props.data.link
        },
        navTitle: this.props.data.title
      })
  };

  render() {
    return (
      <TouchableHighlight
        underlayColor = '#ddd'
        onPress={ this._cellTapped.bind(this) }>
        <View style={styles.row}>
          <View style={styles.profileContainer}>
            <Image style={styles.profileImg} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}></Image>
          </View>
          <View style={styles.rightCol}>
            <Text>
              {this.props.data.title}
            </Text>
            <Text style={styles.postAuthor}>
              {this.props.data.author}
            </Text>
          </View>
          <View style={styles.favBtn}>
            <Icon name="heart" size={20} color="#CFCFCF" />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImg: {
    height: 50,
    width: 50
  },
  rightCol: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 10
  },
  postAuthor: {
    marginTop: 10,
    color: "#ACACAC",
    fontSize: 13
  },
  favBtn: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

module.exports = Postcell;

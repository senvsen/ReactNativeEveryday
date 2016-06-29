import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
  Image
} from 'react-native';

const Postcell = require('./Postcell');
const PostDetailed = require('./PostDetailed');
const blogdata = require('./data.json');

class Home extends Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(blogdata.items)
    };
  };

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    );
  };

  // TODO: how to pass this.props.navigator to each row component.
  _renderRow(rowData){
    return (
      <Postcell data={rowData} />
    )
  }
}


const styles = StyleSheet.create({});

module.exports = Home;

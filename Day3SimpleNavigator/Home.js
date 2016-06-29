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

    // this.state = {
    //   dataSource: ds.cloneWithRows([])
    // };
    // var url = "http://rss2json.com/api.json?rss_url=http%3A%2F%2Fchocoluffy.com%2Fatom.xml";
    // fetch(url).then((response) => response.json())
    // .then((responseJSON) => {
    //   this.setState({
    //     dataSource: responseJSON.items
    //   })
    // })
    this.state = {
      dataSource: ds.cloneWithRows(blogdata.items)
    };
  };

  // _handleListBook() {
  //   console.log("pressed!");
  //   this.props.navigator.push({
  //     title: 'Book Shelf',
  //     component: Postcell
  //   })
  // };

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />

      // <View style={styles.container}>
      //   <View style={styles.topBlock} />
      //   <View style={styles.bottomBlock}>
      //     <TouchableHighlight style={styles.button}
      //     onPress={this._handleListBook.bind(this)}
      //     underlayColor="#99d9f4">
      //       <Text style={styles.buttonText}>
      //         List books
      //       </Text>
      //     </TouchableHighlight>
      //   </View>
      // </View>
    );
  };

  // how to render a customer component.
  _renderRow(rowData){
    return (
      <Postcell data={rowData} />
    )
  }
}


const styles = StyleSheet.create({});

module.exports = Home;

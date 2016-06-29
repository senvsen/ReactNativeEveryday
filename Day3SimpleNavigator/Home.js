import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Postcell = require('./Postcell');
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
  }

  _renderRow(rowData: string){
    return (
      // <Postcell>
      // {rowData.title}
      // </Postcell>
      <TouchableHighlight style={styles.cellContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.profileContainer}>
            <Image style={styles.profileImg} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}></Image>
          </View>
          <View style={styles.rightCol}>
            <Text>
              {rowData.title}
            </Text>
            <Text style={styles.postAuthor}>
              {rowData.author}
            </Text>
          </View>
          <View style={styles.favBtn}>
            <Icon name="heart" size={20} color="#CFCFCF" />
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}


const styles = StyleSheet.create({
  cellContainer: {
    flex: 1
  },
  contentContainer: {
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

module.exports = Home;

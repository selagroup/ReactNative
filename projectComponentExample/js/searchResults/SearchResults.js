'use strict';

import React, { Component } from 'react'
import {  
  FlatList,
} from 'react-native';
 import ListItem from './ListItem';

export default class SearchResults extends Component {
  static navigationOptions = {
    title: 'Results',
  };

  _keyExtractor = (item, index) => index.toString();

  _renderItem = ({item, index}) => (
    <ListItem
      item={item}
      index={index}
      onPressItem={this._onPressItem}
    />
  );
  
  _onPressItem = (index, item) => {
    console.log("Pressed row: " + index + " Item:" + item.title);
    this.props.navigation.navigate('Details', {property: item});
  };

  render() {
    const { params } = this.props.navigation.state;
    return (
      <FlatList
        data={params.listings}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }  
}
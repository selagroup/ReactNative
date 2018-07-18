'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from 'react-native';
import styles from '../../infra/style';


export default class GridItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.index, this.props.item);
  }

  render() {
    const item = this.props.item;    
    return (
      <TouchableHighlight onPress={this._onPress}
                          underlayColor='#ddffdd'>
        <View>
          <View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }
}
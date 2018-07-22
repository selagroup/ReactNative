'use strict';

import React, { PureComponent } from 'react'
import {
  Image,
  View,
  TouchableHighlight,
  Text
} from 'react-native';
import styles from '../style';


export default class ListItem extends PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.index, this.props.item);
  }

  //TODO: 

  render() {
    const item = this.props.item;
    const price = item.price_formatted.split(' ')[0];
    return (
      <TouchableHighlight
        onPress={this._onPress}
        underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <Image style={styles.thumb} source={{ uri: item.img_url }} />
            <View style={styles.textContainer}>
              <Text style={styles.price}>{price}</Text>
              <Text style={styles.title}
                    numberOfLines={1}>{item.title}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }
}
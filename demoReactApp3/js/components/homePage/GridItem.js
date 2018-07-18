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
import { Card } from "react-native-elements";
import styles from '../../infra/style';


export default class GridItem extends React.PureComponent {
  _onPressTitle = () => {
    this.props.onPressTitle(this.props.index, this.props.item);
  }
  _onPressSpeaker = () => {
    this.props.onPressSpeaker(this.props.index, this.props.item);
  }

  render() {
    const item = this.props.item;    
    return (
      <Card title={null}
              image={null}
              containerStyle={styles.cardItem}>
          <View style={styles.columnRightContainer}>
            
                <Text style={{ color: '#2D89EF' }}
                      onPress={this._onPressTitle}>{item.title}</Text>
                <Text style={{ marginTop: 4, color: '#FFA500' }}
                      onPress={this._onPressSpeaker}>{item.speaker}</Text>            
          </View>
        </Card>   
    );
  }
}
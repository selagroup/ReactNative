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


export default class HeaderItem extends React.PureComponent {
  
  render() {
    const item = this.props.item;    
    return (
      <Card title={null}
              image={null}
              containerStyle={styles.cardItem}>
          <View style={styles.columnRightContainer}>
            
                <Text style={{ color: '#2D89EF', fontSize: 20 }}>{item}</Text>               
            
          </View>
        </Card>   
    );
  }
}
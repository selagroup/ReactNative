'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import styles from '../style';

export default class PropertyDetails extends Component {
    static navigationOptions = {
      title: 'Details',
    };  
    
    constructor(props) {
      super(props);      
    }
  
    render() { 
        const { params } = this.props.navigation.state;   
        const price = params.property.price_formatted.split(' ')[0];
        const description = params.property.bedroom_number + ' bedrooms, ' + params.property.bathroom_number + ' bathrooms';        
        
        return (
            
          <View style={styles.columnContainer}>
              <Image source={{ uri: params.property.img_url }} 
                     style={{ height: params.property.img_height, width: params.property.img_width, alignSelf: 'center' }} />
              <Text style={styles.pricePadded}>
                  {price}
              </Text>
              <Text style={styles.descriptionLeft}>
                  {params.property.title}
              </Text>
              <Text style={styles.descriptionLeft}>
                  {description}
              </Text>
          </View>
      );
    }  
}
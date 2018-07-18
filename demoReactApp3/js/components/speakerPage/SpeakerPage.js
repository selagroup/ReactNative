'use strict';

import React, { Component } from 'react';
import {    
    Text,
    View
} from 'react-native';
import styles from '../../infra/style';


export default class SpeakerPage extends Component {

    constructor(props) {
        super(props);        
    }

    render() {
        return ( 
            <View>       
                <Text style={styles.titlePadded}>{this.props.speaker.name}</Text>
                <Text style={styles.descriptionLeft}>{this.props.speaker.bio}</Text>
            </View>
        );
      }
}
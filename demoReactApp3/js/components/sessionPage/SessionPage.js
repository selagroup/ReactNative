'use strict';

import React, { Component } from 'react';
import {    
    Text,
    View,
    ScrollView
} from 'react-native';
import styles from '../../infra/style';


export default class SessionPage extends Component {

    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <ScrollView> 
                <View>       
                    <Text style={styles.titlePadded}>{this.props.session.title}</Text>
                    <View style={styles.rowContainer}>
                        <Text style={styles.rowItem}>{this.props.session.time}</Text>
                        <Text>{this.props.session.speaker}</Text>
                    </View>    
                    <Text style={styles.descriptionLeft}>{this.props.session.abstract}</Text>
                    <View style={styles.rowContainer}>
                        <Text style={styles.rowTitle}>Prerequisites:</Text>
                        <Text style={styles.wrappedText}>{this.props.session.prerequisites}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.rowTitle}>Language:</Text>
                        <Text>{this.props.session.language}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.rowTitle}>Level:</Text>
                        <Text>{this.props.session.level}</Text>
                    </View>
                </View>
            </ScrollView> 
        );
      }
}
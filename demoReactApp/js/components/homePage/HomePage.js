'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    ActivityIndicator,
    Image,
} from 'react-native';
import styles from '../../infra/style';

export default class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.executeQuery();
    }    

    render() {
        const spinner = this.props.isLoading ? <ActivityIndicator size='large' /> : null;
        return (
            <View style={styles.container}>
                <Text style={styles.description}>Hi</Text>
                <Text style={styles.description}>There</Text>
                {spinner}
                <Text style={styles.description}>{this.props.message}</Text>
            </View>
        );
    };    
}
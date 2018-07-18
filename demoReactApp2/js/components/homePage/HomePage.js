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
    FlatList
} from 'react-native';
import styles from '../../infra/style';
import * as consts from '../../infra/consts';
import GridItem from './GridItem';

export default class HomePage extends Component {

    constructor(props) {
        super(props);        
    }

    componentDidMount() {
        this.props.getQuery(consts.SESSIONS_API);
        this.props.getQuery(consts.SPEAKERS_API);
        this.props.getQuery(consts.TRACKS_API);
    } 

    _keyExtractor = (item, index) => index.toString();

    _renderItem = ({item, index}) => (
    <GridItem
        item={item}
        index={index}
        onPressItem={this._onPressItem} />
    );

    _onPressItem = (index, item) => {
        console.log("Pressed row: " + index + " Item:" + item.title);    
    };    

    render() {
        const spinner = this.props.isLoading ? <ActivityIndicator size='large' /> : null;
        return (
            <View style={styles.container}>                
                {spinner}
                <FlatList
                    data={this.props.sessions}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem} />
                
                <Text style={styles.description}>{this.props.message}</Text>
            </View>
        );
    }
}
'use strict';

import React, { Component } from 'react';
import {
    Alert,
    Text,
    View,
    ActivityIndicator,
    Image,
    FlatList,
    ScrollView
} from 'react-native';
import styles from '../../infra/style';
import * as consts from '../../infra/consts';
import GridItem from './GridItem';
import HeaderItem from './HeaderItem';
import HorizontalHeaderItem from './HorizontalHeaderItem';
import WorkshopCard from './WorkshopCard';
import * as arrayHelper from '../../infra/arrayHelper';
import {Actions} from 'react-native-router-flux';

export default class HomePage extends Component {

    constructor(props) {
        super(props); 
         
    }   
    
    componentDidMount() {
        // this.props.getQuery(consts.SESSIONS_API);
        // this.props.getQuery(consts.SPEAKERS_API);
        // this.props.getQuery(consts.TRACKS_API); 
        this.props.getMultipleQueries([consts.SESSIONS_API, consts.SPEAKERS_API, consts.TRACKS_API]);     
      }

    _keyExtractor = (item, index) => 
    {
        return item.title + item.day.toString() + item.slot.toString() + item.track.toString() + index.toString();
    }

    _headerKeyExtractor = (item, index) => index.toString();

    _renderItem = ({item, index}) => (
        <WorkshopCard
            item={item}
            index={index}
            onPressTitle={this._onPressTitle} 
            onPressSpeaker={this._onPressSpeaker} />
    );

    _renderGridItem = ({item, index}) => (
        <GridItem
            item={item}
            index={index}
            onPressTitle={this._onPressTitle} 
            onPressSpeaker={this._onPressSpeaker} />
    );

    _renderHeaderItem = ({item, index}) => (
        <HeaderItem
            item={item}
            index={index} />
    );

    _onPressTitle = (index, item) => {
        console.log("Pressed row: " + index + " Item:" + item.title); 
        this.props.navigateToSession(item);
    }; 

    _onPressSpeaker = (index, item) => {
        console.log("Pressed row: " + index + " Item:" + item.title);        
        this.props.navigateToSpeaker(item);
    };
    
    _renderGrid(dayArray)
    {
        return dayArray.map((item) => 
        {
            return (                        
                <View style={{ flexDirection:'row', paddingRight: 10}}> 
                    <HorizontalHeaderItem
                        item={item[0].time}
                        index={0} />
                    <FlatList horizontal
                        scrollEnabled={false}
                        data={item}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderGridItem} />                   
                </View>
           );
        });
    }

    _renderHeaders(titles)
    {
        return (
            <FlatList horizontal
                    scrollEnabled={false}
                    data={titles}
                    keyExtractor={this._headerKeyExtractor}
                    renderItem={this._renderHeaderItem} /> 
        );
    }
    
    _renderDays()
    {
        return this.props.days.map((item) => 
        {
            const dayArray = arrayHelper.getDeepArray(item, "sessions");

            if(dayArray.length == 1) // Whole day sessions
            {
                return (                        
                     <View style={styles.rowContainer}>
                        <View style={styles.simpleColumnContainer}>
                            <Text style={styles.titlePadded}>{item.description}</Text>
                            <FlatList horizontal
                                data={dayArray[0]}
                                keyExtractor={this._keyExtractor}
                                renderItem={this._renderItem} />
                        </View>
                     </View>
                );
            }
            else // Hourly sessions
            {                
                dayArray.forEach(row => {
                    if(row.length < item.trackTitles.length)
                    {   
                        for (let index = 0; index < item.trackTitles.length - 1; index++) 
                        {
                            row.push(row[0]); // To fill the whole row with the same element                      
                        }
                    }
                });

                item.trackTitles.unshift('Time'); // Add Time as a first title to titles
                return (  
                    <View style={styles.rowContainer}>
                        <View style={styles.simpleColumnContainer}>
                            <Text style={styles.titlePadded}>{item.description}</Text>
                            <ScrollView horizontal={true}>
                                <View style={styles.simpleColumnContainer}>
                                    {this._renderHeaders(item.trackTitles)}
                                    {this._renderGrid(dayArray)}
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                );
            }      
        });        
    }

    render() 
    {
        const spinner = this.props.isLoading ? <ActivityIndicator size='large' /> : null;

        if(this.props.message != null && this.props.message != '')
        {
            Alert.alert(
                'Error',
                this.props.message,
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: true }
              )
        }

        return (
                <ScrollView>                
                    {spinner}                
                    {this._renderDays()}                    
                </ScrollView>            
        );
    }    
}
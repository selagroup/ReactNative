/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MaterialCalendarComponent from './js/MaterialCalendarComponent'

export default class App extends Component 
{
  constructor(props) 
  {
    super(props);
    this.state = { dateObject: {} };
  }

  render() 
  {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to MaterialCalendarView
        </Text>
        <MaterialCalendarComponent 
          style={styles.calendarView} 
          onDateChange={(dateObject) => 
            {
              dateObject.month = dateObject.month + 1;
              this.setState({ dateObject });
            }}
          day={20} 
          month={7} 
          year={2018} 
        />
        <Text style={styles.instructions}>
          {JSON.stringify(this.state.dateObject)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    padding: 20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  calendarView: {
    width: 400,
    height: 400,
  }
});

'use strict';

import React, { Component } from 'react'
import {
  createStackNavigator,
} from 'react-navigation';
import SearchPage from './js/searchPage/SearchPage';
import SearchResults from './js/searchResults/SearchResults';
import PropertyDetails from './js/propertyDetails/PropertyDetails';

const RootStack = createStackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults },
  Details: { screen: PropertyDetails }
});

export default class App extends Component {
  render() {
    return <RootStack/>;
  }
}
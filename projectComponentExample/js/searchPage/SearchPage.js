'use strict';

import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Button,
    ActivityIndicator,
    Image
  } from 'react-native';
import styles from '../style';

export default class SearchPage extends Component {
  static navigationOptions = {
    title: 'Property Finder',
  };

  constructor(props) {
    super(props);
    this.state = {
      searchString: 'london',
      isLoading: false,
      message: '',
    };
  }

  render() {    
    const spinner = this.state.isLoading ? <ActivityIndicator size='large' /> : null;
    return (
        <View style={styles.container}>
          <Text style={styles.description}>
            Hi
            </Text>
          <Text style={styles.description}>
            There.
            </Text>
          <View style={styles.flowRight}>
            <TextInput
              underlineColorAndroid={'transparent'}
              style={styles.searchInput}
              value='london'
              placeholder='Search via name or postcode' />
            <Button
              onPress={this._executeQuery}
              color='#48BBEC'
              title='Go' />
          </View>
          <Image source={require('../../resources/house.png')} style={styles.image} />
          {spinner}
          <Text style={styles.description}>{this.state.message}</Text>
      </View>
    );
  }

  _executeQuery = () => {
    const query = this._urlForQueryAndPage('place_name', this.state.searchString, 1);
    console.log(query);
    this.setState({ isLoading: true });
    fetch(query)
      .then(response => response.json())
      .then(json => this._handleResponse(json.response))
      .catch(error => this.setState({ isLoading: false, message: 'Something bad happened ' + error }));
  }  

  _handleResponse = (response) => {
    this.setState({ isLoading: false, message: '' });
    if (response.application_response_code.substr(0, 1) === '1') {
      this.props.navigation.navigate('Results', { listings: response.listings });
    } else {
      this.setState({ message: 'Location not recognized; please try again.' });
    }
  }

  _urlForQueryAndPage = (key, value, pageNumber) => {
    const data = {
        country: 'uk',
        pretty: '1',
        encoding: 'json',
        listing_type: 'buy',
        action: 'search_listings',
        page: pageNumber,
    };
    data[key] = value;
  
    const querystring = Object.keys(data)
      .map(key => key + '=' + encodeURIComponent(data[key]))
      .join('&');
  
    return 'https://api.nestoria.co.uk/api?' + querystring;
  }
}


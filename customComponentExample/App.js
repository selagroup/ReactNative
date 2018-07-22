import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import CustomText from './js/CustomText';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>
                  Welcome to React Native!
        </Text>

        <CustomText buttonStyles={styles.buttonStyles}
                    textStyles={styles.textStyles}>
                  This is a custom control
        </CustomText>
        
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
  textStyles: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
  },
  buttonStyles: {
    padding:10,
	  backgroundColor: '#202646',
	  borderRadius:5  
  },
});

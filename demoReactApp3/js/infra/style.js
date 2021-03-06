'use strict';

import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    description: {
      marginBottom: 20,
      fontSize: 18,
      textAlign: 'center',
      color: '#656565'
    },
    container: {
      padding: 20,
      marginTop: 20,
      alignItems: 'center',
      backgroundColor: '#ffffff'
    },
    flowRight: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'stretch',
    },
    searchInput: {
      height: 36,
      padding: 4,
      marginRight: 5,
      flexGrow: 1,
      fontSize: 18,
      borderWidth: 1,
      borderColor: '#48BBEC',
      borderRadius: 8,
      color: '#48BBEC',
    },
    image: {
      width: 217,
      height: 138,
    },
    thumb: {
      width: 80,
      height: 80,
      marginRight: 10
    },
    textContainer: {
      flex: 1
    },
    separator: {
      height: 1,
      backgroundColor: '#dddddd'
    },
    price: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#48BBEC'
    },
    title: {
      fontSize: 20,
      color: '#656565'
    },
    rowContainer: {
      flexDirection: 'row',
      padding: 10,
      flexWrap: 'wrap',
      backgroundColor: '#ddddff',
    },
    imageWrapper: {
      flexDirection:'row',
    },
    largeImage: {
      flex: 1,
      height: 138,
    },
    columnContainer: {
      flexDirection:'column',
      marginTop:20
    },
    descriptionLeft: {
      marginBottom: 20,
      fontSize: 18,
      color: '#656565',
      padding: 10
    },
    titlePadded: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#48BBEC',
      padding: 10
    },
    gridItem: {
      flex: 1,
      height: 160,
      margin: 1,
    },
    columnRightContainer: {
      flexDirection:'column',
      alignItems: 'flex-start'
    },
    simpleColumnContainer: {
      flexDirection:'column'
    },
    cardItem: {
      margin: 0, 
      padding: 20, 
      height: 140, 
      width: 200, 
      backgroundColor: '#ffffff'
    },
    rowItem: {
      marginRight: 10
    },
    wrappedText:{
      flexWrap: 'wrap'
    },
    rowTitle:{
      marginRight: 4,
      fontWeight: 'bold'
    }
  });  
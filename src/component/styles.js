import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { getPropertyName, getStylesForProperty } from 'css-to-react-native';


export  default StyleSheet.create({
  navBar: {
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    resizeMode: 'cover',
    width: null,
    height: null,
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
        flexDirection: 'column',
        backgroundColor: '#EFEFEF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20,
  },
  text: {
    color: 'black',
    fontFamily: 'Helvetica',
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontVariant: [],
    lineHeight: 16,
    marginTop: 5,
    marginRight: 7,
    marginBottom: 2,
    marginLeft: 7,

  },
  buttomContainer: {
    color: '#2980b9',
    paddingVertical: 15,
  },
  buttomText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
  listItem: {     
    flex: 1,     
    fontSize: 16,     
    color: 'white'   
  },   
  selectedListItem: {     
    color: 'green'   
  },
  divider: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
  },
  navbar: {
    paddingTop: 20,
    height: 64,
    backgroundColor: '#F4F4F4',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#DDDDDD',
    paddingHorizontal: 12,
    flexDirection: 'row', // step 1
    justifyContent: 'space-between', // step 2
    alignItems: 'center', // step 3
  },
  headerText: {
    color: '#FFF',
    fontWeight: '800',
    fontSize: 23,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  bodyText: {
    padding: 10,
    fontSize: 15,
    color: '#5D5D5D',
  },
  image: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    height: 275,
    margin: 10,
    backgroundColor: 'darkgray'
  },
  header: {
    width: window.width,
    height: window.width,
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 90,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#B00020',
    flex: 1,
    color: '#FFFFFF',
},

})
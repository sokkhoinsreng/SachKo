
import React, { Component } from 'react';
import { FlatList, Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import MainCard from '../../component/mainCard';
import images from '../../dummy';
import Carousel from '../../component/carousel';
import { observer, inject } from 'mobx-react'

@inject('products')
@observer
export default class HomeScreen extends Component {

componentDidMount() {
  this.props.products.fetchProduct()
}
  render() {
    const { products } = this.props.products;
    
    return (
      <View style={styles.containerStyle}>
        <View style={styles.harder}>
          <Text style={styles.textharder}>សាច់គោ</Text>
        </View>

        <View style={styles.textTitellHarder}>
          <Text style={styles.titelhomecard}>Popular</Text>
          <TouchableOpacity>
            <Text>
              SEE ALL
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          numColumns={2}
          style={styles.mainCard}
          keyExtractor={(item, index) => index.toString()}
          data={products}
          renderItem={({ item }) => 
          <MainCard
            // index={index}
            {...item}
          />}
        />

      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
  },
  harder: {
    margin: 0,
    height: '12%',
    backgroundColor: '#F53B55',
    justifyContent: 'center',

  },
  mainCard: {
    padding: 5,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  textharder: {
    marginLeft: 15,
    marginTop: 35,
    fontSize: 20,
    fontWeight: '900',
    color: '#FFF',
    fontFamily: 'Times',
  },
  titelhomecard: {
    marginLeft: 15,
    marginTop: 10,
    fontSize: 20,
    fontWeight: '900',
    color: 'black',
    fontFamily: 'Arial',
  },
  textTitellHarder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 10,

  },
}


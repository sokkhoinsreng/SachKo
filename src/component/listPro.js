//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, TextInput } from 'react-native';
import { observer, inject } from 'mobx-react';
import Ionicons from "react-native-vector-icons/Ionicons";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const color = "#373737";
const activeColor = "#F15C53";
@inject('onProduct')
@observer

class ListProduct extends Component {

    componentWillMount() {
        this.props.onProduct.selectedID(this.props.index)
    };

    renderButton() {
        if (this.props.onProduct.items == 0) {
            return (
                <TouchableOpacity style={styles.btncard}

                    onPress={() => this.props.onProduct.onAdd(this.props.item)}
                >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                        <Image
                            style={{ width: 13, height: 13, marginRight: 5, }}
                            source={require('../images/plus.png')} />
                        <Text style={styles.textbtn}>

                            EDIT
                    </Text>
                    </View>
                </TouchableOpacity>
            )
        }
        else {
            return (
                <View style={styles.mainbtn}>

                    <TouchableOpacity
                        style={[styles.btncard, { width: 30 }]}
                        onPress={() => this.props.onProduct.onReduce(this.props.index)}
                    >
                        <Text style={{ fontSize: 26, fontWeight: '700', marginTop: -5, color: 'white' }}>-</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={{ textAlign: 'center', color: '#000' }}
                        value={this.props.onProduct.items.toString()}
                        placeholderTextColor={'#000'}
                        onChangeText={(value) => { this.props.onProduct.onType(value, this.props.index) }}
                    />
                    <TouchableOpacity
                        onPress={() => this.props.onProduct.onAdd(this.props.index)}
                        style={[styles.btncard, { width: 30 }]}
                    >

                        <Image
                            style={{ width: 13, height: 13, }}
                            source={require('../images/plus.png')} />
                    </TouchableOpacity>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <View style={styles.activeView}>
                        <View style={styles.innerActiveView}></View>
                    </View>
                    <Text style={styles.textheader}>
                        {this.props.packing}KG
                    </Text>
                </View>
                <View style={styles.cardBody}>
                    <Image style={styles.image} source={{ uri: this.props.imageUrl }} />
                    <Text style={[styles.cardText, { color: '#000', fontWeight: '900' }]}>{this.props.productName}</Text>
                    <Text style={[styles.cardText, { textDecorationLine: 'line-through' }]}>${this.props.discount}</Text>
                    <Text style={[styles.cardText, { fontWeight: '900' }]}>${this.props.price}</Text>
                    <Text style={[styles.cardText, { fontWeight: '500' }]}>{this.props.productDescription}</Text>
                    {this.renderButton()}
                    <Text
                        minimumFontScale={5}
                        style={[styles.cardText, { fontWeight: '900' }]}>Total: ${(this.props.price * this.props.onProduct.items).toFixed(2)}</Text>
                    <Text style={styles.cardText}>{this.props.discription}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 72,
    },
    card: {
        borderWidth: 0.1,
        borderColor: '#333',
        flex: 1,
        margin: 5,
        shadowColor: 'black',
        shadowOpacity: .1,
        shadowRadius: 5,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15,
        paddingVertical: 10,

    },
    cardText: {
        marginVertical: 2.5,
        color: '#333',
    },
    cardBody: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderRadius: 0,

    },
    activeView: {
        width: 15,
        height: 15,
        borderColor: '#AED09A',
        borderWidth: 2,
    },
    innerActiveView: {
        marginLeft: 0.3,
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: '#7DCC30',
    },
    textheader: {
        color: '#84878A',
    },
    btncard: {
        marginVertical: 10,
        backgroundColor: '#F53B57',
        width: 80,
        height: 25,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
        marginLeft: 5,
    },
    textbtn: {
        color: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '700'
    },
    mainbtn: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },

});
export default ListProduct;




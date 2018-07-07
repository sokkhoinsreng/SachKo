//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList, Image, SafeAreaView, } from 'react-native';
import Carousel from './carousel';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class SeachMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { viewRef: null };
    }

    imageLoaded() {
        this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
    }

    render() {
       
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.side}>
                    <Carousel
                        layout={'default'}
                        data={ENTRIES2}
                    />
                </SafeAreaView>

            </View>
        );
    }
}

// define your styles 
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
    },
    side:{
        shadowOpacity: .1,
    },
    homelistmenu: {
        width: '100%',
        height: 50,
        backgroundColor: '#EFEFEF',
        marginTop: 5,
        marginBottom: -2,
    },
    listmenu: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardText: {
        marginVertical: 2.5,
        color: '#333',
        fontWeight: '900',
        marginRight: 7,
        marginLeft: 10,
    },
    image: {
        width: 100,
        height: 42,
    },
});
export default SeachMenu;

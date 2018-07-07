import React, { Component } from 'react';
import { TouchableOpacity, Dimensions, Image, SafeAreaView, View, Text, findNodeHandle, StyleSheet, } from 'react-native'
import Carousel from '../../component/carousel';
import { BlurView } from 'react-native-blur';

export default class LoginForm extends Component {

    
    constructor(props) {
        super(props);
        this.state = { viewRef: null };
    }

    imageLoaded() {
        this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
    }

    render() {

        const ENTRIES2 = [
            {
                title: 'Favourites landscapes 1',
                subtitle: 'Lorem ipsum dolor sit amet',
                illustration: 'https://i.imgur.com/SsJmZ9jl.jpg'
            },
            {
                title: 'Favourites landscapes 2',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                illustration: 'https://i.imgur.com/5tj6S7Ol.jpg'
            },
            {
                title: 'Favourites landscapes 3',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat',
                illustration: 'https://i.imgur.com/pmSqIFZl.jpg'
            },
            {
                title: 'Favourites landscapes 4',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                illustration: 'https://i.imgur.com/cA8zoGel.jpg'
            },
            {
                title: 'Favourites landscapes 5',
                subtitle: 'Lorem ipsum dolor sit amet',
                illustration: 'https://i.imgur.com/pewusMzl.jpg'
            },
            {
                title: 'Favourites landscapes 6',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat',
                illustration: 'https://i.imgur.com/l49aYS3l.jpg'
            }
        ];
        return (
            <View style={styles.container}>

                <Image
                    ref={(img) => { this.backgroundImage = img; }}
                    source={require('../../images/background.jpg')}
                    style={styles.absolute}
                    onLoadEnd={this.imageLoaded.bind(this)}
                />
                <BlurView
                    style={styles.absolute}
                    viewRef={this.state.viewRef}
                    blurType="light"
                    blurAmount={10}
                />


                <SafeAreaView style={styles.side}>
                    <Carousel
                        layout={'default'}
                        data={ENTRIES2}
                    />
                <Text style={styles.title}>Hi, I am some unblurred text</Text>
                    
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('HomeScreen')}
                        style={styles.buttomContainer}>
                        <Text style={styles.buttomText}>LOGIN</Text>
                        
                    </TouchableOpacity>
                </SafeAreaView>

            </View>
       );
    }
}

const styles = {

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        flexDirection: 'column'
    },
    absolute: {
        position: "absolute",
        top: 0, left: 0, bottom: 0, right: 0,
    },
    buttomContainer: {
        backgroundColor: '#ecf0f1',
        color: '#2980b9',
        paddingVertical: 15,
    },
    buttomText: {
        textAlign: 'center',
        color: '#7f8c8d',
        fontWeight: '700',
    },
    title:{
        textAlign: 'center',
        flex: 10,
    }
}
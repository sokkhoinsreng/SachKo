//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Picker } from 'react-native';
import { observer, inject } from 'mobx-react';
import Ionicons from "react-native-vector-icons/Ionicons";


@inject('products')
@observer
// create a component
class FormAddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Brand: '',
            CategoryType: '',
            Country: '',
            ImageUrl: '',
            Discount: '',
            Origin: '',
            Packing: '',
            Price: '',
            ProductName: '',
            ProductDescription: '',
            Uom: '',
        };
    }
    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.harder}>
                    <Text style={styles.textharder}>ADD PRODUCTS</Text>
                </View>
                <ScrollView style={styles.formInsert}>
                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>Brand:</Text>
                        <Picker
                            selectedValue={this.state.Brand}
                            style={styles.picker}
                            onValueChange={(itemValue, ) => this.setState({ Brand: itemValue })}>
                            <Picker.Item label="USA" value="USA" />
                            <Picker.Item label="Canada" value="Canada" />
                        </Picker>
                    </View>
                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>CategoryType:</Text>
                        <Picker
                            selectedValue={this.state.CategoryType}
                            style={styles.picker}
                            onValueChange={(itemValueType, ) => this.setState({ CategoryType: itemValueType })}>
                            <Picker.Item label="BEEF" value="BEEF" />
                            <Picker.Item label="LAMB" value="LAMB" />
                        </Picker>
                    </View>
                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>Country:</Text>
                        <TextInput
                            placeholder='Country'
                            onChangeText={(text) => this.setState({ Country: text })}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>ImageUrl:</Text>
                        <TextInput
                            placeholder='ImageUrl'
                            onChangeText={(text) => this.setState({ ImageUrl: text })}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>Discount:</Text>
                        <TextInput
                            placeholder='Discount'
                            onChangeText={(text) => this.setState({ Discount: text })}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>Origin:</Text>
                        <TextInput
                            placeholder='Origin'
                            onChangeText={(text) => this.setState({ Origin: text })}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>Packing :</Text>
                        <TextInput
                            placeholder='Packing'
                            onChangeText={(text) => this.setState({ Packing: text })}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>Price :</Text>
                        <TextInput
                            placeholder='Price'
                            onChangeText={(text) => this.setState({ Price: text })}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>ProductName:</Text>
                        <TextInput
                            placeholder='ProductName'
                            onChangeText={(text) => this.setState({ ProductName: text })}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>ProductDescription:</Text>
                        <TextInput
                            placeholder='ProductDescription'
                            onChangeText={(text) => this.setState({ ProductDescription: text })}
                            style={styles.textInput}
                        />
                    </View> <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>Uom:</Text>
                        <TextInput
                            placeholder='Uom'
                            onChangeText={(text) => this.setState({ Uom: text })}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.mainbtnadd}>
                        <TouchableOpacity
                            style={styles.buttonAdd}
                            onPress={() => this.props.products.addProduct(
                                // this.props.id.getId(),
                                this.state.Brand,
                                this.state.CategoryType,
                                this.state.Country,
                                this.state.ImageUrl,
                                this.state.Discount,
                                this.state.Origin,
                                this.state.Packing,
                                this.state.Price,
                                this.state.ProductName,
                                this.state.ProductDescription,
                                this.state.Uom,
                            )}
                        >
                            <Text style={{ color: '#FFF', alignItems:'flex-end' }}>ADD</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    harder: {
        margin: 0,
        height: '12%',
        width: '100%',
        backgroundColor: '#F53B55',
        justifyContent: 'center',
        alignItems: 'center',

    },
    textharder: {
        marginLeft: 15,
        marginTop: 35,
        fontSize: 20,
        fontWeight: '900',
        color: '#FFF',
        fontFamily: 'Times',
    },
    formInsert: {
        backgroundColor: '#F8F8F8',
        flex: 1,
    },
    picker: {
        width: 100,
        marginTop: -50,
        marginBottom: -50,
        justifyContent: 'flex-end'
    },
    tittelcardaddproduct: {
        marginTop: 10,
        marginLeft: 15,
        marginBottom: 5,
    },
    nametitel: {
        color: 'red',
        fontWeight: '900',
        marginLeft: 15,
    },
    mainbtnadd: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonAdd: {
        marginVertical: 10,
        backgroundColor: '#F53B57',
        width: 140,
        height: 45,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
        marginLeft: 5,
    },
    textInput: {
        width: '90%',
        height: 40,
        borderWidth: 1,
        borderColor: '#1FB98C',
        borderRadius: 10,
        padding: 10,
        marginBottom: 5,
        marginTop: 5,
        marginLeft: 15,
        backgroundColor: '#FFFFFF',
        shadowOpacity: 0.1,
    },

});

//make this component available to the app
export default FormAddProduct;

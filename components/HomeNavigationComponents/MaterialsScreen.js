import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, Image, TouchableOpacity, ScrollView} from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class MaterialsScreen extends Component {
    static navigationOptions= { title:'Materials'}

    handleGoToConfirm = () => {
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.navigate('Confirm');
    };

    handleGoToTakePhoto = () => { this.props.navigation.navigate('TakePhoto');}

    render(){
        return (
            <View style={styles.container}>
                <Text style={{fontSize:25, padding:10}}>VÆLG MATERIALER OG FARVE</Text>
                <ScrollView>
                <Image style={styles.logo} source = {require('.//img/reol.png')}/>

                <View style={{flexDirection:'row', padding: 10, width:'100%'}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>Stelfarve:</Text>
                    <Text style={{fontSize:20}}> [ Input felt ]</Text>
                </View>

                <View style={{flexDirection:'row', padding: 10, width:'100%', marginBottom: 30}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>Træfarve:</Text>
                    <Text style={{fontSize:20}}>  [ Input felt ]</Text>
                </View>

                <View style={styles.container}>
                    <TouchableOpacity style={styles.button2} onPress={this.handleGoToTakePhoto} >
                        <Text style={styles.buttonText} >SE MØBLET I DIT HJEM </Text>
                        <Icon name="camera" size={20} color="white"/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={this.handleGoToConfirm} >
                        <Text style={styles.buttonText} >GÅ VIDERE</Text>
                        <Icon name="arrow-right-circle" size={20} color="white"/>
                    </TouchableOpacity>






                </View>

            </ScrollView>

            </View>
        );
    };
}


const styles2 = StyleSheet.create({

    container: {
        //borderWidth: 5,
        paddingTop:10,
        //paddingBottom:200,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height:'100%',
        width: '100%',
    },

    text: {
        fontSize: 20,
    },

    containerHorizontal: {
        flex: 1,
        //borderWidth: 5,
        paddingTop:10,
        paddingBottom:10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        //height:'100%',
        flexDirection: 'row',
        marginTop: 10,
        width: '100%',

    },

    containerHeader: {
        flex: 1,
        //borderWidth: 5,
        width: '100%',
        //height: 800,
        alignItems: 'center',

    },

});

const styles = StyleSheet.create({
    container: {
        //borderWidth: 5,
        paddingTop:0,
        //paddingBottom:200,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height:'100%',
        width: '100%',
    },
    containerHorizontal: {
        flex: 4,
        //borderWidth: 5,
        paddingTop:0,
        paddingBottom:10,
        //justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'green',
        //height:'100%',
        flexDirection: 'row',
        marginTop: 0,
        width: '100%',

    },

    containerHeader: {
        flex: 1,
        //borderWidth: 5,
        width: '100%',
        //height: 800,
        alignItems: 'center',
        //backgroundColor: 'red',
        //marginTop: 10,
        paddingTop: 20,
        //paddingBottom: 10,

    },
    textHeader: {
        fontSize: 25,
    },

    text: {
        fontSize: 20,
        paddingLeft: 20,
    },

    imageText: {
        alignItems: 'center',
        color: '#278FFE',
        fontSize: 16,
        marginEnd: 30,
        marginStart: 30,
    },

    logo: {
        height: 375,
        width: 375,
    },


    button: {
        //borderWidth: 1,
        backgroundColor: '#009688',
        margin: 5,
        borderRadius: 2,
        width: 270,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    button2: {
        //borderWidth: 1,
        backgroundColor: '#607d8b',
        margin: 5,
        borderRadius: 2,
        width: 270,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    buttonText: {
        fontSize: 18,
        color: 'white',
        marginStart: 5,
        marginEnd: 5,
    },


});
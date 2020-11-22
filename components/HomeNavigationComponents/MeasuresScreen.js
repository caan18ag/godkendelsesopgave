import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity, Image} from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class MeasuresScreen extends Component {
    static navigationOptions= {
        title:'Measures'
    }

    handleGoToMaterials = () => {
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.navigate('Materials');
    };


    render(){
        return (
            <View style={styles.container}>
                <Text style={{fontSize:25, padding:10}}>VÆLG MÅL</Text>
                <Image style={styles.logo} source = {require('.//img/reol2.png')}/>

                <View style={{flexDirection:'row', padding: 10, width:'100%'}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>Bredde:</Text>
                    <Text style={{fontSize:20}}> [ Input felt ]</Text>
                </View>

                <View style={{flexDirection:'row', padding: 10, width:'100%'}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>Dybde:</Text>
                    <Text style={{fontSize:20}}>  [ Input felt ]</Text>
                </View>

                <View style={{flexDirection:'row', padding: 10, width:'100%'}}>
                    <Text style={{fontSize:20,  fontWeight:'bold'}}>Højde:</Text>
                    <Text style={{fontSize:20}}>   [ Input felt ]</Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleGoToMaterials} >
                    <Text style={styles.buttonText} >MATERIALER OG FARVER</Text>
                    <Icon name="arrow-right-circle" size={20} color="white"/>
                </TouchableOpacity>


            </View>
        );
    };
}

/* STYLING */

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
        height: 250,
        width: 375,
    },

    button: {
        //borderWidth: 1,
        backgroundColor: '#009688',
        margin: 40,
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
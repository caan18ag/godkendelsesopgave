import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import { Ionicons } from '@expo/vector-icons';

export default class TypeScreen extends Component {
    static navigationOptions= {
        title:'Type'
    }

    GoToMeasures = (route)=>{
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.navigate('Measures');
    };

    render(){
        return (
            <View style={styles.container}>

                <View style={styles.containerHeader}>
                    <Text style={styles.text}>VÆLG MØBELTYPE NEDENFOR</Text>
                </View>

                <View style={styles.containerHorizontal}>
                    <TouchableOpacity styles={styles.imageText} onPress={()=> alert('Kommer snart!')}>
                        <Image style={styles.logo} source = {require('../NewNavigationComponents/img/tv-kopi.png')}/>
                        <Text style={styles.imageText}>TV-MØBEL</Text>
                    </TouchableOpacity>

                    <TouchableOpacity styles={styles.imageText} onPress={()=> alert('Kommer snart!')}>
                        <Image style={styles.logo} source = {require('../NewNavigationComponents/img/bogreol.png')}/>
                        <Text style={styles.imageText}>BOGREOL</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerHorizontal}>
                    <TouchableOpacity styles={styles.imageText} onPress={()=> alert('Kommer snart!')}>
                        <Image style={styles.logo} source = {require('../NewNavigationComponents/img/kommode.png')}/>
                        <Text style={styles.imageText}>KOMMODE</Text>
                    </TouchableOpacity>

                    <TouchableOpacity styles={styles.imageText} onPress={()=> alert('Kommer snart!')}>
                        <Image style={styles.logo} source = {require('../NewNavigationComponents/img/natbord.png')}/>
                        <Text style={styles.imageText}>TV-MØBEL</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerHorizontal}>
                    <TouchableOpacity styles={styles.imageText} onPress={()=> alert('Kommer snart!')}>
                        <Image style={styles.logo} source = {require('../NewNavigationComponents/img/spisebord.png')}/>
                        <Text style={styles.imageText}>SPISEBORD</Text>
                    </TouchableOpacity>

                    <TouchableOpacity styles={styles.imageText} onPress={this.GoToMeasures}>
                        <Image style={styles.logo} source = {require('../NewNavigationComponents/img/skostativ.png')}/>
                        <Text style={styles.imageText}>SKOSTATIV</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    };
}

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
        flex: 3,
        //borderWidth: 5,
        paddingTop:0,
        paddingBottom:10,
        justifyContent: 'center',
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
    text: {
        fontSize: 25,
    },

    imageText: {
        alignItems: 'center',
        color: '#278FFE',
        fontSize: 16,
        marginEnd: 30,
        marginStart: 30,
    },

    logo: {
        height: 110,
        width: 110,
    }
});
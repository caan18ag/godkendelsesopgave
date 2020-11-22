import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, Image, TouchableOpacity, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default class DescriptionScreen extends Component {
    static navigationOptions= {
        title:'Description'
    }

    GoToMeasures = (route)=>{
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.navigate('Measures');
    };

    render(){
        return (
            <View style={styles.container}>
                <Text style={{fontSize:25, padding:10}}>BESKRIVELSE</Text>
                <ScrollView style={styles.StyledView}>
                    <Image style={styles.logo} source = {require('.//img/reol.png')}/>
                    <Text style={{fontSize:25, padding:10}}>Stålreol</Text>
                    <Text style={{fontSize:20, paddingTop:0, padding:10, fontWeight:'bold'}}>Fra 800 kr</Text>

                    <View style={styles.containerHorizontal}>
                    <TouchableOpacity style={styles.button} onPress={this.GoToMeasures} >
                        <Text style={styles.buttonText} >BESTIL</Text>
                    </TouchableOpacity>
                    <Ionicons name="ios-heart-empty" size={30} color="black"/>
                    </View>
                    
                    <Text style={styles.text}>
                        Denne stålreol kan vægophænges og laves i forskellige mål. Træet er af gamle stilladsbrædder. Kan også laves i andre farver.
                    </Text>
                    <Text style={styles.text}>Reolen på billederne måler 1 m, 19,5 dyb og 38 cm høj.</Text>

                </ScrollView>

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
    text: {
        fontSize: 20,
        padding: 10,
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

    StyledView:{
        //height:1000,
    },

    button: {
            //borderWidth: 1,
            backgroundColor: '#009688',
            margin: 10,
            borderRadius: 2,
            width: 270,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginRight: 35,
        },
        buttonConfirm: {
            //borderWidth: 1,
            backgroundColor: 'green',
            margin: 10,
            borderRadius: 20,
            width: 270,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
        },
        buttonText: {
            fontSize: 20,
            color: 'white',
            //marginStart: 5,
            //marginEnd: 5,
        },
});
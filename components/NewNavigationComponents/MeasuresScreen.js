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

                <View style={styles.containerHeader}>
                    <Text style={styles.textHeader}>VÆLG MÅL FOR DIT SKOSTATIV</Text>
                </View>

                <View style={styles.containerHorizontal}>

                    <Image style={styles.logo} source = {require('../NewNavigationComponents/img/skostativ1.png')}/>
                    <Text style={styles.text}>Bredde: [ Input felt ]</Text>


                </View>

                <View style={styles.containerHorizontal}>

                    <Image style={styles.logo2} source = {require('../NewNavigationComponents/img/skostativ2.png')}/>
                    <Text style={styles.text}>Dybde: [ Input felt ]</Text>

                </View>

                <View style={styles.containerHorizontal}>

                    <Image style={styles.logo3} source = {require('../NewNavigationComponents/img/skostativ3.png')}/>
                    <Text style={styles.text}>Højde: [ Input felt ]</Text>

                </View>

                <View style={styles.container}>
                    <TouchableOpacity style={styles.button} onPress={this.handleGoToMaterials} >
                        <Text style={styles.buttonText} >MATERIALER OG FARVER</Text>
                        <Icon name="arrow-right-circle" size={20} color="white"/>
                    </TouchableOpacity>

                </View>

            </View>
        );
    };
}

/* STYLING */
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

    container2: {
        paddingTop:200,
        paddingBottom:200,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height:'100%'
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
        height: 100,
        width: 150,
        marginLeft: 10,
    },

    logo2: {
        height: 140,
        width: 100,
        marginLeft: 10},

    logo3: {
        height: 70,
        width: 140,
        marginLeft: 16,
    },

    button: {
        //borderWidth: 1,
        backgroundColor: '#419DFF',
        margin: 10,
        borderRadius: 20,
        width: 270,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 50,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        marginStart: 5,
        marginEnd: 5,
    },


});


//Der sker noget meget mærkeligt her --> det bliver vist i et helt andet view.
/*
<TouchableOpacity style={styles.button}
                                      onPress={alert('Denne funktion er IN PROGRESS. ' +
                                          'Her skal det være muligt at tage et billede af f.eks. sin stue og indtaste nogle mål ' +
                                          '(evt automatik ved en målebåndsfunktion ligesom IKEA) og' +
                                          'så vil møblet vise sig, således at man kan "afprøve" sit customized møbel derhjemme')} >
                        <Text style={styles.buttonText} >SE DIT MØBEL I DIT HJEM</Text>
                    </TouchableOpacity>
 */
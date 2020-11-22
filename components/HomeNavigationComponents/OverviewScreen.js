import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class OverviewScreen extends Component {
    static navigationOptions= {
        title:'Overview'
    }

    /*Navigation til Vælg Type*/
    GoToType = (route) => {
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.navigate('Browse');
    };

    /* Navigation til valg af mål*/
    GoToMeasures = (route)=>{
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.navigate('Measures');
    };

    /* Navigation til materiale og farve*/
    GoToMaterials = (route) => {
        this.props.navigation.navigate('Materials');
    }
    /* Navigation til preview af ordre og confirmation*/
    GoToConfirm = (route) => {
        this.props.navigation.navigate('Confirm');
    }



    render(){
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 25, textAlign: 'center'}}>Lad os komme i gang med at customize dit møbel ! {"\n"}</Text>

                <TouchableOpacity style={styles.button} onPress={this.GoToType} >
                    <Text style={styles.buttonText} >1: MØBELTYPE</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={this.GoToMeasures} >
                    <Text style={styles.buttonText} >2: MÅLSPECIFIKATIONER</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={this.GoToMaterials} >
                    <Text style={styles.buttonText} >3: MATERIALER OG FARVER</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonConfirm} onPress={this.GoToConfirm} >
                    <Icon name="check" size={20} color="white"/>
                    <Text style={styles.buttonText} >SEND ORDRE</Text>
                </TouchableOpacity>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        paddingTop:100,
        paddingBottom:100,
        //borderColor: 'black',
        //borderWidth: 20,
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        //height:'100%'
    },
    container2: {
        //borderColor: 'red',
        borderWidth: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
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
        fontSize: 18,
        color: 'white',
        marginStart: 5,
        marginEnd: 5,
    },

    text: {
        fontSize: 20,
    },
});
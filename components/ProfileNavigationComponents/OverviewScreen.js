import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import Icon from 'react-native-vector-icons/SimpleLineIcons';

/* Eksporterer klasse/komponent til ProfileScreen*/
export default class OverviewScreen extends Component {
    static navigationOptions= {
        title:'Overview'
    }

    /*Navigation til DetailsScreen*/
    handleGoToDetails = (route) => {
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.navigate('Details');
    };

    /* Navigation til AppSettingsScreen*/
    GoToAppSettings = (route)=>{
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.navigate('AppSettings');
    };

    /* Navigation til OrderHistoryScreen*/
    GoToOrderHistory = (route) => {
        this.props.navigation.navigate('OrderHistory');
    }
    /* Navigation til DraftScreen*/
    GoToDrafts = (route) => {
        this.props.navigation.navigate('Drafts');
    }


    //handleButtonPress = () => { this.box.current.setTitle(this.state.inputFieldValue); };
    //handleTextChange = (text) => { this.setState({inputFieldValue: text}); };

    render(){
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 40}}> Hej Caroline! {"\n"}</Text>

                <TouchableOpacity style={styles.button} onPress={this.handleGoToDetails} >
                    <Text style={styles.buttonText} >RET INFORMATIONER</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={this.GoToDrafts} >
                    <Text style={styles.buttonText} >VIS GEMTE KLADDER</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={this.GoToOrderHistory} >
                    <Text style={styles.buttonText} >ORDREHISTORIK</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.GoToAppSettings} >
                    <Icon name="settings" size={20} color="white"/>
                    <Text style={styles.buttonText} >APP-INDSTILLINGER</Text>
                </TouchableOpacity>
            </View>
        );
    };
}

/* Styling */
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
    buttonOld: {
        //borderWidth: 1,
        backgroundColor: '#419DFF',
        margin: 10,
        borderRadius: 20,
        width: 220,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    button: {
        //borderWidth: 1,
        backgroundColor: '#009688',
        margin: 10,
        borderRadius: 2,
        width: 220,
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
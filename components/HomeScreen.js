import React, { Component } from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

/*Eksporterer komponent til TabNavigator i App.js*/
export default class HomeScreen extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Icon name="home" size={32} color="red"/>
                <Text style={styles.text}>
                    Hej velkommen til Møbelsnedker Anders Andersen
                </Text>
                <Text>
                    Her kan du bestille customized møbler. Gå til fanen "Ny" og opret en ordre, som jeg vil levere ASAP
                    {"\n"}
                </Text>
                <Image style={styles.logo} source={require('../assets/tv.png')} />
            </View>
        );
    };
}

/* Styling */
const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 20,
    },
    container: {
        //borderColor: 'red',
        borderWidth: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
    },
    container2: {
        borderColor: 'red',
        borderWidth: 2,
        paddingTop: 50,
        //height: '20%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    logo: {
        height: 128,
        width: 180,
    }
});
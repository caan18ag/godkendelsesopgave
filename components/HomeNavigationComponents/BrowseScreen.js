import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, Image, TouchableOpacity, ScrollView} from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import { Ionicons } from '@expo/vector-icons';

export default class BrowseScreen extends Component {
    static navigationOptions= {
        title:'Browse'
    }

    GoToDescription = (route)=>{
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.navigate('Description');
    };

    render(){
        return (
            <View style={styles.container}>
                <Text style={{fontSize:25, padding:10}}>UDVALGTE ANNONCER</Text>
                <ScrollView style={styles.StyledView}>

                <View style={styles.containerHorizontal}>
                    <TouchableOpacity styles={styles.imageText} onPress={this.GoToDescription}>
                        <Image style={styles.logo} source = {require('.//img/reol.png')}/>
                        <Text style={styles.text}>Stålreol</Text>
                    </TouchableOpacity>

                    <TouchableOpacity styles={styles.imageText} onPress={()=> alert('Tom annonce')}>
                        <Image style={styles.logo} source = {require('.//img/plankebord2.png')}/>
                        <Text style={styles.text}>Plankebord</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerHorizontal}>
                    <TouchableOpacity styles={styles.imageText} onPress={()=> alert('Tom annonce')}>
                        <Image style={styles.logo} source = {require('.//img/plankebord.png')}/>
                        <Text style={styles.text}>Plankebord</Text>
                    </TouchableOpacity>

                    <TouchableOpacity styles={styles.imageText} onPress={()=> alert('Tom annonce')}>
                        <Image style={styles.logo} source = {require('.//img/flisekube.png')}/>
                        <Text style={styles.text}>Flisekube</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerHorizontal}>
                    <TouchableOpacity styles={styles.imageText} onPress={()=> alert('Tom annonce')}>
                        <Image style={styles.logo} source = {require('.//img/flisebord.png')}/>
                        <Text style={styles.text}>Flisebord</Text>
                    </TouchableOpacity>

                    <TouchableOpacity styles={styles.imageText} onPress={()=> alert('Tom annonce')}>
                        <Image style={styles.logo} source = {require('.//img/hylde.png')}/>
                        <Text style={styles.text}>Hylde af paller</Text>
                    </TouchableOpacity>
                </View>

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
        fontSize: 20,
        //paddingBottom: 10,
    },

    imageText: {
        //alignItems: 'center',
        //color: '#278FFE',
        fontSize: 16,
        //marginEnd: 30,
        //marginStart: 30,
    },

    logo: {
        height: 175,
        width: 175,
        margin: 5,
    },

    StyledView:{
        //height:1000,
    }
});
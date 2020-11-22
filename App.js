import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import { Image, StyleSheet } from "react-native-web";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import NewScreen from "./components/NewScreen";
import HomeScreen from "./components/HomeScreen";
import DeliveryScreen from "./components/DeliveryScreen";
import ChatScreen from "./components/ChatScreen";
import ProfileScreen from "./components/ProfileScreen";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const TabNavigator = createBottomTabNavigator(
    {
        /*Tilføj routes*/
        Home: {
            /*NewScreen loades først*/
            screen: HomeScreen,
            /*Indstillinger til navigation*/
            navigationOptions: {
                /*Navn*/
                tabBarLabel:"Hjem",
                /*Ikon*/
                tabBarIcon: ({ tintColor }) => (
                    <Entypo name="home" size={30} color={tintColor} />
                )
            },
        },

        Chat: {
            screen: ChatScreen,
            navigationOptions: {
                tabBarLabel:"Chat",
                tabBarIcon: ({tintColor}) => (
                    <Ionicons name="ios-chatbubbles" size={30} color={tintColor}/>
                )
            }
        },



        /*Navn på Route*/
        New: {
            screen: NewScreen,
            navigationOptions: {
                tabBarLabel:"Sælg",
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-add" size={30} color={tintColor} />
                )
            },
        },

        Delivery: {
            screen: DeliveryScreen,
            navigationOptions: {
                tabBarLabel:"Leveringer",
                tabBarIcon: ({tintColor}) => (
                    <Ionicons name="ios-paper-plane" size={30} color={tintColor}/>
                )
            }
        },

        /*Navn på Route*/
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarLabel:"Profil",
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-person" size={30} color={tintColor} />
                )
            },
        },

    },
    /*Generelle label indstillinger*/
    {
        tabBarOptions: {
            showIcon:true,
            labelStyle: {
                fontSize: 15,
            },
            activeTintColor: '#009688',
            inactiveTintColor: 'gray',
            size:40
        }
    }


)
/*Eksporterer TabNavigator så der bliver vist noget på skærmen når applikationen kører*/
export default createAppContainer(TabNavigator)

/*Styling*/
const styles = StyleSheet.create({
    tabIcon: {
        width: 32,
        height: 32,
    },
});





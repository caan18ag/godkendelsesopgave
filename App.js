import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import { Image, StyleSheet } from "react-native-web";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import HomeScreen from "./components/HomeScreen";
import NewScreen from "./components/NewScreen";
import ProductsScreen from "./components/ProductsScreen";
import ProfileScreen from "./components/ProfileScreen";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const TabNavigator = createBottomTabNavigator(
    {
        /*Tilføj routes*/
        Home: {
            /*HomeScreen loades først*/
            screen: HomeScreen,
            /*Indstillinger til navigation*/
            navigationOptions: {
                /*Navn*/
                tabBarLabel:"Home Page",
                /*Ikon*/
                tabBarIcon: ({ tintColor }) => (
                    <Entypo name="home" size={24} color={tintColor} />
                )
            },
        },

        /*Navn på Route*/
        New: {
            screen: NewScreen,
            navigationOptions: {
                tabBarLabel:"New",
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-add" size={24} color={tintColor} />
                )
            },
        },

        /*Navn på Route*/
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarLabel:"Profile",
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-person" size={24} color={tintColor} />
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
            activeTintColor: 'blue',
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





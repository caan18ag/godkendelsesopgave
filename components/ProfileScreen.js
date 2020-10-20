import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {createStackNavigator} from "react-navigation-stack";
import AppSettingsScreen from "./ProfileNavigationComponents/AppSettingsScreen";
import DetailsScreen from "./ProfileNavigationComponents/DetailsScreen";
import OverviewScreen from "./ProfileNavigationComponents/OverviewScreen";
import OrderHistoryScreen from "./ProfileNavigationComponents/OrderHistoryScreen";
import DraftsScreen from "./ProfileNavigationComponents/DraftsScreen";

/*StackNavigation*/
const SettingStack = createStackNavigator({
        /*Fra venstre er det side navnet og screen er vores View / component*/
        Overview: {screen: OverviewScreen},
        Details: {screen: DetailsScreen},
        Drafts: {screen: DraftsScreen},
        OrderHistory: {screen: OrderHistoryScreen},
        AppSettings: { screen: AppSettingsScreen },
    },
    {
        /*Hvilket View skal starte*/
        initialRouteName:'Overview',
        navigationOptions:{
            title:'Main'
        }
    }
);

/*Skyd det afsted så App.js kan bruge componenet*/
export default SettingStack

/* Styling */
const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 30,
    },
    container: {
        //borderColor: 'red',
        borderWidth: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    }
});


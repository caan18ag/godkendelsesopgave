import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import OverviewScreen from "./NewNavigationComponents/OverviewScreen";
import TypeScreen from "./NewNavigationComponents/TypeScreen";
import MeasuresScreen from "./NewNavigationComponents/MeasuresScreen";
import MaterialsScreen from "./NewNavigationComponents/MaterialsScreen";
import ConfirmScreen from "./NewNavigationComponents/ConfirmScreen";
import {createStackNavigator} from "react-navigation-stack";
import PreviewScreen from "./NewNavigationComponents/PreviewScreen";

/* StackNavigation */
const SettingStack = createStackNavigator({
        /*Fra venstre er det side navnet og screen er vores View / component*/
        Overview: {screen: OverviewScreen},
        Type: {screen: TypeScreen},
        Measures: {screen: MeasuresScreen},
        Materials: {screen: MaterialsScreen},
        Preview: {screen: PreviewScreen},
        Confirm: { screen: ConfirmScreen},

    },
    {
        /* Overview bliver vist først */
        initialRouteName:'Overview',
        navigationOptions:{
            title:'Main'
        }
    }
);

/*Skyder det afsted så App.js kan bruge componenet*/
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
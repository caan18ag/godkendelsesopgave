import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import OverviewScreen from "./HomeNavigationComponents/OverviewScreen";
import BrowseScreen from "./HomeNavigationComponents/BrowseScreen";
import MeasuresScreen from "./HomeNavigationComponents/MeasuresScreen";
import MaterialsScreen from "./HomeNavigationComponents/MaterialsScreen";
import ConfirmScreen from "./HomeNavigationComponents/ConfirmScreen";
import {createStackNavigator} from "react-navigation-stack";
import PreviewScreen from "./HomeNavigationComponents/PreviewScreen";
import DescriptionScreen from "./HomeNavigationComponents/DescriptionScreen";

/* StackNavigation */
const SettingStack = createStackNavigator({
        /*Fra venstre er det side navnet og screen er vores View / component*/
        //Overview: {screen: OverviewScreen},
        Browse: {screen: BrowseScreen},
        Description: {screen: DescriptionScreen},
        Measures: {screen: MeasuresScreen},
        Materials: {screen: MaterialsScreen},
        Preview: {screen: PreviewScreen},
        Confirm: { screen: ConfirmScreen},

    },
    {
        /* Browse bliver vist først */
        initialRouteName:'Browse',
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
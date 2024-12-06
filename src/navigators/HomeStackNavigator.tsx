import React from 'react';
import SettingsScreen from '../screens/SettingsScreen';
import HomeScreen from '../screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllAppsScreen from '../screens/AllAppsScreen';

const HomeStackNavigator = createNativeStackNavigator();

export default function HomeNavigator() {
    return (
        <HomeStackNavigator.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <HomeStackNavigator.Screen name="HomeScreen" component={HomeScreen} />
            <HomeStackNavigator.Screen name="SettingsScreen" component={SettingsScreen} />
            <HomeStackNavigator.Screen name="AllAppsScreen" component={AllAppsScreen} />
        </HomeStackNavigator.Navigator>
    );
}

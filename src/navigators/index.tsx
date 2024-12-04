import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './HomeStackNavigator';

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <HomeNavigator />
        </NavigationContainer>
    );
}



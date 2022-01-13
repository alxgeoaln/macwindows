import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
    HomeScreen,
    PorfileScreen
} from '../screens';

const MainStack = createStackNavigator();

export const Main = () => {
    return (
        <MainStack.Navigator screenOptions={() => ({
            headerShown: false,
            gestureEnabled: false,
        })}>
            <MainStack.Screen name="Home" component={HomeScreen} />
            <MainStack.Screen name="Profile" component={PorfileScreen} />
        </MainStack.Navigator>
    )
}
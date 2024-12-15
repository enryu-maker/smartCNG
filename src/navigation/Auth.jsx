import { View, Text, Platform, StatusBar } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Otp from '../pages/auth/Otp';
const Stack = createNativeStackNavigator();
export default function Auth() {
    return (
        <>
            <Stack.Navigator
                screenOptions={({ navigation }) => {
                    return {
                        detachPreviousScreen: !navigation.isFocused(),
                        headerShown: false,
                        animation: Platform.OS == 'ios' ? 'default' : 'slide_from_right',
                        onTransitionStart: () => Keyboard.dismiss(),
                    };
                }}
                initialRouteName='Login'
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Otp" component={Otp} />
            </Stack.Navigator>
        </>

    )
}
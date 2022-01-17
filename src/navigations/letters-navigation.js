import * as React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView ,KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native'

import LettersReceivedScreen from '../screens/letters/received'
import LettersSendScreen from '../screens/letters/send'

import styleNav from '../styles/nav'
import Colors from '../styles/colors'

const Tab = createMaterialTopTabNavigator();


export default function LettersNavigation() {
    return(
        <>
            <Tab.Navigator
                screenOptions={{
                tabBarStyle: {
                    ...styleNav.tabNav
                },
                
                }}
            >
                <Tab.Screen 
                    name="Send" 
                    component={LettersSendScreen}
                    options={{
                        tabBarLabel: ({focused, color, size}) => (
                            <Text style={{color: focused ? Colors.highlight : Colors.light}}>Send</Text>
                        ),
                    }}
                />
                <Tab.Screen 
                    tabBarPosition="top" 
                    name="Received" 
                    component={LettersReceivedScreen}
                    options={{
                        tabBarLabel: ({focused, color, size}) => (
                            <Text style={{color: focused ? Colors.highlight : Colors.light}}>Received</Text>
                        ),
                    }}

                />
            </Tab.Navigator>
        </>
    )
}
import * as React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView ,KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native'

import LettersReceivedScreen from '../screens/letters/received'
import LettersSendScreen from '../screens/letters/send'

const Tab = createMaterialTopTabNavigator();


export default function LettersNavigation() {
    return(
        <>
            <Text>Cartas</Text>
            <Tab.Navigator>
                <Tab.Screen name="Send" component={LettersSendScreen} />
                <Tab.Screen tabBarPosition="top" name="Received" component={LettersReceivedScreen} />
            </Tab.Navigator>
        </>
    )
}
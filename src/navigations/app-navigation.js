import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, TouchableOpacity, Text, View } from 'react-native'
import HomeScreen from '../screens/home'
import ProfileScreen from '../screens/profile'
import BadgesScreen from '../screens/badges'


import LettersNavigation from './letters-navigation'

import styleGlobal from '../styles/global'
import styleNav from '../styles/nav'
import Colors from '../styles/colors'

const Tab = createBottomTabNavigator()


export default function AppNavigation() {
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    ...styleNav.box
                },
                
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View>
                            <Text
                                style={{color: focused ? '#e32f45' : '#748c94'}}
                            >
                                Home
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen 
                name="Badges" 
                component={BadgesScreen} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View>
                            <Text
                                style={{color: focused ? '#e32f45' : '#748c94'}}
                            >
                                Badges
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen 
                name="Letters" 
                component={LettersNavigation} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View>
                            <Text
                                style={{color: focused ? '#e32f45' : '#748c94'}}
                            >
                                Letters
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View>
                            <Text
                                style={{color: focused ? '#e32f45' : '#748c94'}}
                            >
                                Profile
                            </Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
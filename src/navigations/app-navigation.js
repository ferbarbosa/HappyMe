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
                                style={{color: focused ? Colors.highlight : Colors.light, fontSize: focused ? 18 : 14}}
                            >
                                Inicio
                            </Text>
                        </View>
                    ),
                }}
            />
            {/*<Tab.Screen 
                name="Badges" 
                component={BadgesScreen} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View>
                            <Text
                                style={{color: focused ? Colors.highlight : Colors.light}}
                            >
                                Badges
                            </Text>
                        </View>
                    ),
                }}
            /> */}
            <Tab.Screen 
                name="Letters" 
                component={LettersNavigation} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View>
                            <Text
                                style={{color: focused ? Colors.highlight : Colors.light, fontSize: focused ? 18 : 14}}
                            >
                                Cartas
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
                                style={{color: focused ? Colors.highlight : Colors.light, fontSize: focused ? 18 : 14}}
                            >
                                Perfil
                            </Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
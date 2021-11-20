import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppNavigation from './app-navigation'


import HomeScreen from '../screens/home'
import LoginScreen from '../screens/login'
import RegisterScreen from '../screens/register'
import SplashScreen from '../screens/splash'
import AwnserScreen from '../screens/letters/answer'

const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen options={{
          headerShown: false
        }} 
        name="Spash" 
        component={SplashScreen} />

        <Stack.Screen options={{
          headerShown: false
        }} 
        name="Login" 
        component={LoginScreen} />

        <Stack.Screen options={{
          headerShown: false
        }} 
        name="Register"
        component={RegisterScreen} />

        <Stack.Screen options={{
          headerShown: false
        }}
        name="Home" 
        component={AppNavigation} />

        <Stack.Screen options={{
        }}
        name="Awnser" 
        component={AwnserScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

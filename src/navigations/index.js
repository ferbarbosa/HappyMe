import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppNavigation from './app-navigation'

import PreLogin from '../screens/prelogin'
import HomeScreen from '../screens/home'
import LoginScreen from '../screens/login'
import RegisterScreen from '../screens/register'
import SplashScreen from '../screens/splash'
import AwnserScreen from '../screens/letters/answer'
import ReplyScreen from '../screens/letters/reply'
import ReportsScreen from '../screens/reports'

import Colors from '../styles/colors'

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
        name="Prelogin" 
        component={PreLogin} />
        

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
        component={AwnserScreen}
        options={{
          headerStyle: {
            backgroundColor: Colors.dark,
          },
          headerTintColor: Colors.light,
        }}
        />

        <Stack.Screen options={{
        }}
        name="Reply" 
        component={ReplyScreen}
        options={{
          headerStyle: {
            backgroundColor: Colors.dark,
          },
          headerTintColor: Colors.light,
        }} 
        />

        <Stack.Screen options={{
        }}
        name="Reports" 
        component={ReportsScreen}
        options={{
          headerStyle: {
            backgroundColor: Colors.dark,
          },
          headerTintColor: Colors.light,
        }} 
        />


        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

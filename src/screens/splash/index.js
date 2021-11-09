// Basic imports
import React, {useEffect, useState} from 'react';
import { KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View, Image } from 'react-native'

// Database imports
import { createUserWithEmailAndPassword, 
        onAuthStateChanged, 
        signInWithEmailAndPassword,
        signOut } from "firebase/auth";
import {auth} from '../../../firebase'

import LottieView from 'lottie-react-native'

// Style imports
import styleGlobal from '../../styles/global'

const SplashScreen = ({navigation}) => {

    // User definition
    const [user, setUser] = useState({});

    // Set screen home when the user sucefull auth
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user){
                navigation.replace("Home")
            }else{
                navigation.replace("Login")
            }
        })
        return unsubscribe
    }, [])

    // Set the user when the auth changes
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    return (
      <View style={styleGlobal.splash}>
        <Image
            source={require('../../assets/images/HappyMe!.jpg')}
        />
      </View>
    )
}

export default SplashScreen
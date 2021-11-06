// Basic imports
import React, {useEffect, useState} from 'react';
import { KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native'

// Database imports
import { createUserWithEmailAndPassword, 
        onAuthStateChanged, 
        signInWithEmailAndPassword,
        signOut } from "firebase/auth";
import {auth} from '../../../firebase'

// Style imports
import styleForms from '../../styles/forms'
import styleGlobal from '../../styles/global'

//Flash Messages
import { showMessage, hideMessage } from "react-native-flash-message";

const LoginScreen = ({navigation}) => {
    
    // Fields definitions
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // User definition
    const [user, setUser] = useState({});

    // Set screen home when the user sucefull auth
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user){
                navigation.replace("Home")
            }
        })
        return unsubscribe
    }, [])

    // Set the user when the auth changes
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    // Login Authentification
    const handleSingIn = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth,email,password)
            console.log(user)
        } catch (error){
            console.log(error.message)
            showMessage({
                    message: "Email ou senha incorretos!",
                    type: "warning",
                    icon: "warning",
                    style: styleGlobal.warningMessage

            });

        }
    }

    // Go to register screen button
    const onPressRegister = () => {
      navigation.replace("Register")
    }

    return (
      <>
        <View
            style={styleForms.container}
            behavior="padding"
        >
            <Text style={styleForms.logo}>HappyMe!</Text>

            <View style={styleForms.loginTextArea}>
                <Text style={styleForms.loginTextHighlight}>Login</Text><Text style={styleForms.loginText}> to your account</Text>
            </View>
            <View style={styleForms.inputContainer}>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={text => setEmail(text) }
                        style={styleForms.input}
                        placeholderTextColor="white"
                    />
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styleForms.input}
                        secureTextEntry
                        placeholderTextColor="white"
                    />
            </View>


            <View style={styleForms.buttonContainer}>
                <TouchableOpacity
                    onPress={handleSingIn}
                    style={styleForms.button}
                >
                    <Text style={styleForms.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={onPressRegister}
              style={styleForms.registerNow}
            >
              <Text 
                style={styleForms.registerNowText}
              >Don't have account? Register now!</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onPressRegister}
              style={styleForms.registerNow}
            >
              <Text 
                style={styleForms.registerNowText}
              >Forgot your password?</Text>
            </TouchableOpacity>

            <View style={styleForms.footer} ></View>
        </View>
      </>
    )
}

export default LoginScreen
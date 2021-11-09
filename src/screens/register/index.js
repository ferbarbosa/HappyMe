import React, {useEffect, useState} from 'react'
import { KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native'
import { createUserWithEmailAndPassword, 
        onAuthStateChanged, 
        signInWithEmailAndPassword,
        sendEmailVerification } from "firebase/auth";
import { useNavigation } from '@react-navigation/core'
import {auth, database} from '../../../firebase'
import { getDatabase, ref, set, push } from "firebase/database";

// Style imports
import styleForms from '../../styles/forms'
import styleGlobal from '../../styles/global'

//Flash Messages
import { showMessage, hideMessage } from "react-native-flash-message";

const RegisterScreen = () => {
    
    //Cadastro de usuario padrao firebase
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')


    const [user, setUser] = useState({});

    const navigation = useNavigation()


    //cadastro usuario realtime database
    const userRef = ref(database, 'users');
    const userPush = push(userRef)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user){
                navigation.replace("Home")
                //Cria o usuario na tabela users do realtime database
                set(userPush, {
                    userId: user.uid,
                    userLvl: 1,
                    userXp: 0,
                });
            }
        })
        return unsubscribe
    }, [])

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    const handleSignUp = async () => {
        try {
            if (password == confirmPass) {
                const user = await createUserWithEmailAndPassword(auth,email,password)
                const mail = sendEmailVerification(auth.currentUser)
                                    .then(() => {
                                        console.log('Email enviado!')
                                    });
            }else{
                showMessage({
                    message: "As senhas devem combinar",
                    type: "warning",
                    icon: "warning",
                    style: styleGlobal.sucefullMessage

                });
            }
        } catch (error){
            showMessage({
                    message: "Email ou senha invalidos!",
                    type: "warning",
                    icon: "warning",
                    style: styleGlobal.sucefullMessage

            });
        }
        
    }

    const onPressLogin = () => {
      navigation.replace("Login")
    }


    return (
        <>
            <View
            style={styleForms.container}
            behavior="padding"
        >
            <Text style={styleForms.logo}>HappyMe!</Text>

            <View style={styleForms.loginTextArea}>
                <Text Text style={styleForms.loginText}>Join </Text>
                <Text style={styleForms.loginTextHighlight}>HappyMe</Text>
                <Text style={styleForms.loginText}> now!</Text>
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
                    <TextInput
                        placeholder="Confirm password"
                        value={confirmPass}
                        onChangeText={text => setConfirmPass(text)}
                        style={styleForms.input}
                        secureTextEntry
                        placeholderTextColor="white"
                    />
            </View>


            <View style={styleForms.buttonContainer}>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={styleForms.button}
                >
                    <Text style={styleForms.buttonText}>REGISTER</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={onPressLogin}
              style={styleForms.registerNow}
            >
              <Text 
                style={styleForms.registerNowText}
              >Already have a account? Sign in!</Text>
            </TouchableOpacity>

            <View style={styleForms.footer} ></View>
        </View>
      </>
    )
}

export default RegisterScreen
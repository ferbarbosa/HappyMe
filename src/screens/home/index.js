import React, {useState, useEffect} from 'react'
import { SafeAreaView ,KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native'
import { createUserWithEmailAndPassword, 
        onAuthStateChanged, 
        signInWithEmailAndPassword,
        signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/core'
import {auth, db, database} from '../../../firebase'
import { collection, addDoc } from "firebase/firestore";
import { getDatabase, ref, set, push } from "firebase/database";

const HomeScreen = ({navigation}) => {

    const [letter, setLetter] = useState('')

    const letterRef = ref(database, 'letter');
    const letterSendRef = ref(database, 'send');
    const newSend = push(letterSendRef)
    const newLetter = push(letterRef);
    

    const user = auth.currentUser;

    const logout = async () => {
        auth.signOut().then(() => {
            navigation.replace("Login")
        }).catch(error => alert(error))
    }

    const sendLetter = async () => {
        var day = new Date().getDate();
        var month = new Date().getMonth() + 1; //To get the Current Month
        var year = new Date().getFullYear()
        var formatedDate = day + '/' + month + '/' + year
        set(newLetter, {
            content: letter,
            date: formatedDate,
            userId: user.email
        });

        set(newSend,{
            letterId: newLetter.key,
            date: formatedDate,
            senderId: user.email,
            receiver: "hoshiidesignbr@gmail.com"
        })
        console.log("chave" + newLetter.key)
    }

    return (
        <View>
            <Text>Emails: {user?.email}</Text>
            <Text>Token: {user?.uid} </Text>

            <TouchableOpacity
                    onPress={logout}
            >
                    <Text>Logout</Text>
            </TouchableOpacity>

            <View>
                <TextInput
                    placeholder="Envie uma carta!"
                    value={letter}
                    onChangeText={text => setLetter(text) }
                    placeholderTextColor="white"
                />
            </View>
            <TouchableOpacity
                    onPress={sendLetter}
                >
                    <Text >ENVIAR</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen;
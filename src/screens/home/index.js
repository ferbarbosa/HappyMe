import React, {useState, useEffect} from 'react'
import { SafeAreaView ,KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View, setTextInput } from 'react-native'
import { createUserWithEmailAndPassword, 
        onAuthStateChanged, 
        signInWithEmailAndPassword,
        signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/core'
import {auth, db, database} from '../../../firebase'
import { collection, addDoc } from "firebase/firestore";
import { getDatabase, ref, set, push, onValue, child } from "firebase/database";

import Filter from 'bad-words'

// Style imports
import styleGlobal from '../../styles/global'
import styleForms from '../../styles/forms'

// PRECISO ADICIONAR O BAD WORDS

//Flash Messages
import { showMessage, hideMessage } from "react-native-flash-message";

const HomeScreen = ({navigation}) => {

    const [letter, setLetter] = useState('')
    const user = auth.currentUser;

    const letterRef = ref(database, 'letter')
    const [userList, setuserList] = useState();
    const usersRef = ref(database, 'users')
    const newLetter = push(letterRef)

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


        const filter = new Filter();
        
        //palavras proibidas
        filter.addWords('mata', 'suicidio','matar', 'm4tar', 'm4t4r');

        if(filter.isProfane(letter)){
            showMessage({
                    message: "Palavras proibidas!",
                    type: "warning",
                    icon: "warning",
                    style: styleGlobal.warningMessage

            });
        }else{

            set(newLetter, {
            content: letter,
            date: formatedDate,
            userId: user.uid,
            });

            onValue(usersRef, (snapshot) =>{
                const data = snapshot.val();
                const userList = []
                var aa = 1
                for(let id in data){
                    //Variavel para porcentagem se sera ou não enviado ao usuario
                    var RandomNumber = Math.floor(Math.random() * 100) + 1 ;
                    if (RandomNumber >= 50) {
                        
                        //guarda o usuario em uma variavel
                        const theUserId = data[id]?.userId
                        if(theUserId == user.uid){
                            //
                        }else{
                            //Referencia pro documento de send do usuario
                            const letterSendRef = ref(database, 'send/'+theUserId)
                            const letterSendPush = push(letterSendRef)
                            console.log("Usuario "+aa+":"+theUserId)
                            aa++
                            set(letterSendPush,{
                                letterId: newLetter.key,
                                awsered: false
                            })
                        }
                    }
                }
                setuserList(userList)
            })


            showMessage({
                        message: "Carta Enviada!",
                        type: "success",
                        icon: "success",
                        style: styleGlobal.warningMessage

            });
        }

        

        setLetter("")
    }
    


    return (
        <View style={styleForms.container}>
            <Text style={styleForms.buttonText}>Emails: {user?.email}</Text>
            <Text style={styleForms.buttonText}>Token: {user?.uid} </Text>

            <TouchableOpacity
                style={styleForms.button}    
                onPress={logout}
            >
                    <Text style={styleForms.buttonText}>Logout</Text>
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
                    style={styleForms.button}
                >
                    <Text style={styleForms.buttonText}>ENVIAR</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen;
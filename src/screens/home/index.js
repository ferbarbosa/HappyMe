import React, {useState, useEffect} from 'react'
import { SafeAreaView ,KeyboardAvoidingView, TouchableOpacity, StyleSheet, Image, Text, TextInput, View, setTextInput, Keyboard } from 'react-native'
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
import styleLetters from '../../styles/letters'

// PRECISO ADICIONAR O BAD WORDS

//Flash Messages
import { showMessage, hideMessage } from "react-native-flash-message";

const HomeScreen = ({navigation}) => {

    const [letter, setLetter] = useState('')
    const user = auth.currentUser;

    const letterRef = ref(database, 'letter')
    const [userList, setuserList] = useState()
    const [badword, setBadword] = useState([])
    const usersRef = ref(database, 'users')
    const newLetter = push(letterRef)
    const badwordRef = ref(database, 'badword')

    const filter = new Filter();


    //palavras proibidas
    filter.addWords(...badword);
    

    useEffect(() => {
        onValue(badwordRef, (snapshot) =>{
            const data = snapshot.val();
            const badword = []
            for(let id in data){
                badword.push(data[id])
            }
            setBadword(badword)
        })
    }, []);
    

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



        if(filter.isProfane(letter)){
            showMessage({
                    message: "Palavras proibidas!",
                    type: "warning",
                    icon: "warning",
                    style: styleGlobal.warningMessage

            });
        }else if(letter == "" || letter == " "){
            showMessage({
                    message: "Você não pode enviar uma mensagem vazia!",
                    type: "warning",
                    icon: "warning",
                    style: styleGlobal.warningMessage

            });
        }
        else{

            Keyboard.dismiss();

            set(newLetter, {
            content: letter,
            date: formatedDate,
            userId: user.uid,
            id: newLetter.key,
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
                            const letterSendRef = ref(database, 'send/'+theUserId+'/'+newLetter.key)
                            const letterSendPush = push(letterSendRef)
                            aa++
                            set(letterSendRef,{
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
                        style: styleGlobal.sucefullMessage

            });
        }

        

        setLetter("")
    }
    


    return (
        <View style={styleLetters.container}>
            <View style={styleLetters.logoBox}>
               <Image
                    style={styleLetters.logo}
                    source={{
                    uri: 'https://i.imgur.com/cdjWVII.png',
                    }}
                />
                
            </View>
            <Text style={styleLetters.welcome}>Bem vinde ao HappyMe!</Text>

            <Image style={styleLetters.letterBg} source={require('../../assets/images/letterBg.png')} />
            <View>
                <TextInput
                    placeholder="Escreva sua carta..."
                    multiline={true}
                    value={letter}
                    onChangeText={text => setLetter(text) }
                    placeholderTextColor="white"
                    style={styleLetters.letterInput}
                />
            </View>
            <View style={styleLetters.buttonArea}>
                <TouchableOpacity
                        onPress={sendLetter}
                        style={styleLetters.sendLetterButton}
                    >
                        <Text style={styleLetters.sendLetterButtonText}>ENVIAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen;
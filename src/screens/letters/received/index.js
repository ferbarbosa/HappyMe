import React, {useState, useEffect} from 'react'
import { SafeAreaView , FlatList,KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import {auth, db, database} from '../../../../firebase'
import { getDatabase, ref, set, push, onValue } from "firebase/database";



//Flash Messages
import { showMessage, hideMessage } from "react-native-flash-message";
// Style imports
import styleGlobal from '../../../styles/global'
import styleLetters from '../../../styles/letters'

const LettersReceivedScreen = ({navigation}) => {

    const [receivedList, setreceivedList] = useState();
    const [receiveLetter, setreceiveLetter] = useState();
    const [newItem, setNewItem] = useState();
    const user = auth.currentUser;
    const refe = ref(database, 'send/'+user.uid)
    

    useEffect(()=>{
        onValue(refe, (snapshot) =>{
            const data = snapshot.val();
            //zera os aways sempre que há uma alteração
            const receiveLetter = []
            for(let id in data){
                const letterIdData = data[id]?.letterId
                const letterRef = ref(database, 'letter/'+letterIdData)
                onValue(letterRef, (snapshot) =>{
                    const dataL = snapshot.val()
                    receiveLetter.push(dataL)
                })
                
            }
            
            
            setreceiveLetter(receiveLetter)

            
            
        })
        
    }, [])


    const Item = ({ content }) => (
        <View>
            <View style={styleLetters.letterOptions}>
                <TouchableOpacity style={styleLetters.optionButton}>
                    <Text style={styleLetters.letterText}>Responder</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styleLetters.optionButton}>
                    <Text style={styleLetters.letterText}>Excluir</Text>
                </TouchableOpacity>
            </View>
            <View style={styleLetters.letterBox}>
                <Text style={styleLetters.letterText}>
                        {content}
                </Text>
            </View>
            
        </View>
    );

    const renderItem = ({ item }) => (
        <Item content={item.content} />
    );

    return (
        <SafeAreaView style={styleLetters.letterContainer}>
                <FlatList
                    contentContainerStyle={{margin: 20}}
                    data={receiveLetter}
                    renderItem={renderItem}
                    initialNumToRender={1}
                />
        </ SafeAreaView>
    )
}

export default LettersReceivedScreen;
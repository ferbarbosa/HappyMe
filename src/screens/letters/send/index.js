import React, {useState, useEffect} from 'react'
import { SafeAreaView , Animated, FlatList, ListItem, TouchableOpacity, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import {auth, db, database} from '../../../../firebase'
import { getDatabase, ref, set, push, onValue, orderByChild, equalTo, query } from "firebase/database";



//Flash Messages
import { showMessage, hideMessage } from "react-native-flash-message";

// Style imports
import styleGlobal from '../../../styles/global'
import styleLetters from '../../../styles/letters'


const LettersSendScreen = ({navigation}) => {

    const [letterList, setLetterList] = useState();
    const user = auth.currentUser;
    const refe = ref(database, 'letter')
    const querySend = query(refe, orderByChild('userId'), equalTo(user.uid))

    const [awnserList, setAwnserList] = useState([])
    

    const LetterHere = []

    useEffect(()=>{

        onValue(querySend, (snapshot) =>{
            const data = snapshot.val();
            const letterList = []
            for(let id in data){
                letterList.push(data[id])
            }
            setLetterList(letterList)
        })

    

    }, [])

    const Item = ({ id, content }) => (
        <TouchableOpacity 
            style={styleLetters.letterBox}
            onPress={() => navigation.navigate('Reply', {
                id: id,
                content: content,
            })}
        
        >
            <Text style={styleLetters.letterText}>
                {content}
            </Text>
            <Text>
                Respostas
            </Text>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => (
        <Item id={item.id} content={item.content} />
    );

    
    return (
        <SafeAreaView style={styleLetters.letterContainer}>
                <FlatList
                    contentContainerStyle={{margin: 20}}
                    data={letterList}
                    renderItem={renderItem}
                    initialNumToRender={1}
                />
        </ SafeAreaView>
    )
}

export default LettersSendScreen;
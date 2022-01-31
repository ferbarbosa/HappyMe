import React, {useState, useEffect} from 'react'
import { SafeAreaView , Modal,Pressable, FlatList,KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View, ScrollView, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import {auth, db, database} from '../../../firebase'
import { getDatabase, ref, set, push, onValue, orderByChild, equalTo, query } from "firebase/database";


//Flash Messages
import { showMessage, hideMessage } from "react-native-flash-message";
// Style imports
import styleGlobal from '../../styles/global'
import styleLetters from '../../styles/letters'

const ReportsScreen = () => {

    const [reportedLetters, setreportedLetters] = useState();
    const reportRef = ref(database, 'awnser')
    const queryReport = query(reportRef, orderByChild('reported'), equalTo(true));

    useEffect(() => {
      
        onValue(queryReport, (snapshot) =>{
            const data = snapshot.val();
            //zera os aways sempre que há uma alteração
            const reportedLetters = []
            for(let id in data){
                reportedLetters.push(data[id])
            }
            setreportedLetters(reportedLetters)

        })

    }, []);
    

    const Item = ({ id, content, user }) => (
        <View>
            <View style={styleLetters.letterOptions}>
                <TouchableOpacity style={styleLetters.optionButton}
                onPress={() => deleteLetter(id)}>
                    
                    <Text style={styleLetters.letterText}>Excluir</Text>
                </TouchableOpacity>
            </View>
            <View style={styleLetters.letterBox}>
                <Text style={styleLetters.letterText}>
                        {content}
                </Text>
                <Text>User ID:</Text>
                <TextInput
                    value={user}
                >
                </TextInput>
            </View>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item id={item.id} content={item.content} user={item.userWhoSend} />
    );


    return (
        <SafeAreaView style={styleLetters.letterContainer}>
                <FlatList
                    contentContainerStyle={{margin: 20}}
                    data={reportedLetters}
                    renderItem={renderItem}
                    initialNumToRender={1}
                />
        </ SafeAreaView>
    )
}

export default ReportsScreen;
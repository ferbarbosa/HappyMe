import React, {useState, useEffect} from 'react'
import { SafeAreaView , Modal,Pressable, FlatList,KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View, ScrollView, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import {auth, db, database} from '../../../../firebase'
import { getDatabase, ref, set, push, onValue } from "firebase/database";


//Flash Messages
import { showMessage, hideMessage } from "react-native-flash-message";
// Style imports
import styleGlobal from '../../../styles/global'
import styleLetters from '../../../styles/letters'

const LettersReceivedScreen = ({navigation}) => {
    //Cartas recebidas
    const [receivedList, setreceivedList] = useState();
    const [receiveLetter, setreceiveLetter] = useState();
    const [newItem, setNewItem] = useState();
    const user = auth.currentUser;
    const refe = ref(database, 'send/'+user.uid)
    
    const [Answering, setAnswering] = useState('')
    

    useEffect(()=>{
        onValue(refe, (snapshot) =>{
            const data = snapshot.val();
            //zera os aways sempre que há uma alteração
            
            const receiveLetter = []
            for(let id in data){
                if(!data[id].awsered){
                    const letterIdData = data[id]?.letterId
                    const letterRef = ref(database, 'letter/'+letterIdData)
                    onValue(letterRef, (snapshot) =>{
                        const dataL = snapshot.val()
                        receiveLetter.push(dataL)
                    })
                }
                
            }
            
            
            setreceiveLetter(receiveLetter)

            
            
        })
        
    }, [])

    const deleteLetter = (id) => {
        const delRef = ref(database, 'send/'+user.uid+'/'+id)

        var deleteComfirm = false

        Alert.alert(
        "Excluir!",
        "Deseja mesmo excluir a carta?",[
                {
                text: "Cancel",
                style: "cancel"
                },
                { text: "Aceitar", onPress: () => {
                        set(delRef, {
                            awsered: true,
                            letterId: id,
                        })

                        showMessage({
                            message: "Carta deletada!",
                            type: "success",
                            icon: "success",
                            style: styleGlobal.sucefullMessage
                        })
                    }
                }
            ]
        )
        
    }
    const Item = ({id , content}) => (
        <View>
            <View style={styleLetters.letterOptions}>
                <TouchableOpacity 
                    style={styleLetters.optionButton}
                    onPress={() => navigation.navigate('Awnser', {
                        id: id,
                        content: content,
                    })}
                >
                    <Text style={styleLetters.letterText}>Responder</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styleLetters.optionButton}
                onPress={() => deleteLetter(id)}>
                    
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
        
        <Item id={item.id} content={item.content} />
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
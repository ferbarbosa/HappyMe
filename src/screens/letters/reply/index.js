import React, {useState, useEffect} from 'react'
import { SafeAreaView , Modal,Pressable, FlatList,KeyboardAvoidingView, TouchableOpacity, StyleSheet,Alert, Text, TextInput, View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import {auth, db, database} from '../../../../firebase'
import { getDatabase, ref, set, push, onValue, query, orderByChild, equalTo } from "firebase/database"


//Flash Messages
import { showMessage, hideMessage } from "react-native-flash-message"
// Style imports
import styleGlobal from '../../../styles/global'
import styleLetters from '../../../styles/letters'


const ReplyScreen = ({route, navigation}) => {

    const user = auth.currentUser;
    const {id, content} = route.params
    const [awnserList, setAwnserList] = useState([])

    const awnserRef = ref(database, 'awnser')
    const queryAwnser = query(awnserRef, orderByChild('letterId'), equalTo(id))

    useEffect(() => {
        // Search for the letter in awnsers
        onValue(queryAwnser, (snapshot) =>{
            const data = snapshot.val();
            const awnserList = []
            
            for(let id in data){
                if(!data[id].deleted){
                    awnserList.push(data[id])
                }
            }
            setAwnserList(awnserList)
        })
    }, [])


    const deleteLetter = (id) => {

        var deleteComfirm = false
        const queryDelete = ref(database, 'awnser/'+id)

        Alert.alert(
        "Excluir!",
        "Deseja mesmo excluir a carta?",[
                {
                text: "Cancel",
                style: "cancel"
                },
                { text: "Aceitar", onPress: () => {
                        set(queryDelete, {
                            deleted: true,
                        })

                        showMessage({
                            message: "Carta deletada!",
                            type: "success",
                            icon: "success",
                            style: styleGlobal.warningMessage
                        })
                    }
                }
            ]
        )
        
    }
    

    const Item = ({ id, content }) => (
        <View>
            <View style={styleLetters.letterOptions}>
                <TouchableOpacity style={styleLetters.optionButton}
                onPress={() => deleteLetter(id)}>
                    
                    <Text style={styleLetters.letterText}>Excluir</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styleLetters.optionButton}
                onPress={() => deleteLetter(id)}>
                    
                    <Text style={styleLetters.letterText}>Denunciar</Text>
                </TouchableOpacity>
            </View>
            <View 
                style={styleLetters.letterBox}
            >
                <Text style={styleLetters.letterText}>
                    {content}
                </Text>
            </View>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item id={item.id} content={item.content} />
    );
    

    return(
        <View style={styleLetters.awnserReceivedContainer}>
            <View style={styleLetters.letterBox}>
                <Text>{content}</Text>
            </View>
            <View>
                <Text style={styleLetters.awnsersReceivedText}>Respostas</Text>
            </View>
            <View>
                <FlatList
                    data={awnserList}
                    renderItem={renderItem}
                    initialNumToRender={1}
                />
            </View>
        </View>
        

    )

}

export default ReplyScreen;
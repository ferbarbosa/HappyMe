import React, {useState, useEffect} from 'react'
import { SafeAreaView , Modal,Pressable, FlatList,KeyboardAvoidingView,TouchableOpacity, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import {auth, db, database} from '../../../../firebase'
import { getDatabase, ref, set, push, onValue } from "firebase/database"


//Flash Messages
import { showMessage, hideMessage } from "react-native-flash-message"
// Style imports
import styleGlobal from '../../../styles/global'
import styleLetters from '../../../styles/letters'

//Filtro de palavras
import Filter from 'bad-words'

const AwnserScreen = ({route, navigation}) => {

    const user = auth.currentUser;

    const {id, content} = route.params
    const [awnser, setAwnser] = useState('')
    const [badword, setBadword] = useState([])
    const filter = new Filter();

    const badwordRef = ref(database, 'badword')

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

    const sendAwnser = async () => {

        var day = new Date().getDate();
        var month = new Date().getMonth() + 1; //To get the Current Month
        var year = new Date().getFullYear()
        var formatedDate = day + '/' + month + '/' + year

        const awnserRef = ref(database, 'awnser')
        const newAwnser = push(awnserRef)

        const sendRef = ref(database, 'send/'+user.uid+'/'+id)


        if(filter.isProfane(awnser)){
            showMessage({
                    message: "Palavras proibidas!",
                    type: "warning",
                    icon: "warning",
                    style: styleGlobal.warningMessage

            });
        }else{
            set(newAwnser, {
            content: awnser,
            date: formatedDate,
            userWhoSend: user.uid,
            letterId: id,
            deleted: false,
            reported: false,
            id: newAwnser.key
            });

            set(sendRef, {
                awsered: true,
                letterId: id,
            });

            showMessage({
                message: "Resposta enviada!",
                type: "success",
                icon: "success",
                style: styleGlobal.sucefullMessage

            });

            navigation.navigate('Letters')
            setAwnser('')
        }
    }

    return(
        <View style={styleLetters.container}>
            <View style={styleLetters.letterBox}>
                <Text style={styleLetters.letterText}>{content}</Text>
            </View>
            <View>
                <TextInput
                    placeholder="Envie uma resposta..."
                    value={awnser}
                    onChangeText={text => setAwnser(text) }
                    placeholderTextColor="white"
                    style={styleLetters.awnserInput}
                />
            </View>
            <TouchableOpacity
                onPress={sendAwnser}
                style={styleLetters.sendLetterButton}
            >
                <Text style={styleLetters.sendLetterButtonText}>
                    ENVIAR
                </Text>
            </TouchableOpacity>
        </View>

    )

}

export default AwnserScreen;
import React, {useState, useEffect} from 'react'
import { SafeAreaView ,Dimensions, Modal,Pressable, FlatList,KeyboardAvoidingView, TouchableOpacity, StyleSheet,Alert, Text, TextInput, View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import {auth, db, database} from '../../../../firebase'
import { getDatabase, ref, set, push, onValue, query, orderByChild, equalTo } from "firebase/database"


//Flash Messages
import { showMessage, hideMessage } from "react-native-flash-message"
// Style imports
import styleGlobal from '../../../styles/global'
import styleLetters from '../../../styles/letters'

// Carousel
import Carousel, { Pagination } from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 4 / 4);


const ReplyScreen = ({route, navigation}) => {

    const user = auth.currentUser;
    const {id, content} = route.params
    const [awnserList, setAwnserList] = useState([])
    const [numAwnser, setnumAwnser] = useState(0)
    const [activeSlide, setactiveSlide] = useState(0)

    const awnserRef = ref(database, 'awnser')
    const queryAwnser = query(awnserRef, orderByChild('letterId'), equalTo(id))

    

    useEffect(() => {
        // Search for the letter in awnsers
        onValue(queryAwnser, (snapshot) =>{
            const data = snapshot.val();
            const awnserList = []
            var num = 0
            
            for(let id in data){
                if(!data[id].deleted){
                    awnserList.push(data[id])
                    num++
                }
        
            }
            setnumAwnser(num)
            setAwnserList(awnserList)
        })

    }, [])

    const report = async (id) => {

        const reportRef = ref(database, 'report')
        const newReport = push(reportRef)
        const queryDelete = ref(database, 'awnser/'+id+'/deleted')
        const queryReport = ref(database, 'awnser/'+id+'/reported')

        var reportComfirm = false

        Alert.alert(
        "Denunciar!",
        "Deseja denunciar a resposta?",[
                {
                text: "Cancel",
                style: "cancel"
                },
                { text: "Aceitar", onPress: () => {
                        set(queryReport, true)

                        set(queryDelete, true)

                        showMessage({
                            message: "Carta denunciada!",
                            type: "success",
                            icon: "success",
                            style: styleGlobal.sucefullMessage
                        })
                    }
                }
            ]
        )
    }


    const deleteLetter = (id) => {

        var deleteComfirm = false
        const queryDelete = ref(database, 'awnser/'+id+'/deleted')
        Alert.alert(
        "Excluir!",
        "Deseja mesmo excluir a carta?",[
                {
                text: "Cancel",
                style: "cancel"
                },
                { text: "Aceitar", onPress: () => {
                        set(queryDelete, true)

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
        <View style={styles.itemContainer}>
            <View style={styleLetters.letterOptions}>
                <TouchableOpacity style={styleLetters.optionButton}
                onPress={() => deleteLetter(id)}>
                    
                    <Text style={styleLetters.letterText}>Excluir</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styleLetters.optionButton}
                onPress={() => report(id)}>
                    
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
                <Text style={styleLetters.letterText}>{content}</Text>
            </View>
            <View>
                <Text style={styleLetters.awnsersReceivedText}>Respostas: {numAwnser}</Text>
            </View>
            <View style={styleLetters.awnserCarousel}>
                <Carousel
                    layout={'stack'} 
                    layoutCardOffset={9}
                    data={awnserList}
                    renderItem={renderItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    //onSnapToItem={(index) => setactiveSlide(index)}
                /> 
            </View>
        </View>
        

    )

}

const styles = StyleSheet.create({
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
  },
});

export default ReplyScreen;
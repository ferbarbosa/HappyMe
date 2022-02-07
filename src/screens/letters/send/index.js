import React, {useState, useEffect} from 'react'
import { SafeAreaView , Dimensions, Animated, FlatList, ListItem, TouchableOpacity, Image, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import {auth, db, database} from '../../../../firebase'
import { getDatabase, ref, set, push, onValue, orderByChild, equalTo, query } from "firebase/database";



//Flash Messages
import { showMessage, hideMessage } from "react-native-flash-message";


// Carousel
import Carousel from 'react-native-snap-carousel';

// Style imports
import styleGlobal from '../../../styles/global'
import styleLetters from '../../../styles/letters'

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 4 / 4);


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

    const Item = ({ id, content, date }) => (
        <View style={styles.itemContainer}>
            <View 
                style={styleLetters.letterBox}
            >
                <Text style={styleLetters.letterText}>
                    {content}
                </Text>
                <Text style={styleLetters.dateTxt}>
                    Data: {date}
                </Text>
            </View>
            <View style={styleLetters.viewAwnserBox}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Reply', {
                        id: id,
                        content: content,
                    })}
                    style={styleLetters.viewAwnsersButton}
                >
                    <Text style={styleLetters.viewAwnserText}>Respostas</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item id={item.id} content={item.content} date={item.date} />
    );

   
    
    return (
        <SafeAreaView style={styleLetters.letterContainer}>

            
            <View style={styleLetters.carousel}>
                <Carousel
                    layout={'default'} 
                    layoutCardOffset={9}
                    data={letterList}
                    renderItem={renderItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                />  
            </View>
        </ SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
  },
});

export default LettersSendScreen;
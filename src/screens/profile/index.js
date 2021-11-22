import React, {useState, useEffect} from 'react'
import { SafeAreaView ,KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import {auth, db, database} from '../../../firebase'
import { getDatabase, ref, set, push, onValue, orderByChild, equalTo, query } from "firebase/database";


const ProfileScreen = () => {

    const navigation = useNavigation()

    const user = auth.currentUser;
    const [lvl, setLvl] = useState(0)
    const [xp, setXp] = useState(0)
    const [username, setUsername] = useState('Username')

    const refe = ref(database, 'users')
    const queryProfile = query(refe, orderByChild('userId'), equalTo(user.uid));

    useEffect(() => {
        onValue(queryProfile, (snapshot) =>{
            const data = snapshot.val();
            for(let id in data){
                setLvl(data[id].userLvl)
                setXp(data[id].userXp)
                setUsername(data[id].username)
            }
        })
    }, [])

    return (
        <View>
            <Text>{username}</Text>
            <Text>Level: {lvl}</Text>
            <Text>Experiencia: {xp}</Text>

        </View>
    )
}

export default ProfileScreen;
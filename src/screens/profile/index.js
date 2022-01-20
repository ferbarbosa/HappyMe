import React, {useState, useEffect} from 'react'
import { SafeAreaView ,KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import {auth, db, database} from '../../../firebase'
import { getDatabase, ref, set, push, onValue, orderByChild, equalTo, query } from "firebase/database";


import styleGlobal from '../../styles/global'
import styleProfile from '../../styles/profile'

const ProfileScreen = () => {

    const navigation = useNavigation()

    const user = auth.currentUser;
    const [lvl, setLvl] = useState(0)
    const [xp, setXp] = useState(0)
    const [username, setUsername] = useState('Username')

    const refe = ref(database, 'users')
    const queryProfile = query(refe, orderByChild('userId'), equalTo(user.uid));

    const logout = async () => {
        auth.signOut().then(() => {
            navigation.replace("Login")
        }).catch(error => alert(error))
    }

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
                <View style={styleProfile.photoBox}> 
                    <Image/>
                    <Text style={styleProfile.username}>{username}</Text>
                </View>
                <View style={styleProfile.optionsBox}>
                    <View style={styleProfile.statusBox}>
                        <Text style={styleProfile.titleText}>Status</Text>
                        <Text style={styleProfile.texts}>Level: {lvl}</Text>
                        <Text style={styleProfile.texts}>Experiencia: {xp}</Text>
                    </View>
                    <View style={styleProfile.configBox}>
                        <Text style={styleProfile.titleText}>Config</Text>
                        <TouchableOpacity
                            style={styleProfile.logoutButton}
                            onPress={logout}
                        >
                                <Text style={styleProfile.logoutText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>

        </View>
    )
}

export default ProfileScreen;
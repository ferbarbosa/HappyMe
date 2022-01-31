import React, {useState, useEffect} from 'react'
import { SafeAreaView ,KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import {auth, db, database} from '../../../firebase'
import { getDatabase, ref, set, push, onValue, orderByChild, equalTo, query, update } from "firebase/database";


import styleGlobal from '../../styles/global'
import styleProfile from '../../styles/profile'

const ProfileScreen = () => {

    const navigation = useNavigation()

    const user = auth.currentUser;
    const [lvl, setLvl] = useState(0)
    const [xp, setXp] = useState(0)
    const [username, setUsername] = useState('Username')
    const [admin, setAdmin] = useState(false)
    const [edit, setEdit] = useState(false)
    const [key, setKey] = useState()

    const refe = ref(database, 'users')
    const queryProfile = query(refe, orderByChild('userId'), equalTo(user.uid));

    const logout = async () => {
        auth.signOut().then(() => {
            navigation.replace("Login")
        }).catch(error => alert(error))
    }

    const reports = async () => {
        navigation.navigate('Reports')
    }

    const editar = async () => {
        setEdit(true)
    }

    const salvar = async () => {
        const editRef = ref(database, 'users/'+key+'/username')
        set(editRef, username)
        setEdit(false)
    }

    useEffect(() => {
        onValue(queryProfile, (snapshot) =>{
            const data = snapshot.val();
            for(let id in data){
                setLvl(data[id].userLvl)
                setXp(data[id].userXp)
                setUsername(data[id].username)
                setAdmin(data[id].admin)
                setKey(data[id].key)
            }
        })
    }, [])



    return (
        <View>
                
                {edit ? (
                    <View style={styleProfile.photoBox}>
                        <TextInput
                            placeholder={username}
                            multiline={false}
                            value={username}
                            onChangeText={text => setUsername(text) }
                            placeholderTextColor="white"
                            style={styleProfile.userInput}
                        />
                        <TouchableOpacity
                            onPress={salvar}
                        >
                            <Text style={styleProfile.optionText}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                )

                    : 
                    <View style={styleProfile.photoBox}>
                        <Text style={styleProfile.username}>{username}</Text>
                        <TouchableOpacity
                            onPress={editar}
                        >
                            <Image
                                style={styleProfile.editImg}
                                source={{
                                uri: 'https://i.imgur.com/AHeSqJO.png',
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                }
                <View style={styleProfile.optionsBox}>
                    <View style={styleProfile.configBox}>
                        <Text style={styleProfile.titleText}>Config</Text>
                        {admin? ( 
                            <TouchableOpacity
                            style={styleProfile.optionButton}
                            onPress={reports}
                             >
                                <Text style={styleProfile.optionText}>Denuncias</Text>
                            </TouchableOpacity>
                        )

                            : null

                        }

                        <TouchableOpacity
                            style={styleProfile.optionButton}
                            onPress={logout}
                        >
                                <Text style={styleProfile.optionText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>

        </View>
    )
}

export default ProfileScreen;
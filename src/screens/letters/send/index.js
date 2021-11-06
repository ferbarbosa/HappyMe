import React, {useState} from 'react'
import { SafeAreaView ,KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import {auth, db, database} from '../../../firebase'
import { getDatabase, ref, set, push } from "firebase/database";
const LettersSendScreen = () => {

    const navigation = useNavigation()

    return (
        <View>
            <Text>Send</Text>

        </View>
    )
}

export default LettersSendScreen;
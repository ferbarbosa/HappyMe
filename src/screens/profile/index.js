import React, {useState} from 'react'
import { SafeAreaView ,KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
const ProfileScreen = () => {

    const navigation = useNavigation()

    return (
        <View>
            <Text>Profile</Text>

        </View>
    )
}

export default ProfileScreen;
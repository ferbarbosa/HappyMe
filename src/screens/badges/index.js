import React, {useState} from 'react'
import { SafeAreaView ,KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
const BadgesScreen = () => {

    const navigation = useNavigation()

    return (
        <View>
            <Text>Badges</Text>

        </View>
    )
}

export default BadgesScreen;
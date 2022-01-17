import React, {useState} from 'react'
import { SafeAreaView ,KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import styleBadges from '../../styles/badges'

const BadgesScreen = () => {

    const navigation = useNavigation()

    return (
        <View style={styleBadges.container}>
            <Text style={styleBadges.text}>Badges</Text>

        </View>
    )
}

export default BadgesScreen;
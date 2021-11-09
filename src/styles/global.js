import { StyleSheet } from 'react-native';
import Colors from './colors'


export default StyleSheet.create({
    warningMessage: {
        backgroundColor: "red"
    },

    sucefullMessage: {
        backgroundColor: Colors.sucess,
    },

    splash: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.dark,
    },

    splashText: {
        color: Colors.light,
        fontSize: 20,
    },

    containerApp: {
        backgroundColor: Colors.dark
    }
})
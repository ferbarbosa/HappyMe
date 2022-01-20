import { StyleSheet } from 'react-native';
import Colors from './colors'


export default StyleSheet.create({
    warningMessage: {
        backgroundColor: Colors.warning,
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

    splashLogo: {
        color: Colors.highlight,
        fontSize: 40,
        fontWeight: '700',
    },

    containerApp: {
        backgroundColor: Colors.dark
    },
    

})
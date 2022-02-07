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

    preLoginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.dark,
    },

    preLoginText: {
        fontSize: 18,
        color: Colors.dark,
        padding: 20,
    },

    preLoginTitle: {
        fontSize: 25,
        fontWeight: '700',
        color: Colors.dark,
    },

    preLoginButton: {
        backgroundColor: Colors.dark,
        borderRadius: 20,
    },

    preLoginButtonText: {
        fontSize: 18,
        padding: 20,
        color: Colors.highlight,
    },

    preLoginImage: {
        height: '60%',
        width: '60%',
        resizeMode: 'contain',
    },

    preLoginItem: {
        alignItems: 'center',
        height: "80%",
        backgroundColor: Colors.highlight,
        borderRadius: 20,
    }
    

})
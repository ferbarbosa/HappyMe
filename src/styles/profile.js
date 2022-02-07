import { StyleSheet } from 'react-native';
import Colors from './colors'


export default StyleSheet.create({

    photoBox: {
        width: '100%',
        height: '30%',
        backgroundColor: Colors.dark,
        justifyContent: 'center',
        alignItems: 'center',
    },

    username: {
        color: Colors.light,
        fontSize: 19,
    },

    statusBox: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    configBox: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    optionsBox: {
        width: '100%',
        height: '70%',
        backgroundColor: Colors.highlight,
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleText: {
        fontSize: 25,
        fontWeight: '700',
        color: Colors.dark,
    },

    texts: {
        fontSize: 18,
        color: Colors.dark,
    },


    optionText: {
        fontSize: 18,
        color: Colors.light,
    },

    optionButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        height: 40,
        backgroundColor: Colors.dark,
        borderRadius: 10,
        margin: 5,
    },

    editImg: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },

    userInput: {
        backgroundColor: 'transparent',
        width: 200,
        height: 50,
        color: Colors.light,
        borderColor: Colors.light,
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
    }

})
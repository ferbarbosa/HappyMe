import { StyleSheet } from 'react-native';
import Colors from './colors'


export default StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.highlight
    },

    letterContainer:{
        height: '95%',
        backgroundColor: Colors.dark,
    },

    welcome: {
        color: Colors.dark,
        fontSize: 19,
        marginBottom: 150,
    },

    awnserReceivedContainer: {
        height: '100%',
        backgroundColor: Colors.dark,
    },
    letterBox: {
        width: '100%',
        backgroundColor: Colors.light,
        height: 200,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },


    letterOptions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 10,
    },

    optionButton:{
        backgroundColor: Colors.highlight,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 5,
        marginLeft: 2,
    },

    letterText: {
        color: Colors.dark,
        fontSize: 16,
    },

    letterInput: {
        backgroundColor: 'transparent',
        paddingHorizontal: 15,
        width: 220,
        height: 120,
        color: Colors.light,
        textAlign: 'center',
        marginBottom: '15%'
    },

    awnserInput: {
        backgroundColor: Colors.dark,
        paddingHorizontal: 15,
        width: 320,
        height: 140,
        color: Colors.light,
        textAlign: 'center',
        borderRadius: 10,
        marginBottom: '15%'
    },

    sendLetterButton: {
        backgroundColor: Colors.dark,
        width: '50%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 2,
        marginBottom: '70%'
    },

    buttonArea: {
        alignItems: 'center',
        width: '50%',
    },

    sendLetterButtonText: {
        color: Colors.light,
        fontSize: 12
    },

    awnsersReceivedText: {
        fontSize: 20,
        color: Colors.light,
        textAlign: 'center'
    },

    letterBg: {
        position: 'absolute',
        width: 320,
        height: 320,
        resizeMode: 'contain'
    },

    logo: {
        width: 320,
        height: 320,
        resizeMode: 'contain',
        marginBottom: 630
    },
    
    logoBox: {
        position: 'absolute',
    }

})
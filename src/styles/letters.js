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
        height: '100%',
        backgroundColor: Colors.dark,
    },

    welcome: {
        color: Colors.dark,
        fontSize: 19,
        marginBottom: 90,
    },

    awnserReceivedContainer: {
        height: '100%',
        backgroundColor: Colors.dark,
    },
    letterBox: {
        width: '100%',
        backgroundColor: Colors.light,
        height: 250,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
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
        textAlign: 'center',
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
        marginBottom: '50%'
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
        width: 250,
        height: 250,
        resizeMode: 'contain',
        marginBottom: 550
    },
    
    logoBox: {
        position: 'absolute',
    },

    carousel: {
        marginTop: '50%',
    },

    awnserCarousel: {
        marginTop: '10%'
    },

    dateTxt: {
        color: Colors.dark,
    },

    viewAwnsersButton: {
        backgroundColor: Colors.highlight,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },

    viewAwnserText: {
        color: Colors.dark,
        fontSize: 20,
    },

    viewAwnserBox: {
        alignItems: 'center',
        marginTop: 10,
    }


})
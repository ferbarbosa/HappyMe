import { StyleSheet } from 'react-native';
import Colors from './colors'


export default StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.dark
    },
    letterContainer:{
        marginBottom: 60,
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
        backgroundColor: Colors.darkLighter,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        width: 300,
        height: 120,
        borderColor: Colors.light,
        color: Colors.light,
        textAlign: 'center'
    },

    sendLetterButton: {
        marginTop: 10,
        backgroundColor: Colors.highlight,
        width: '30%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 2,
    },

    sendLetterButtonText: {
        color: Colors.light,
        fontSize: 12
    }

})
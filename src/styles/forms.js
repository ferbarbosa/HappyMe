import { StyleSheet } from 'react-native';
import Colors from './colors'


export default StyleSheet.create({
    
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.dark
    },
    inputContainer:{
        width: '80%',
    },
    input: {
        backgroundColor: Colors.dark,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: Colors.light,
        color: Colors.light,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor:"transparent",
        width: '50%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: Colors.highlight,
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: Colors.highlight,
        borderWidth: 2,
    },
    buttonText: {
        color: Colors.highlight,
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: 'black',
        fontWeight: '700',
        fontSize: 16,
    },
    registerNow: {
        marginTop: 20,
    },
    registerNowText: {
        color: Colors.light,
    },

    loginTextHighlight: {
        color: Colors.highlight,
        fontWeight: '700',
        fontSize: 16,
    },

    loginText: {
        color: Colors.light,
        fontSize: 16,
    },

    loginTextArea: {
        flexDirection: 'row',
        marginBottom: 50,
        
    },

    logo: {
        fontSize: 50,
        fontWeight: '700',
        color: Colors.highlight,
        marginBottom: 80,
    },
    footer: {
       marginBottom: 100, 
    }
})
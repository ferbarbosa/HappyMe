import { StyleSheet } from 'react-native';
import Colors from './colors'


export default StyleSheet.create({
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
    }

})
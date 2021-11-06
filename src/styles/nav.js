import { StyleSheet } from 'react-native';
import Colors from './colors'


export default StyleSheet.create({
    box: {
        shadowColor: '#7F5DF0',
        shadowOffset:{
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 10,
        position: 'absolute',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        height: 60,
    },

    text: {
        fontSize: 16,
        
    },
})
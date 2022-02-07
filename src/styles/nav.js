import { StyleSheet } from 'react-native';
import Colors from './colors'


export default StyleSheet.create({
    box: {
        position: 'absolute',
        backgroundColor: Colors.dark,
        height: 60,
        width: '100%',
    },

    text: {
        fontSize: 16,
        
    },

    tabNav: {
        backgroundColor: Colors.dark,
        color: Colors.light,
    },
})
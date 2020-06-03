import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 34,
        backgroundColor: 'coral',
    },

    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color:'#333',
        backgroundColor: 'skyblue',

    },

    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    }
});
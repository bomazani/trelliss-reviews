import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ReviewDetails() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>ReviewDetails Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 34,
    },

    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
    },
})
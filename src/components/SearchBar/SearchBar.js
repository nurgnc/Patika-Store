import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native'


const SearcBar = () => {
    return (
        <View style={styles.searchArea}>
            <View style={styles.searchInputContainer}><TextInput placeholder="Ara..." placeholderTextColor={"#BBBBBB"} style={styles.searchInput} /></View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchArea: {
        margin: 10,
    },
    searchInputContainer: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#eceff1',
    },
    searchInput: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#eceff1',
        borderRadius: 10,
    },
})

export default SearcBar
import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

const Loading = () => (
    <View style={styles.background}>
        <ActivityIndicator size={35} color={'#74D8E7'} />
    </View>
);


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Loading;
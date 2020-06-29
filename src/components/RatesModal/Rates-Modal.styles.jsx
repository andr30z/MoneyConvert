import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    modal: {
        height: 200,
        width: Dimensions.get('window').width * 0.84,
        backgroundColor: "white",
        borderRadius: 15,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontFamily:'Ubuntu_400Regular'
    }
});
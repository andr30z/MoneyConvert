import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    midContainer: {
        width: '100%',
        backgroundColor: '#fff'
    },
    button: {
        flexBasis: 0,
        flexGrow: 1,
        backgroundColor: "#dcda48",
        backgroundColor: "#FFFF",
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        elevation: 10,
    },
    gradients: {
        width: "100%",
    },
    adam: {
        fontSize: 25,
        fontFamily: "Ubuntu_400Regular",
        color: '#ffff',
        alignSelf: 'flex-end'
    },
    smith: {
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 25,
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: 1, height: 3 },
        textShadowRadius: 10,
        color: '#ffff',
        marginBottom: 15
    },
    header: {
        marginBottom: -1,
        backgroundColor: '#fff',
        shadowColor: 'transparent',
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    date: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 15,
        fontFamily: "Ubuntu_400Regular",
    }

});
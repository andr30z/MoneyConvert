import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    mid: {
        flex: 1,
        padding: 15,
        justifyContent: 'space-around',
    },
    midItems: {
        flex: 1,
        flexDirection: 'row',
    },
    barContainer: {
        flex: 1 / 2,
        flexDirection: 'row',
        alignItems: "center",
        padding: 20,
        marginLeft: 10
    },
    iconView: {
        flex: 1,
        alignItems: 'flex-end',
    },
    IconCircle: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: "#000000",

    },
    shadow: {
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        elevation: 10,
    },
    textAuthor: {
        fontSize: 18,
        fontFamily: 'Roboto_500Medium',
        color: '#fff',
        alignSelf: 'flex-end',
        padding: 15
    },
    textQuote: {
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 24,
        color: '#fff',
        alignSelf: 'center',
        textAlign: 'left',
        paddingHorizontal: 15
    },
    header: {
        flex: 1 / 3,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }

});
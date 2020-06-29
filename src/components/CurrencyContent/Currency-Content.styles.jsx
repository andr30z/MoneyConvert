import { StyleSheet, Dimensions } from 'react-native';


export const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
    },
    headerDescription: {
        flexDirection: 'column',
        width: Dimensions.get('window').width * 0.9,
        marginBottom: 20,
        alignSelf: 'center',
        alignItems:'center',
        marginTop: 25,
        padding: 10
    },
    headerPickerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft:5,
        marginTop: 20
    },
    headerTitle: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 25,
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: 1, height: 3 },
        textShadowRadius: 10,
        color:'#ffff'
    },
    headerBase: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 19,
        color:'#ffff'
    },


});
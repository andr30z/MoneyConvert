import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
    },
    headerDescription: {
        flexDirection: 'column',
        marginBottom: 20,
        alignItems:'center',
        backgroundColor:'white',
        marginTop:15,
        backgroundColor: "#FFFF",
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        elevation: 10,
        borderRadius:15,
        padding:10
    },
    headerPickerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    headerTitle: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 25,
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: 1, height: 3 },
        textShadowRadius: 10
    },
    headerBase: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 19
    },


});
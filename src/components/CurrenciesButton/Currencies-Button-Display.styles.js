import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({

    button: {
        width:Dimensions.get('screen').width/3.3,
        height:Dimensions.get('screen').width/3,
        backgroundColor: "#dcda48",
        margin: 5,
        paddingVertical:20,
        borderRadius: 20,
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
    textStyle: {
        fontFamily: 'Ubuntu_400Regular'
    },
    textTitle: {
        fontSize: 20,
        marginLeft:12
    },
    textRates: {
        fontSize:13,
    },
    textArrowUp:{
        color:'#19ff19'
    },
    textArrowDown:{
        color:'#e50000'
    },
    symbolContainer:{
        flexDirection:'row'
    }

});
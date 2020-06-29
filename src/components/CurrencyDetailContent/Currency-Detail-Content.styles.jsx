import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignContent:'center',
        backgroundColor: '#F3F0F0'
    },
    header: {
        flex:1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop:10
    },
    headerBackIcon: {
        marginLeft:25
    },
    title: {
        fontSize: 30,
        fontFamily:'Roboto_500Medium',
        textAlign:'center',
        marginRight:15
    },
    midContainer: {
        alignItems:'center',
        flex: 6,
    },
    chartTitle: {
        fontFamily:'Ubuntu_700Bold',
        fontSize: 18,
        alignSelf: 'center',
        borderBottomWidth:1,
        marginBottom:10 
    },
    chartDetails:{
        fontFamily:'Ubuntu_400Regular',
        fontSize: 10,
        alignSelf: 'center',
        marginBottom:20,
    }
});
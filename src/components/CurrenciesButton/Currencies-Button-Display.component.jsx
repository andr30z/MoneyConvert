import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'

import { styles } from './Currencies-Button-Display.styles'

import flagCurrency from '../../../utils/Currencies-Flags';

import getSymbolFromCurrency from 'currency-symbol-map';

import { FontAwesome5 as Icon } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';



const CurrenciesButtonDisplay = ({ id, rate }) => {
    //se vale mais que a base, a base é mais valorizada
    //se vale menos que a base, a base é menos valorizada
    const nav = useNavigation();
    return (
        <>
            <TouchableOpacity
                key={id}
                onPress={() => nav.navigate('CurrencyDetail', {
                    id
                })}
                activeOpacity={0.6}
                style={[styles.button,]}
            >
                {/* 
                    Outra condicional usando o empty, essa evita
                    que a chamada na API das bandeiras seja feita.
                    Condicional puramente performatica.
                */}
                <View style={{ alignItems: 'center', }}>
                    <Image
                        style={{ height: 50, width: 50 }}
                        source={
                            {
                                uri: `https://www.countryflags.io/${flagCurrency[id]}/shiny/64.png`
                            }
                        }
                    />
                    <Text
                        style={[styles.textStyle, styles.textTitle, rate > 1 ?
                            styles.textArrowDown : styles.textArrowUp,]}
                    >
                        {id}
                        <Icon name={rate > 1 ? "arrow-down" : 'arrow-up'} size={15} />
                    </Text>
                    <View style={{ flexDirection:'row', padding:5, alignItems:'center'}}>
                        <Text style={{ fontSize: 13, marginRight: 3, }}> {getSymbolFromCurrency(id)}</Text>
                        <Text
                            style={[styles.textStyle, styles.textRates]} >
                            {rate.toFixed(4)}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default CurrenciesButtonDisplay;

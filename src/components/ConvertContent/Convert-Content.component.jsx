import React, { useEffect, useRef, useState, useCallback } from 'react';
import { View, Dimensions, Text, Animated } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

import { styles } from './Convert-Content.styles';

import TextAreaInput from '../TextInput/Text-Input.component';
import CurrenciesBasePicker from '../CurrenciesPicker/Currencies-Base-Picker.component';
import { useApi } from '../../contexts/Api.context';

const ConvertContent = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const { state: { currencies } } = useApi();

    const [pickerValue_1, setPickerValue_1] = useState('USD');
    const [pickerValue_2, setPickerValue_2] = useState('BRL');
    const [value_1, setValue_1] = useState("1");
    const [value_2, setValue_2] = useState(`${currencies.rates.BRL}`);

    const ref= useRef();

    const toBase_1 = useCallback((input) => {
        setValue_1(input);
        if (pickerValue_1 === 'USD') {
            const val = (parseFloat(input) * currencies.rates[pickerValue_2]);
            setValue_2(String(val));
        } else {
            const val = (parseFloat(input) * currencies.rates[pickerValue_2] / currencies.rates[pickerValue_1]);
            setValue_2(String(val));
        }
    }, [pickerValue_2, pickerValue_1]);

    const toBase_2 = useCallback((input) => {
        setValue_2(input);
        if (pickerValue_2 === 'USD') {
            const val = (parseFloat(input) * parseFloat(value_1));
            setValue_1(String(val));
        } else {
            const val = (parseFloat(input) * currencies.rates[pickerValue_1] / currencies.rates[pickerValue_2]);
            setValue_1(String(val));
        }
    }, [pickerValue_2, pickerValue_1]);

    const eraseText = useCallback(() => {
        setValue_2('');
        setValue_1('');
    }, []);

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 7000,
            }
        ).start();
    }, []);


    useEffect(() => {
        if (value_1.trim().length !== 0) {
            toBase_1(value_1);
        }
    }, [pickerValue_1]);

    useEffect(() => {
        if (value_2.trim().length !== 0) {
            toBase_2(value_2);
        }
    }, [pickerValue_2]);

    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <FontAwesome5 style={styles.shadow} name="exchange-alt" size={40} color='#fff' />
            </View>
            <View style={{ flex: 2 }}>
                <View style={[styles.mid,]}>
                    <View style={[styles.midItems, { alignItems: 'flex-end' }]}>
                        <CurrenciesBasePicker
                            key='1'
                            selectedBase={pickerValue_1}
                            setSelectedBase={setPickerValue_1}
                        />
                        <TextAreaInput
                            key='t1'
                            value={value_1}
                            toBase={toBase_1}
                            erase={eraseText}
                        />
                    </View>
                </View>
                <View style={styles.barContainer}>
                    <View style={{
                        backgroundColor: '#fff',
                        width: Dimensions.get('window').width * 0.7,
                        height: 2,
                    }} />
                    <View style={styles.iconView}>
                        <View style={[styles.IconCircle, styles.shadow]}>
                            <FontAwesome5 name="arrows-alt-v" size={30} color="#74D8E7" />
                        </View>
                    </View>
                </View>
                <View style={[styles.mid,]}>
                    <View style={[styles.midItems, { alignItems: 'flex-start' }]}>
                        <CurrenciesBasePicker
                            key='2'
                            selectedBase={pickerValue_2}
                            setSelectedBase={setPickerValue_2}
                        />
                        <TextAreaInput
                            key='t2'
                            value={value_2}
                            toBase={toBase_2}
                            erase={eraseText}
                        />
                    </View>
                </View>
            </View>
            <Animated.View style={{ flex: 1, opacity: fadeAnim, width: Dimensions.get('window').width * 0.99, alignItems: 'center' }}>
                <Text style={[styles.textQuote, styles.shadow]}>"Com o sucesso nasceu a ambição e o homem tem todo o direito de ser ambicioso."</Text>
                <Text style={[styles.textAuthor, styles.shadow]} >Friedrich Hayek</Text>
            </Animated.View>
        </View>
    )
}

export default ConvertContent;

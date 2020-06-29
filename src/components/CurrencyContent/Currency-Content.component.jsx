import React, { useRef, useEffect, useState } from 'react'
import { View, Text, Animated } from 'react-native'

import { styles } from './Currency-Content.styles'

import CoinsBasePicker from '../CurrenciesPicker/Currencies-Base-Picker.component';
import CurrenciesList from '../CurrenciesList/Currencies-List.component';

import { useApi } from '../../contexts/Api.context';

import { NormalWithSpinner } from '../WithSpinner/Normal-With-Spinner.component';
import currenciesApi from '../../services/api/Currencies.api';


const WithSpinner = NormalWithSpinner(CurrenciesList);
const CurrencyContent = () => {
    const { state: { isLoading }, dispatch } = useApi();

    const [selectedBase, setSelectedBase] = useState('USD');

    const fade = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fade, {
            toValue: 1,
            duration: 7000,
        }).start();

    }, []);

    useEffect(() => {
        dispatch({ type: "CHANGE_LOADING", payload: true });
        currenciesApi.get(`latest?base=${selectedBase}`)
            .then(res => {
                const data = res.data;
                if (data) {
                    dispatch({
                        type: 'CHANGE_CURRENCIES',
                        payload: data
                    })
                    dispatch({ type: "CHANGE_LOADING", payload: false });
                }
            })
            .catch(error =>
                dispatch({ type: 'ERROR', payload: error })
            );
    }, [selectedBase])

    {/* fragment FTW!!!*/ }
    return (
        <>
            <Animated.View
                style={[
                    styles.headerDescription,
                    {
                        opacity: fade
                    }]}>
                <Text style={styles.headerTitle}>Bem vindo!</Text>
                <View style={styles.headerPickerContainer}>
                    <Text style={styles.headerBase}>Escolha uma Base:</Text>
                    <CoinsBasePicker
                        selectedBase={selectedBase}
                        setSelectedBase={setSelectedBase}
                    />
                </View>
            </Animated.View>
            <WithSpinner isLoading={isLoading} />
        </>
    )
}

export default CurrencyContent;

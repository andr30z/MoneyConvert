import React from 'react';
import { View } from 'react-native';

import RNPickerSelect from 'react-native-picker-select';

import { styles } from './Currencies-Base-Picker.styles';

import flagCurrency from '../../../utils/Currencies-Flags';

const CurrenciesBasePicker = ({ selectedBase, setSelectedBase }) => {

    const onValueChange = (choosedValue) => {
        if (selectedBase !== choosedValue && choosedValue !== null) {
            setSelectedBase(choosedValue)
        }
    }

    {/* DAR UMA VERIFICADA NISSO AQUI E USAR O OBJECT.KEYS  */ }
    const rates = Object.entries(flagCurrency)
        .map(([keys, value]) => ({ label: keys, value: keys }));

    return (
        <View style={styles.container}>
            <RNPickerSelect
                style={
                    {
                        viewContainer: {
                            borderWidth: 2,
                            marginLeft: 10,
                            borderColor: '#fff',
                            borderRadius: 10,
                            maxHeight: 50,
                        },
                        inputAndroid: {
                            color: '#fff',
                        },
                        placeholder: {
                            color: '#fff'
                        }
                    }}
                value={selectedBase}
                onValueChange={(value) => {
                    onValueChange(value);
                }}
                items={rates}

            />
        </View>

    )
}

export default CurrenciesBasePicker;

import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Settings-Content.styles';

const SettingsContent = () => {
    return (
        <View style={styles.background}>
            <Text style={styles.textCenter}>MoneyConvert</Text>
            <Text style={styles.textCenter}>Criado por @Andr3zinh00</Text>
            <Text style={styles.textCenter}>Api utilizada para consultar as moedas: https://exchangeratesapi.io</Text>
        </View>
    )
}

export default SettingsContent;

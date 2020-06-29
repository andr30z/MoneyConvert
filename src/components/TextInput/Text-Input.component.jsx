import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './Text-Input.styles';

const TextAreaInput = ({ value, toBase, erase }) => {

    return (
        <View style={styles.background}>
            <TextInput
                keyboardType="numeric"
                style={styles.textInp}
                maxLength={10}
                value={value}
                onChangeText={(text) => {
                    if (!!text && text.trim().length !== 0) {
                        toBase(text);
                        return;
                    }
                    erase();
                }}

            />
        </View>
    )
}

export default React.memo(TextAreaInput);

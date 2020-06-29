import React from 'react';
import { View, Text, Button } from 'react-native';
import Modal from 'react-native-modal';

import { styles } from './Rates-Modal.styles';

const RatesModal = ({ data, isModalVisible, setModalVisible }) => {
    const { dataset, value } = data;
    const sortedRates = dataset ? dataset.filter(rate => value < rate) : [];

    return (
        <Modal
            isVisible={isModalVisible}
            animationIn="bounceInLeft"
            animationOut="bounceOutRight"
            animationInTiming={300}
            animationOutTiming={50}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <Text style={styles.text}>Valor completo: {data.value} </Text>
                        <Text style={styles.text}>Número de cotações com valor maior : {sortedRates.length}</Text>
                    </View>
                    <Text
                        style={{ alignSelf: 'center', fontSize: 13, color: '#3232FF', marginBottom: 10 }}
                        onPress={() => setModalVisible(false)}>FECHAR</Text>
                </View>
            </View>
        </Modal>
    )
}

export default RatesModal;

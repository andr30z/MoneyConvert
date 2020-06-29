import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';

import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';

import { styles } from './Currency-Detail-Content.styles';
import { useNavigation } from '@react-navigation/native';
import RatesModal from '../RatesModal/Rates-Modal.component';

const CurrencyDetailContent = ({ ratesByDate, id }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [dataToModal, setdataToModal] = useState({});

    const nav = useNavigation();

    return (
        <View style={styles.background}>
            <View style={styles.header} >
                <Icon
                    style={styles.headerBackIcon}
                    name="arrow-left"
                    size={25}
                    color="#74D8E7"
                    onPress={() => nav.goBack()}
                />
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>Gráfico de Linha </Text>
                </View>
            </View>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Icon style={{ padding: 5 }} name="chart-line" size={30} color="#7040CF" />
            </View>
            <View style={styles.midContainer}>
                <Text style={styles.chartTitle}>Relação {id}/{ratesByDate.base} no último mês</Text>
                <LineChart
                    data={{
                        labels: ratesByDate.dates,
                        datasets: [
                            {
                                data: ratesByDate.rates
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width * 0.99}
                    height={300}
                    verticalLabelRotation={90}
                    yLabelsOffset={10}
                    onDataPointClick={({ value, dataset, getColor }) => {
                        console.log(getColor())
                        setdataToModal({
                            value,
                            dataset: dataset.data
                        });
                        setModalVisible(true);
                    }}
                    chartConfig={{
                        backgroundGradientFrom: '#F3F0F0',
                        backgroundGradientTo: '#F3F0F0',
                        decimalPlaces: id ==='IDR'? 1:3, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(112, 64, 207, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                        propsForDots: {
                            r: "6",
                            stroke: "#7040CF"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 14,
                        shadowColor: "#000000",
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        shadowOffset: {
                            height: 1,
                            width: 1
                        },
                        elevation: 10,
                    }}
                />
            </View>
            <Text style={styles.chartDetails}>Aperte nos pontos para mais detalhes :D</Text>
            <RatesModal
                isModalVisible={isModalVisible}
                setModalVisible={setModalVisible}
                data={dataToModal}
            />
        </View>
    )
}

export default CurrencyDetailContent;

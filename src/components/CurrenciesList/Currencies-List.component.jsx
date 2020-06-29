import React, { useRef, useEffect } from 'react';
import { View, Text, Dimensions, Animated } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

import { styles } from './Currencies-List.styles';

import { useApi } from '../../contexts/Api.context';

import CurrencyListContent from '../CurrencyListContent/Currency-List-Content.component';

const CurrenciesList = () => {
    const { state: { currencies: { date } } } = useApi();
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    const renderContent = () => (
        <>
            <CurrencyListContent />
        </>
    )

    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle} />
            </View>
        </View>
    )

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 7000,
            }
        ).start();
    }, [])




    return (
        <View style={{ flex: 1, alignItems: 'center', flexDirection:'column' }}>
            <Animated.View style={{
                flex: 3,
                justifyContent: 'center',
                opacity: fadeAnim
            }}>
                <View style={{
                    width: Dimensions.get('window').width * 0.9,
                }}>
                    <Text style={styles.smith}>"A riqueza de uma nação se mede pela riqueza do povo e não pela riqueza dos príncipes..."</Text>
                    <Text style={styles.adam}>Adam Smith</Text>
                </View>
            </Animated.View>
            <View style={{
                flex:1,
                justifyContent: 'flex-end',
            }}>
                <Text style={styles.date}>Cotações de: {date}</Text>
            </View>
            <View style={{
                flex: 1, width: '100%', elevation: 0, borderColor: 'transparent',
            }}>
                <BottomSheet
                    renderContent={renderContent}
                    renderHeader={renderHeader}
                    enabledContentTapInteraction={false}
                    snapPoints={['80%', '40%', "10%"]}
                    initialSnap={2}
                />
            </View>
        </View>
    )
}

export default CurrenciesList;



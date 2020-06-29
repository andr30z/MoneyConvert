import React, { useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'


import { styles } from './Currency-List-Content.styles';
import CurrenciesButtonDisplay from '../CurrenciesButton/Currencies-Button-Display.component';

import { useApi } from '../../contexts/Api.context';

const CurrencyListContent = () => {
    const { state: { currencies } } = useApi();

    const transformedCurrenciesArray = Object.entries(currencies.rates)
        .map(rate => {
            if (rate[0] !== currencies.base) {
                return {
                    id: rate[0],
                    rate: rate[1]
                }
            }
        })
        .filter(currency => currency !== undefined);
    // .slice(0, Page * 10);

    // const data = transformedCurrenciesArray;


    // const renderItem = ({ item }) => {
    //     return (
    //         < View key={item.id} style={{ flex: 1 / 3 }}>
    //             <CurrenciesButtonDisplay {...item} />
    //         </View >
    //     )
    // }

    return (
        <View style={styles.midContainer}>
            {/* <FlatList
                onEndReachedThreshold={0.1}
                onEndReached={() => setPage(Page + 1)}
                removeClippedSubviews
                contentContainerStyle={{ paddingBottom: 10, paddingHorizontal: 10 }}
                showsVerticalScrollIndicator={false}
                numColumns={3}
                data={data}
                maxToRenderPerBatch={1}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                initialNumToRender={1}
            /> */}

            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 10,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignContent:'center',
                    justifyContent:'center'
                }}
                showsVerticalScrollIndicator={false}
                removeClippedSubviews
            >

                    {
                        transformedCurrenciesArray.map(item => (
                            <CurrenciesButtonDisplay key={item.id} {...item} />
                        ))
                    }

            </ScrollView>
        </View>
    )
}

export default CurrencyListContent;

import React, { useEffect, useState } from 'react';

import currenciesApi from '../../services/api/Currencies.api';

import dateConvert from '../../../utils/DateConvert';

import { useRoute } from '@react-navigation/native';

import { useApi } from '../../contexts/Api.context';


import { NormalWithSpinner } from '../../components/WithSpinner/Normal-With-Spinner.component';
import CurrencyDetailContent from '../../components/CurrencyDetailContent/Currency-Detail-Content.component';

const WithSpinner = NormalWithSpinner(CurrencyDetailContent);
const CurrencyDetail = () => {
    //https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01&symbols=ILS&base=USD
    //https://api.exchangeratesapi.io/history?start_at=2020-05-18&end_at=2020-06-18&symbols=ILS&base=USD
    const [ratesByDate, setRatesByDate] = useState({});
    const [rateIsLoading, setRateIsLoading] = useState(true);

    const { state: { currencies } } = useApi();

    const route = useRoute();
    const { id } = route.params;

    useEffect(() => {
        const date = dateConvert();
        currenciesApi
            .get(`history?start_at=${date.datePrevious}&end_at=${date.dateNow}&symbols=${id}&base=${currencies.base}`)
            .then(res => {
                //Pega as datas das cotações 
                const dates = Object.keys(res.data.rates)
                    .sort((a, b) => {
                        return new Date(a) - new Date(b);
                    })


                // Pega as cotações e converte em um Array 
                const arrayRates = dates.map(date => res.data.rates[date])
                    .map((rate) => {
                        const key = Object.values(rate);
                        return key[0]
                    });

                const arrayDates = dates.map(date => {
                    const newDate = new Date(date);
                    const monthDay = (newDate.getDate() + "/" + (newDate.getMonth() + 1))
                    return monthDay

                });
                //  .filter((date, index) => {
                //      return index === 0 || index === dates.length-1 || index === dates.length/2+3|| index === dates.length/3 
                //  });
                setRatesByDate({
                    rates: arrayRates, dates: arrayDates, base: res.data.base
                })
                setRateIsLoading(false);
            })
            .catch(error => setRatesByDate(error));
    }, []);

    return <WithSpinner isLoading={rateIsLoading} ratesByDate={ratesByDate} id={id} />
}

export default CurrencyDetail;

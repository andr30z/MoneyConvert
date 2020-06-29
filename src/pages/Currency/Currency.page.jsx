import React from 'react'

import { BackgroundWithSpinner } from '../../components/WithSpinner/With-Spinner.component';
import CurrencyContent from '../../components/CurrencyContent/Currency-Content.component';

const WithSpinner = BackgroundWithSpinner(CurrencyContent, '../../../assets/background.png');
const Currency = () => {
    return (
        <>
            <WithSpinner />
        </>
    )
}


export default Currency;

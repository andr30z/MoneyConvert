import React from 'react';
import { BackgroundWithSpinner } from '../../components/WithSpinner/With-Spinner.component';
import ConvertContent from '../../components/ConvertContent/Convert-Content.component';

const WithSpinner = BackgroundWithSpinner(ConvertContent);

const Convert = () => {
    return (<WithSpinner />)
}

export default Convert;

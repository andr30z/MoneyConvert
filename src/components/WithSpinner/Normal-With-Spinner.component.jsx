import React from 'react';
import Loading from '../Loading/Loading.component';

export const NormalWithSpinner = (WrappedComponent) => {
    const spinner = ({isLoading, ...props}) => {
        return isLoading ? (<Loading />) : (<WrappedComponent {...props} />)
    }
    return spinner;
}
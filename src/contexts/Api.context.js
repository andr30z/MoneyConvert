import React, { createContext, useContext, useReducer, useEffect } from 'react';

import currenciesApi from "../services/api/Currencies.api";

import reducer, { INITIAL_STATE } from '../reducers/Currencies.reducer';

export const ApiContext = createContext();


const ApiProvider = ({ children }) => {


    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);


    useEffect(() => {

        dispatch({ type: 'CHANGE_LOADING', payload: true })

        currenciesApi.get('latest?base=USD')
            .then(res => {
                const data = res.data;
                console.log(data.base);
                dispatch({
                    type: 'CHANGE_CURRENCIES',
                    payload: data
                });
                dispatch({ type: "CHANGE_LOADING", payload: false });
            })
            .catch(error =>
                dispatch({ type: 'ERROR', payload: error })
            );

    }, []);

    return (
        <ApiContext.Provider
            value={{
                state, dispatch
            }}>
            {children}
        </ApiContext.Provider>
    )
}



export function useApi() {
    const context = useContext(ApiContext);

    if (!context) throw new Error("A API deve ser acessada de dentro de um Provider");

    return context;
}

export default ApiProvider;
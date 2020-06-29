const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_CURRENCIES':
            const currencies = action.payload;
            return {
                ...state,
                currencies,
            }
        case 'CHANGE_LOADING':
            const isLoading = action.payload;
            // console.log('dentro do reducer change Loading: ', state);
            return {
                ...state,
                isLoading
            }
        case 'ERROR':
            const error = action.payload;
            return {
                ...state,
                error
            }
        default:
            return state;
    }
}


export const INITIAL_STATE = {
    currencies: {},
    isLoading: false,
    error: null
}

export default reducer;
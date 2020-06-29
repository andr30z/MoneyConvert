import Axios from 'axios';

const currenciesApi = Axios.create({
    baseURL:"https://api.exchangeratesapi.io/"
});

export default currenciesApi;
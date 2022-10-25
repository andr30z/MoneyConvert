import Axios from 'axios';

const currenciesApi = Axios.create({
    baseURL:"https://api.exchangeratesapi.io/",
    params:{
        access_key: "hZSyzYClknvHBiFyJa3tjp3halYHxiBC"
    }
});

export default currenciesApi;

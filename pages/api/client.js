import axios from 'axios';

const Client = axios.create({
    baseURL: (process.env.APP_ENV == 'development') ? process.env.APP_URL_API_DEV : process.env.APP_URL_API_PROD
});

export default Client;
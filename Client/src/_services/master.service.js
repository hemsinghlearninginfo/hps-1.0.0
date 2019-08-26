import config from 'config';
import { authHeader, handleResponse } from '../_helpers';

export const masterService = {
    getAllMarket,
};

function getAllMarket() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/market/getall`, requestOptions).then(handleResponse);
}



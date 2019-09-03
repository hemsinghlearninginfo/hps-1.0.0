import config from 'config';
import { authHeader, handleResponse } from '_helpers';

export const masterService = {
    getAllMarket,
    createMarket,
    updateMarket
};

function getAllMarket() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/market/getall`, requestOptions).then(handleResponse);
}

function createMarket(data) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(),'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    return fetch(`${config.apiUrl}/market/create`, requestOptions).then(handleResponse);
}

function updateMarket(data) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    return fetch(`${config.apiUrl}/market/${data.id}`, requestOptions).then(handleResponse);
}


import config from 'config';
import { authHeader, handleResponse } from '_helpers';

export const masterService = {
    getAllMarket,
    createMarket,
    updateMarket,
    deleteMarket
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


// prefixed function name with underscore because delete is a reserved word in javascript
function deleteMarket(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
    };
    return fetch(`${config.apiUrl}/market/${id}`, requestOptions).then(handleResponse);
}



import config from 'config';
import { authHeader, handleResponse } from '_helpers';

export const masterService = {
    getAll,
    create,
    update,
    delete: _delete
};

function getAll(type) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/${type}/getall`, requestOptions).then(handleResponse);
}

function create(data, type) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    return fetch(`${config.apiUrl}/${type}/create`, requestOptions).then(handleResponse);
}

function update(data, type) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    return fetch(`${config.apiUrl}/${type}/${data.id}`, requestOptions).then(handleResponse);
}


// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id, type) {
    const requestOptions = {
        method: 'DELETE',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
    };
    return fetch(`${config.apiUrl}/${type}/${id}`, requestOptions).then(handleResponse);
}

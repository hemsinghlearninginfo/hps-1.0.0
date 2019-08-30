import config from 'config';
import { authHeader, handleResponse } from '_helpers';

export const writeupService = {
    create,
    update,
    getAll,
    delete: _delete
    // login,
    // logout,
    // register,
    // getById,
    // update,
    // delete: _delete
};


function create(writeup) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(),'Content-Type': 'application/json' },
        body: JSON.stringify(writeup)
    };
    return fetch(`${config.apiUrl}/writeup/create`, requestOptions).then(handleResponse);
}
function update(writeup) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(writeup)
    };
    return fetch(`${config.apiUrl}/writeup/${writeup.id}`, requestOptions).then(handleResponse);
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
    };
    return fetch(`${config.apiUrl}/writeup`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
    };
    return fetch(`${config.apiUrl}/writeup/${id}`, requestOptions).then(handleResponse);
}

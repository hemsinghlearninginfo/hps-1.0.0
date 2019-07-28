import config from 'config';
import { authHeader, handleResponse } from '../_helpers';

export const extraService = {
    addNewsLetterRequest,
};


function addNewsLetterRequest(emailId) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(),'Content-Type': 'application/json' },
        body: JSON.stringify(emailId)
    };
    return fetch(`${config.apiUrl}/extra/addnewsletterrequest`, requestOptions).then(handleResponse);
}


import config from 'config';
import { authHeader, handleResponse } from '../_helpers';

export const extraService = {
    addNewsLetterRequest,
};


function addNewsLetterRequest(faq) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(),'Content-Type': 'application/json' },
        body: JSON.stringify(faq)
    };
    debugger;
    //return fetch(`${config.apiUrl}/faqs/create`, requestOptions).then(handleResponse);
}


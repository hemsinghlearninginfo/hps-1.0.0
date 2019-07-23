
import { userService } from '../_services';

export const commonMethods = {
    getCurrentUser,
    getRandomNumber
};

function getCurrentUser() {
    let currentUser = null;
    userService.currentUser.subscribe(x => currentUser = {
        currentUser: x !== null ? x : null,
        role: x !== null ? x.role : null
    });
    return currentUser
}

function getRandomNumber(){
    return Math.floor(Math.random()*(10000-1+1)+1);
}

// function error(message) {
//     return { type: alertConstants.ERROR, message };
// }

// function clear() {
//     return { type: alertConstants.CLEAR };
// }
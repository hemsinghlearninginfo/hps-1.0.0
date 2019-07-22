
import { userService } from '../_services';

export const commonMethods = {
    getCurrentUser
};

function getCurrentUser() {
    let currentUser = null;
    userService.currentUser.subscribe(x => currentUser = {
        currentUser: x !== null ? x : null,
        Role: x !== null ? x.role : null
    });
    return currentUser
}

// function error(message) {
//     return { type: alertConstants.ERROR, message };
// }

// function clear() {
//     return { type: alertConstants.CLEAR };
// }
import { userService } from '../_services';

// export function authHeader() {
//     // return authorization header with jwt token
//     let user = JSON.parse(localStorage.getItem('user'));

//     if (user && user.token) {
//         return { 'Authorization': 'Bearer ' + user.token };
//     } else {
//         return {};
//     }
// }

export function authHeader() {
    // return authorization header with jwt token
    const currentUser = userService.currentUserValue;
    if (currentUser && currentUser.token) {
        return { Authorization: `Bearer ${currentUser.token}` };
    } else {
        return {};
    }
}
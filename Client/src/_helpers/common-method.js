
import $ from 'jquery';
import { userService } from '../_services';

export const commonMethods = {
    getCurrentUser,
    getRandomNumber,
    scrollTop,
    callClick
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

function scrollTop(){
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
}

function callClick(object){
    $("#" + object).click();
}

// function error(message) {
//     return { type: alertConstants.ERROR, message };
// }

// function clear() {
//     return { type: alertConstants.CLEAR };
// }
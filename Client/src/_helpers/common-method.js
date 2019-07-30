
import $ from 'jquery';
import { userService } from '../_services';

export const commonMethods = {
    getCurrentUser,
    getRandomNumber,
    scrollTop,
    callClick,
    globalLoader,
    getMessage,
};

function getCurrentUser() {
    let currentUser = null;
    userService.currentUser.subscribe(x => currentUser = {
        currentUser: x !== null ? x : null,
        role: x !== null ? x.role : null
    });
    return currentUser
}

function getRandomNumber() {
    return Math.floor(Math.random() * (10000 - 1 + 1) + 1);
}

function scrollTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
}

function callClick(object) {
    $("#" + object).click();
}

function globalLoader(isVisible) {
    const ele = $('#ipl-progress-indicator')[0];
    if (ele) {
        //ele.classList.add('available');
        if (isVisible)
            ele.classList.remove('available')
        else
            ele.classList.add('available');
        //setTimeout(() => { ele.outerHTML = '' }, 2000)
    }
}

function getMessage(type, displayMessage) {
    return {
        type,
        displayMessage
    }
}

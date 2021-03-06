
import $ from 'jquery';
import { userService } from '_services';
import CryptoJS from 'crypto-js';

export const commonMethods = {
    getQueryString,
    encryptText,
    decryptText,
    getCurrentUser,
    getRandomNumber,
    scrollTop,
    callClick,
    globalLoader,
    getMessage,
    gotop,
    isNotEmpty,
    getDate,
    convertLocalDateToUTCDate,
    onlyDate,
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


function gotop() {
    $(document).ready(function () {

        var elm_class = '.go-up'; // Adjust this accordingly. 

        //Check to see if the window is top if not then display button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) { // 300px from top
                $(elm_class).fadeIn();
            } else {
                $(elm_class).fadeOut();
            }
        });

        //Click event to scroll to top
        $(elm_class).click(function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });
    });
}


function getQueryString(props, queryStringName) {
    let result = '';
    const hash = (props.location.hash).toString().replace('#/', '');
    if (hash !== '') {
        var urlParams = new URLSearchParams(hash);
        if (urlParams.has(queryStringName)) {
            result = urlParams.get(queryStringName);
        }
    }
    return result;
}

function encryptText(plainText) {
    let b64 = CryptoJS.AES.encrypt(plainText, 'A').toString();
    let e64 = CryptoJS.enc.Base64.parse(b64);
    let eHex = e64.toString(CryptoJS.enc.Hex);
    return eHex;
}

function decryptText(cipherText) {
    let reb64 = CryptoJS.enc.Hex.parse(cipherText);
    let bytes = reb64.toString(CryptoJS.enc.Base64);
    let decrypt = CryptoJS.AES.decrypt(bytes, 'A');
    let plain = decrypt.toString(CryptoJS.enc.Utf8);
    return plain;
}


function isNotEmpty(object) {
    return object !== null && object !== undefined && object !== '';
}

function getDate(object) {
    if (isNotEmpty(object)) {
        object = object.split('T')[0];
    }
    return object;
}

//Covert datetime by GMT offset 
//If toUTC is true then return UTC time other wise return local time
function convertLocalDateToUTCDate(date, toUTC) {
    if (isNotEmpty(date)) {
        date = new Date(date);
        date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        //Local time converted to UTC
        //console.log("Time: " + date);
        var localOffset = date.getTimezoneOffset() * 60000;
        var localTime = date.getTime();
        if (toUTC) {
            date = localTime + localOffset;
        } else {
            date = localTime - localOffset;
        }
        date = new Date(date);
        //console.log("Converted time: " + date);
        return date;
    }
    return date;
}

function onlyDate(date) {
    if (isNotEmpty(date)) {
        return date.split(',')[0];
    }
    return date;
}

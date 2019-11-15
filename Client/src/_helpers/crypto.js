import CryptoJS from 'crypto-js';

export const cryptoMethods = {
    encrypt,
    decrypt,
};


function encrypt(plainText){
    let b64 = CryptoJS.AES.encrypt(plainText, 'ABC').toString();
    let e64 = CryptoJS.enc.Base64.parse(b64);
    let eHex = e64.toString(CryptoJS.enc.Hex);
    return eHex;
}

function decrypt(cipherText){
    let reb64 = CryptoJS.enc.Hex.parse(cipherText);
    let bytes = reb64.toString(CryptoJS.enc.Base64);
    let decrypt = CryptoJS.AES.decrypt(bytes, 'ABC');
    let plain = decrypt.toString(CryptoJS.enc.Utf8);
    return plain;
}

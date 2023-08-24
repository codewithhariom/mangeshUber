const CryptoJS = require("crypto-js")
const jwt = require('jsonwebtoken');
module.exports= {
    encryptPassword: (value,secretKey)=>{
        return CryptoJS.AES.encrypt(value,secretKey).toString();
    },
    decryptPassword: (ciphertext,secretKey)=>{
        return CryptoJS.AES.decrypt(ciphertext, secretKey).toString(CryptoJS.enc.Utf8);
    },
    generateToken: (payload,privateKey)=>{
        return jwt.sign(payload, privateKey, {expiresIn:"1h"});
    }
}
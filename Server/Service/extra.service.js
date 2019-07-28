const message = require('message.json');
const validator = require('validator');
const util = require('util');
const db = require('_helpers/db');
const NewsLetterDb = db.NewsLetter;

module.exports = {
    addNewsLetterRequest,
};


async function addNewsLetterRequest(emailParam) {
    if (validator.isEmpty(emailParam.emailId)) {
        throw new Error(message.generic);
    }

    if (await NewsLetterDb.findOne({ emailId: emailParam.emailId })) {
        throw new Error(util.format(message.alreadyAdded, 'EmailId', emailParam.emailId));
    }

    let newsletter = new NewsLetterDb(emailParam);
    await newsletter.save();
}


﻿// const config = require('config.json');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const FAQDb = db.FAQ;

module.exports = {
    getAll,
    addUpdate,
    // authenticate,
    // getById,
    // create,
    // update,
    // delete: _delete
};

async function getAll() {
    return await FAQDb.find();
}

async function addUpdate(faqParam) {
    // validate
    let faq = null;
    if (faqParam.id === undefined) {
        faq = new FAQDb(faqParam);
    }
    else {
        faq = await FAQDb.findOne({ _id: faqParam.id });
        faq.question = faqParam.question;
        faq.answer = faqParam.answer;
        faq.isActive = faqParam.isActive;
    }
    // save faq
    await faq.save();
}

// async function authenticate({ username, password }) {
//     const user = await User.findOne({ username });
//     if (user && bcrypt.compareSync(password, user.hash)) {
//         const { hash, ...userWithoutHash } = user.toObject();
//         const token = jwt.sign({ sub: user.id }, config.secret);
//         return {
//             ...userWithoutHash,
//             token
//         };
//     }
// }


// async function getById(id) {
//     return await User.findById(id).select('-hash');
// }

// async function create(userParam) {
//     // validate
//     if (await User.findOne({ username: userParam.username })) {
//         throw 'Username "' + userParam.username + '" is already taken';
//     }

//     const user = new User(userParam);

//     // hash password
//     if (userParam.password) {
//         user.hash = bcrypt.hashSync(userParam.password, 10);
//     }

//     // save user
//     await user.save();
// }

// async function update(id, userParam) {
//     const user = await User.findById(id);

//     // validate
//     if (!user) throw 'User not found';
//     if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
//         throw 'Username "' + userParam.username + '" is already taken';
//     }

//     // hash password if it was entered
//     if (userParam.password) {
//         userParam.hash = bcrypt.hashSync(userParam.password, 10);
//     }

//     // copy userParam properties to user
//     Object.assign(user, userParam);

//     await user.save();
// }

// async function _delete(id) {
//     await User.findByIdAndRemove(id);
// }
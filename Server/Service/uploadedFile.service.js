const message = require('message.json');
const validator = require('validator');
const util = require('util');
const db = require('_helpers/db');
const UploadedFileDb = db.UploadedFile;

module.exports = {
    getAll,
    //getById,
    create,
    update,
    delete: _delete
    // authenticate,
    // getById,
    // create,
    // 
};

async function getAll() {
    return await UploadedFileDb.find();
}

async function create(uploadedFileParam) {
    // if (validator.isEmpty(uploadedFileParam.question) || validator.isEmpty(uploadedFileParam.answer)) {
    //     throw new Error(message.generic);
    // }

    // if (await UploadedFileDb.findOne({ question: uploadedFileParam.question })) {
    //     throw new Error(util.format(message.alreadyAdded, 'Question', uploadedFileParam.question));
    // }

    let uploadedFile = new UploadedFileDb(uploadedFileParam);
    await uploadedFile.save();
}

async function update(id, uploadedFileParam) {
    const uploadedFile = await UploadedFileDb.findById(id);
    if (!uploadedFile) throw new Error(util.format(message.notfound, 'File'));

    // if (uploadedFile.question !== uploadedFileParam.question && await UploadedFileDb.findOne({ question: uploadedFileParam.question })) {
    //     throw new Error(util.format(message.alreadyAdded, 'Question', uploadedFileParam.question));
    // }
    Object.assign(uploadedFile, uploadedFileParam);
    await uploadedFile.save();
}


async function _delete(id) {
    await UploadedFileDb.findByIdAndRemove(id);
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

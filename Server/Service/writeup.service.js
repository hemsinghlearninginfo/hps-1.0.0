const message = require('message.json');
const validator = require('validator');
const util = require('util');
const db = require('_helpers/db');
const WriteUpDb = db.WriteUp;

module.exports = {
    getAll,
    create,
    update,
    delete: _delete
    // authenticate,
    // getById,
    // create,
    // 
};

async function getAll() {
    return await WriteUpDb.find();
}

async function create(writeUpParam) {
    if (validator.isEmpty(writeUpParam.description)) {
        throw new Error(message.generic);
    }

    if (await WriteUpDb.findOne({ description: writeUpParam.description })) {
        throw new Error(util.format(message.alreadyAdded, 'WriteUp', writeUpParam.description));
    }

    let writeup = new WriteUpDb(writeUpParam);
    await writeup.save();
}

async function update(id, writeupParam) {
    const writeup = await WriteUpDb.findById(id);
    if (!writeup) throw new Error(util.format(message.notfound, 'FAQ'));

    if (writeup.description !== writeupParam.description && await WriteUpDb.findOne({ description: writeupParam.description })) {
        throw new Error(util.format(message.alreadyAdded, 'WriteUp', writeupParam.description));
    }
    Object.assign(writeup, writeupParam);
    await writeup.save();
}


async function _delete(id) {
    await WriteUpDb.findByIdAndRemove(id);
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

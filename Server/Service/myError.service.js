const db = require('_helpers/db');
const ErrorDb = db.MyError;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete,
    interLogger
};

async function getAll() {
    return await ErrorDb.find();
}

async function getById(id) {
    return await ErrorDb.findById(id);
}

async function create(errorParam) {
    const myError = new Error();
    Object.assign(myError, errorParam);
    await myError.save();
}

async function update(id, errorParam) {
    const myError = await ErrorDb.findById(id);
    Object.assign(myError, errorParam);
    await myError.save();
}

async function _delete(id) {
    await ErrorDb.findByIdAndRemove(id);
}

function interLogger(errorParam) {
    const myError = new ErrorDb();
    Object.assign(myError, errorParam);
    myError.save();
}
const message = require('message.json');
const validator = require('validator');
const util = require('util');
const db = require('_helpers/db');
const ChatMessageDb = db.ChatMessage;

module.exports = {
    getAll,
    create,
    update,
    delete: _delete
};

async function getAll(user) {
    return await ChatMessageDb.find();
}

async function create(paramData) {
    if (validator.isEmpty(paramData.message)) {
        throw new Error(message.generic);
    }

    let chatMessage = new ChatMessageDb(paramData);
    await chatMessage.save();
}

async function update(id, paramData) {
    const chatMessage = await ChatMessageDb.findById(id);
    if (!chatMessage) throw new Error(util.format(message.notfound, 'Message'));

    Object.assign(chatMessage, paramData);
    await chatMessage.save();
}


async function _delete(id) {
    await ChatMessageDb.findByIdAndRemove(id);
}


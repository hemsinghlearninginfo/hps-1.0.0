const message = require('message.json');
const validator = require('validator');
const util = require('util');
const db = require('_helpers/db');
const MarketDb = db.Market;

module.exports = {
    get,
    getAll,
    create,
    update,
    delete: _delete
};

async function get() {
    return await MarketDb.find({ isActive: true });
}

async function getAll() {
    return await MarketDb.find();
}

async function create(data) {
    if (validator.isEmpty(data.description) || validator.isEmpty(data.name)) {
        throw new Error(message.generic);
    }

    if (await MarketDb.findOne({ name: data.name })) {
        throw new Error(util.format(message.alreadyAdded, 'Market', data.name));
    }

    let marketDb = new MarketDb(data);
    await marketDb.save();
}

async function update(id, data) {
    const market = await MarketDb.findById(id);
    if (!market) throw new Error(util.format(message.notfound, 'Market'));

    if (market.name !== data.name && await MarketDb.findOne({ name: data.name })) {
        throw new Error(util.format(message.alreadyAdded, 'Market', data.name));
    }
    Object.assign(market, data);
    await market.save();
}


async function _delete(id) {
    await MarketDb.findByIdAndRemove(id);
}

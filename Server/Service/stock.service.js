const message = require('message.json');
const validator = require('validator');
const util = require('util');
const db = require('_helpers/db');
const StockDb = db.Stock;

module.exports = {
    get,
    getAll,
    create,
    update,
    delete: _delete
};

async function get() {
    return await StockDb.find({ isActive: true });
}

async function getAll() {
    return await StockDb.find();
}

async function create(data) {
    if (validator.isEmpty(data.description) || validator.isEmpty(data.name)) {
        throw new Error(message.generic);
    }

    if (await StockDb.findOne({ name: data.symbol })) {
        throw new Error(util.format(message.alreadyAdded, 'Stock', data.name));
    }

    let marketDb = new StockDb(data);
    await marketDb.save();
}

async function update(id, data) {
    const market = await StockDb.findById(id);
    if (!market) throw new Error(util.format(message.notfound, 'Stock'));

    if (market.name !== data.name && await StockDb.findOne({ name: data.name })) {
        throw new Error(util.format(message.alreadyAdded, 'Stock', data.name));
    }
    Object.assign(market, data);
    await market.save();
}


async function _delete(id) {
    await StockDb.findByIdAndRemove(id);
}

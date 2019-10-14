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
    let result = await StockDb.find();
    return await StockDb.find();
}

async function create(data) {
    if (validator.isEmpty(data.symbol) || validator.isEmpty(data.name) || validator.isEmpty(data.market)) {
        throw new Error(message.generic);
    }

    if (await StockDb.findOne({$and: [{ symbol: data.symbol }, { market: data.market }]})) {
        throw new Error(util.format(message.alreadyAdded, 'Stock symbol details', data.symbol));
    }

    let stockDb = new StockDb(data);
    await stockDb.save();
}

async function update(id, data) {
    const stock = await StockDb.findById(id);
    if (!stock) throw new Error(util.format(message.notfound, 'Stock'));

    if (stock.name !== data.name && await StockDb.findOne({$and: [{ symbol: data.symbol }, { market: data.market }]})) {
        throw new Error(util.format(message.alreadyAdded, 'Stock', data.name));
    }
    Object.assign(stock, data);
    await stock.save();
}


async function _delete(id) {
    await StockDb.findByIdAndRemove(id);
}

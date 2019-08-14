const MarketDb = require('../_helpers/db').Market;

module.exports = {
    seedmarket
};

async function seedmarket() {
    var markets =[];
    markets.push({ name: 'NSE', description: 'NSE'});
    markets.push({ name: 'MCX', description: 'NSE'});
    for (let i = 0; i < markets.length; i++) {
        const findMarket = await MarketDb.findOne({ name: markets[i].name });
        if (!findMarket) {
            const market = new MarketDb(markets[i]);
            await market.save();
        }
    }
}
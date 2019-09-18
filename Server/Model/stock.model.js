const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    symbol: { type: String, required: true },
    
    expiryDate: { type: Date, default: null },
    quantity: { type: String, default: null },
    unit: { type: String, default: '' },

    isIndex: { type: Boolean, default: false },
    isFuture: { type: Boolean, default: false },
    isDerivates: { type: Boolean, default: false },
    derivatesType: { type: String, default: '' },
    
    market:
    {
        type: Schema.Types.ObjectId,
        ref: 'Market'
    },
    createdDate: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Stock', schema);
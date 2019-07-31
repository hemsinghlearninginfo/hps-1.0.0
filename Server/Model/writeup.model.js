const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    description: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true },
    isApproved: { type: Boolean, default: false }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('WriteUp', schema);
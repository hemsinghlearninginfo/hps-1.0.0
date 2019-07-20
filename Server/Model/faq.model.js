const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('FAQ', schema);
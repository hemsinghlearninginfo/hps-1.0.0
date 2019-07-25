const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    stack: { type: String },
    message: { type: String },
    isResolved: { type: Boolean, default: false },
    resolvedComment: { type: String, default: '' },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('MyError', schema);
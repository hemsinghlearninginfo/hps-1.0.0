const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    emailId: { type: String, unique: true, required: true },
    isApproved: { type: Boolean, default: false },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('NewsLetter', schema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    fromUsername:
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    toUsername:
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    message: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('ChatMessage', schema);
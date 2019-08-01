const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username:
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    description: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    displayName : {type: String, require: true},
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    isApproved: { type: Boolean, default: false }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('WriteUp', schema);
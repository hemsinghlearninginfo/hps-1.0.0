const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    image: { type: String, default:"none", required: true },
    name: { type: String, required: true },
    description: { type: String },
    size: { type: Number, required: true },
    type: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true }
});

//schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('UploadedFile', schema);

const req = require('express/lib/request');
const mongoose = require('mongoose');

const NPCItemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('NPCItem', NPCItemSchema);
const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true,
        enum: ['user', 'model'],
    },
    message: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
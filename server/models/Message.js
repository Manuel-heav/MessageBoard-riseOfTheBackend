const mongoose = require('mongoose')

const { Schema } = mongoose;

const messageSchema = new Schema({
    username: String,
    Description: String,
    timestamps: true,
})

const MessageEntry = mongoose.model('MessageEntry', messageSchema)
module.exports(MessageEntry)
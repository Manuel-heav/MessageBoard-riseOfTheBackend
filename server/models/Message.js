const mongoose = require('mongoose')

const { Schema } = mongoose;

const messageSchema = new Schema({
    username: String,
    Description: String,
})

const MessageEntry = mongoose.model('MessageEntry', messageSchema)

module.exports= MessageEntry
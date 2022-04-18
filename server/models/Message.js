const mongoose = require('mongoose')

const { Schema } = mongoose;

const messageSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
    }
})

const MessageEntry = mongoose.model('MessageEntry', messageSchema)

module.exports= MessageEntry
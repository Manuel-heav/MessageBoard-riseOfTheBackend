const mongoose = require('mongoose')

const { Schema } = mongoose;

const messageSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
})

const MessageEntry = mongoose.model('MessageEntry', messageSchema)

module.exports= MessageEntry
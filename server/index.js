const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const messages = require('./api/messages');
require('dotenv').config()

const app = express()


mongoose.connect("mongodb+srv://admin:admin123@cluster0.l4c0l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},() => {
    console.log("connected")
})
app.use(morgan())
app.use(cors())
app.use(helmet())

app.use(bodyParser.json());

app.use('/api/messages', messages)

app.get('/', (req, res) => {
    res.json({
        message: "Hello"
    })
})


const notFound = (req,res, next) => {
    res.status(404)
    const error = new Error('Not Found')
    next(error)
}

const errorHandler = (error, req, res, next) => {
    res.status(res.statusCode || 500)
    res.json({
        message: error.message
    })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 2000

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})


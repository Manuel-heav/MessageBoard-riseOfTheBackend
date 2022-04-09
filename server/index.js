const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const messages = require('./api/messages')
require('dotenv').config()

const app = express()


mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.use(morgan())
app.use(cors({
    origin: process.env.CORS_ORIGIN
}))
app.use(helmet())


app.get('/', (req, res) => {
    res.json({
        message: "Hello"
    })
})

app.use('/api/messages', messages)

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


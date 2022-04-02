const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

require('dotenv').config()


app.use(morgan())
app.use(cors())
app.use(helmet())
const app = express()


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
    console.log(`Listening to port ${PORT}`)
})


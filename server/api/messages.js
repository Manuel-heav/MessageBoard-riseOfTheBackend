const express = require('express')
const router = express.Router()
const MessageEntry = require('../models/Message')


router.get('/', async (req, res, next) => {
    try {
      const entries = await MessageEntry.find();
      res.json(entries);
    } catch (err) {
      next(err)
    }
  });


router.post('/', async (req, res, next) => {
  try {
    const messageEntry = new MessageEntry(req.body);
    const createdEntry = await messageEntry.save();
    res.json(createdEntry)
  }
  catch (err){
    if (err.name === 'ValidationError') {
      res.status(422);
    }
    next(err);
  }

})
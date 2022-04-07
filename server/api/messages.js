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
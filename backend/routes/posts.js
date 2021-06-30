const express = require('express')
const router = express.Router()
const Post = require('../models/post')

router.get('/', (req, res) => {
  res.send('We are on posts')
})

router.post('/', (req, res) => {
  console.log(req.body)
})

//Can have multiple here
router.get('/specific', (req, res) => {
  res.send('specific posts')
})

module.exports = router
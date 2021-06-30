const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('We are on posts')
})

//Can have multiple here
router.get('/specific', (req, res) => {
  res.send('specific posts')
})

module.exports = router
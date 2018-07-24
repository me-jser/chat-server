const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.send('hello, let us chat')
})

module.exports = router
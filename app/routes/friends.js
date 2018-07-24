const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.send([{
      name:'John',
      id:1
  }])
})

module.exports = router
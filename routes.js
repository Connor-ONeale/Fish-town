const express= require('express')
const router = express.Router()
// const data = require('./data.json')
const fs = require('fs')
//const { request } = require('http')
//const server = require('./server')

router.send('/', (req, res) => {
    console.log("hello")
  })

  module.exports = router
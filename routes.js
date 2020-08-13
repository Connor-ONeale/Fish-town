const express= require('express')
const router = express.Router()
// const data = require('./data.json')
const fs = require('fs')
//const { request } = require('http')
//const server = require('./server')

router.get('/', (req, res) => {
    fs.readFile('./data.json', 'utf8' ,(err, data) => {
        if(err) throw err 
        const obj = JSON.parse(data)
    res.render("puppies/index", obj)
  })
})

  module.exports = router
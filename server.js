//help

const express= require('express')
const router = express.Router()
const fs = require('fs')
const { request } = require('http')

router.get('/', (req, res) => {
    fs.readFile('./data.json', 'utf8' ,(err, data) => {
        if(err) throw err 
        const obj = JSON.parse(data)
    res.render("fish/index", obj)
  })
})

router.get('/fish', (req, res) => {
    fs.readFile('./data.json', 'utf8' ,(err, data) => {
        if(err) throw err 
        const obj = JSON.parse(data)
  res.render('fish/index', obj)
})
})

module.exports = router
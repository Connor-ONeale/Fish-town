const express= require('express')
//const router = express.Router()
const fs = require('fs')
// const { request } = require('http')
const hbs = require('express-handlebars')
const server = express()
//const fish = require('./data.json')

server.get('/', (req, res) => {
    fs.readFile('./data.json', 'utf8' ,(err, data) => {
        if(err) throw err 
        const obj = JSON.parse(data)
        console.log("_---------------------")
        console.log(obj)
    res.render("fish/index", obj)
  })
})

server.get('/fish', (req, res) => {
    fs.readFile('./data.json', 'utf8' ,(err, data) => {
        if(err) throw err 
        const obj = JSON.parse(data)
  res.render('fish/index', obj)
})
})

server.get('/:id', (req, res) => {
  let id = req.params.id
  fs.readFile('./data.json', 'utf8' ,(err, data) => {
      if(err) throw err 
      const obj = JSON.parse(data)
      const findFish = obj.fish.find(e => e.id == id)
      res.render('fish/view', findFish)
  })
})

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))

server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))
//server.use('/', server)

module.exports = server
const express= require('express')
//const router = express.Router()
const fs = require('fs')
// const { request } = require('http')
const hbs = require('express-handlebars')
const server = express()
const fish = require('./data.json')

// router.get('/', (req, res) => {
//     fs.readFile('./data.json', 'utf8' ,(err, data) => {
//         if(err) throw err 
//         const obj = JSON.parse(data)
//     res.render("fish/index", obj)
//   })
// })

// router.get('/fish', (req, res) => {
//     fs.readFile('./data.json', 'utf8' ,(err, data) => {
//         if(err) throw err 
//         const obj = JSON.parse(data)
//   res.render('fish/index', obj)
// })
// })

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
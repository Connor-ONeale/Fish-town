const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err
    else {
      const obj = JSON.parse(data)
      res.render('fish/index', obj)
    }
  })
})

router.get('/fish', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err
    else {
      const obj = JSON.parse(data)
      res.render('fish/index', obj)
    }
  })
})

router.get('/fish/:id', (req, res) => {
  let id = req.params.id
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err
    else {
      const obj = JSON.parse(data)
      const findFish = obj.fish.find(e => e.id == id)
      res.render('fish/view', findFish)
    }
  })
})

router.get('/fish/edit/:id', (req, res) => {
  let id = req.params.id
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err
    else {
      const obj = JSON.parse(data)
      const eFish = obj.fish.find(e => e.id == id)
      res.render('fish/edit', eFish)
    }
  })
})

router.post('/fish/edit/:id', (req, res) => {
  const id = req.params.id
  const filePath = './data.json'
  fs.readFile(filePath, 'utf8', (err, data) => {
    const obj = JSON.parse(data)
    if (err) throw err
    else {
      obj.fish.map(e => {
        if (e.id == id) {
          e.name = req.body.name
          e.breed = req.body.breed
          e.owner = req.body.owner
        }
      })
      fs.writeFile(filePath, JSON.stringify(obj, null, 2), (err) => {
        if (err) throw err
        else {
          res.redirect('/fish/' + id)
        }
      })
    }
  })
})

// function readFile(file){
//   fs.
// }
module.exports = router

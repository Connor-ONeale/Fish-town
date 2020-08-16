const fs = require('fs');

function readFile (next) {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err
    else {
      // eslint-disable-next-line no-const-assign
      const obj = JSON.parse(data)
      next(obj)
    }
  })
}

module.exports = {
  readFile
}
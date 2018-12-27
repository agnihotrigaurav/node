var fs = require('fs')

var data = {
    name: 'Gaurav'
}
fs.writeFile('demo.json', JSON.stringify(data), (err) => {
    console.log('write finished', err)
})
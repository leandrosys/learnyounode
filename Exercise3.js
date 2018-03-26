var fs = require('fs')

var buf = fs.readFileSync(process.argv[2]).toString()

var spaces = (buf.split('\n').length) - 1

console.log(spaces)


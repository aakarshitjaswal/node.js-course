const fs = require('fs')
fs.writeFileSync('1-json.json', '{"name":"Andrew","planet":"Earth","age":24}' )

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Helix'

console.log(data)

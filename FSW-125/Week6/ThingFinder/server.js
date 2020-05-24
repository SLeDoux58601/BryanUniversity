const express = require('express')
const server = express()
const morgan = require('morgan')

server.use(morgan('dev'))
server.use(express.json())


server.use('/fruits', require('./routes/fruitRouter'))

server.listen(9000, () => {
    console.log('Connected')
})
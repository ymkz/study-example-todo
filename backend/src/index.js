const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')

const router = require('./routes/v1')

const app = express()

app.use(morgan('short'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function(_, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept')
  next()
})

app.use('/api/v1/', router)

app.listen(3001, () => console.log('> Ready at http://localhost:3001'))

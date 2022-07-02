const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())

// Tell the bodyparser middleware to accept more data
app.use(bodyParser.json({limit: '50mb'}))

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(3000)


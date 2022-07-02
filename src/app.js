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

// middleware to deal with 404 error
app.use((req, res, next) => {
    let err = {
      message: 'route does not exist',
      status: 404
    }
    //let err = new Error('route does not exist')
    //err.status(404)
    next(err)  // send error to next middleware
})

// receives error from last middleware
app.use((err, req, res, next) => {
    // if error 404, sends back message 'route does not exist'
    // otherwise it sends Murphy's message
    // log('api_server', 'error', `Error status ${err.status}, message: ${err.message}, url: ${req.url}.`)
    // console.log(err.status)
    res.status(err.status || 500).send(err.message || `Don't force it get a larger hammer.`)
})

app.listen(3000)


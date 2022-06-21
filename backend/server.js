const express = require('express')
const app = express()
require('dotenv').config();
const products = require('./routes/products')
const bodyParser = require('body-parser')
const {connectDatabase} = require('./config/config');
const cors = require('cors')

connectDatabase();
app.use(cors());
app.use(bodyParser())




app.use('/api/v1', products)

// handling schema validation error

app.use((err, req, res, next) => {
  // logic

  let error = {...err}

  error.message = err.message

  // Wrong Mongoose Object ID Error
  if (err.name === 'CastError') {
    const message = `Resource not found. Invalid: ${err.path}`
    error = new Error(message)
  }

  // Wrong Mongoose Validation Error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(value => value.message);
    error = new Error(message)
  }
  // Wrong Mongoose duplicate key errors
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`
    error = new Error(message)
  }

  res.status(error.statusCode || 500 ).json({
    success: false,
    message: error.message || 'server internal error'
  })

})


app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})

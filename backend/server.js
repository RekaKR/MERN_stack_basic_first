const express = require('express')
const app = express()

const cors = require('cors')

require('dotenv').config() //require('dotenv/config')
const PORT = process.env.PORT
const MONGO_CONNECTION = process.env.MONGO_CONNECTION

const mongoose = require('mongoose')
//const db = mongoose.connection


//MIDDLEWARES
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))


//ROUTES
app.get('/', (req, res) => {
  res.send('We are on home')
})

const postsRoute = require('./routes/posts')

//ROUTES MIDDLEWARES
app.use('/posts', (req, res, next) => {
  console.log('Middleware is working.')
  next()
})

app.use('/posts', postsRoute)


//DATABASE CONNECTION
mongoose.connect(`${MONGO_CONNECTION}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})


//LISTEN
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
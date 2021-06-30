const express = require('express')
const app = express()

PORT = 3001

//MIDDLEWARES


//ROUTES
app.get('/', (req, res) => {
  res.send('We are on home')
})

app.get('/posts', (req, res) => {
  res.send('We are on posts')
})


//LISTEN
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
const express = require('express')
const app = express() 

const { config } = require('./config/index')
const routes = require('./routes/index.js')

//Parse And routes
app.use(express.json())

routes(app)




app.listen(config.port , () => {
  console.log(`Magic Happens on http://localhost:${config.port}`)
})
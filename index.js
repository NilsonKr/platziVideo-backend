const express = require('express')
const { config } = require('./config/index')


const server = express() 

server.get('/', (req,res) => {
  res.header({ 'Content-Type' : 'text/html' })
  res.send('<h1>Hello World</h1>')
})

server.get('/api', (req,res) => {
  res.json({"Hello" : "World"})
})


server.listen(config.port , () => {
  console.log(`Magic Happens on http://localhost:${config.port}`)
})
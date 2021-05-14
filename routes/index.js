const express = require('express')
const mockData = require('../utils/mocks/movies.js')

function routes(app){
  const router = express.Router()
  app.use(router) 
  
  
  router.get('/api/movies', async (req,res,next) => {
    try {
      const data = await Promise.resolve(mockData)

      res.status(200).json({
        "data" : data,
        "message": "Movies Listed"
      })

    } catch (error) {
      
      next('Bad Request! ' + error )
    }
  })

  router.get('/api/movies/:movieId', async (req,res,next) => {
    try {
      const data = await Promise.resolve(mockData[0])

      res.status(200).json({
        "data" : data,
        "message": "Movie Retrieved"
      })

    } catch (error) {
      
      next('Bad Request! ' + error )
    }
  })

  router.post('/api/movies/', async (req,res,next) => {
    
    try {
      const data = await Promise.resolve(mockData[0].id)

      res.status(200).json({
        "data" : {
          id: data,
          ...req.body
        },
        "message": "Movie Created"
      })

    } catch (error) {
      
      next('Bad Request! ' + error )
    }
  })

  router.put('/api/movies/:movieId', async (req,res,next) => {
    try {
      const data = await Promise.resolve(mockData[0])

      res.status(200).json({
        "data": data,
        "message": "Movie Updated"
      })

    } catch (error) {
      
      next('Bad Request! ' + error)
    }
  })

  router.delete('/api/movies/:movieId', async (req,res,next) => {
    try {
      const data = await Promise.resolve(mockData[0])

      res.status(200).json({
        "data": data,
        "message": "Movie Removed Succesfully"
      })

    } catch (error) {
      
      next('Bad Request! ' + error)
    }
  })
}

module.exports = routes
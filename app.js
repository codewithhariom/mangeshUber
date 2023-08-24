const express= require('express');
const app= express();
const errorHandler= require('./src/middleware/errorHandler')
app.use(express.json())

// initialize models
require('./src/models/index')

// routes
app.use('/api/v1',require('./src/routes'))

// Error handler middleware
app.use(errorHandler)

module.exports= app


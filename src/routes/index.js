const router= require('express').Router()

// Import routes
router.use('/user',require('./userRoute'));

module.exports= router;
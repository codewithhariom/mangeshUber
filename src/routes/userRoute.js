const express= require('express');
const {getUser,SingUp,logIn}= require('../controllers/userController')
const {validateSingupBody,validateLoginBody} =require('../middleware/validation')
const router= express.Router();

router.get('/',getUser)
router.post('/sing-up',validateSingupBody,SingUp)
router.post('/login',validateLoginBody,logIn)

module.exports = router;
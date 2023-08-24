const Joi= require('joi')
const {singUpShema,logInShema}= require('../utils/joiShema')
module.exports= {
    validateSingupBody: async (req,res,next)=>{
        const {error ,value}= singUpShema.validate(req.body)      
        if(error) return next(error)
        next()
    },
    validateLoginBody: async (req,res,next)=>{
        const {error ,value}= logInShema.validate(req.body)      
        if(error) return next(error)
        next()
    }
}

const Joi = require('joi');

module.exports= {
    singUpShema: Joi.object({
        firstName:Joi.string().required(),
        lastName:Joi.string().allow(''),
        email:Joi.string().email().required(),
        password:Joi.string().regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
        .required()
        .min(8)
        .max(20).messages({"string.pattern.base":`Password should be 1 char 1 capital and at least 1 numeric value`}),
        address:Joi.array().items(Joi.object({
            street:Joi.string().required().messages({'any.required': `"street" is a required field`}),
            city:Joi.string().required().messages({'any.required': `"city" is a required field`}),
            state:Joi.string().required().messages({'any.required': `"state" is a required field`}),
            zipcode:Joi.string().required().messages({'any.required': `"zipcode" is a required field`}),
            country:Joi.string().required().messages({'any.required': `"country" is a required field`}),
        })),
        number:Joi.string().length(10).pattern(/^[0-9]+$/).required(),
        role:Joi.string().valid(1,2,3,4).required(),
    }),
    logInShema : Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().required(),
    })

}
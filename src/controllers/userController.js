const {User,Address,sequelize} = require('../models');

const genericServices = require('../utils/genericServices')
const { onSuccess } = require('../utils/handleResponse')
const { logIn, singUp } = require('../utils/respMessage');
const {encryptPassword,decryptPassword,generateToken} = require('../utils/helper');
const {USER_NOT_FOUND,INVALID_USER} =require('../utils/respMessage')

const userModel = genericServices(User);

module.exports = {

    SingUp: async (req, res, next) => {
        try {
            req.body.password = encryptPassword(req.body.password, process.env.PASSWORD_SECRET_KEY);
            const resp = await userModel.create({ data: { ...req.body }})
            return onSuccess({ res, respObj: { ...singUp } })
        } catch (error) {
            next(error)
        }
    },
    logIn: async (req, res, next) => {
        try {
            const { email,password } = req.body;
            const user = await userModel.findOne({ where: { email } });
            if (!user)
                throw { statusCode: 404, message: USER_NOT_FOUND }
            const decryptedPass= decryptPassword(user.password,process.env.PASSWORD_SECRET_KEY);
            if(decryptedPass!=password)
            throw { statusCode: 404, message: INVALID_USER };
            const payload= {email:user.email,userId:user.id,role:user.role};
            return onSuccess({ res, respObj: { ...logIn, authToken: generateToken(payload,process.env.TOKEN_PRIVATE_KEY) } })
        } catch (error) {
            next(error)
        }
    },
    getUser: async (req, res, next) => {
        const user = await findAll({});
        res.send(user)
    },
}
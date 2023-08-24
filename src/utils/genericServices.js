const Addresse = require('../models').Address;
module.exports = (model)=> {
    const findAll= async ({where,page=1,limit=10,attributes,includes,sort}) => {
        const offset= ((page*1)-1)*(limit*1)
        return await User.findAll({
            where,            
            order:sort, 
            offset,
            limit,       
            raw: true            
        })
    };

    const findOne= async ({where={},attributes})=>{
        return await model.findOne({where,attributes,raw:true})
    };

    const create= async ({data,include})=>{
        return await model.create({...data,include:Addresse});
    };

    return {
        findAll,
        findOne,
        create
    }
}
module.exports = (err,req,res,next)=>{
    let error={...err};
    let statusCode= error.statusCode || 500
    if(err.name==='ValidationError'){
        error= ValidationError(error)        
        statusCode=400
    }
    else if(err.name==='SequelizeValidationError'){
        error= SequelizeValidationError(error)
        statusCode=400
    }
    else if(err.name==='SequelizeUniqueConstraintError'){
        error = SequelizeUniqueConstraintError(error)
    }
    else{
        error= {statusCode:err.statusCode,message:err.message};
    }
    return res.status(statusCode).send({status:false,error:error})
}


const ValidationError= (error)=>{
    let errors= {}
    error.details.forEach(item=> {
        errors[item.path[0]]= item.message.replace(/\"/g,"")
    })
    return errors
}

const SequelizeValidationError= (error)=>{
    let errors= {}
    error.errors.forEach(item=> {
        errors[item.path]= replaceOccurrences(item.message)
    })
    return errors
}

const SequelizeUniqueConstraintError = (error)=>{
    let errors= {};
    error.errors.forEach(item=> {
        errors[item.path.split("__")[1]]= `This value '${replaceOccurrences(item.value)}' is already exist `
    })
    return errors
}

const replaceOccurrences= (str)=>{
    return str.replace(/\"/g,"")
}
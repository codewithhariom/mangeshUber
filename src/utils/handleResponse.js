module.exports = {
    onSuccess: ({res,respObj})=>{
        return res.status(respObj?.statusCode|| 200).json({...respObj})
    }
}
let jwt = require('jsonwebtoken');

module.exports = {
    sign:({username,id})=>{
        return jwt.sign({
            username,
            id
        },'hutu',{
            expiresIn:60*60*24*3
        })
    },
    verify:(token)=>{
        return new Promise((resolve,reject)=>{
            jwt.verify(token,'hutu',(err,decode)=>{
                if(!err){
                    resolve(decode)
                }else{
                    reject(err.message)
                }
            })
        })
    }
}
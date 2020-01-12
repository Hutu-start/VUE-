let router = require('express').Router();
let bcrypt = require('bcryptjs');
let mgdb = require('../../utils/mgdb');
let fs = require('fs');
let pathLib = require('path');

router.post('/',(req,res,next)=>{
     //允许跨域
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    let{username,password,nikename} = req.body;
    
    if (!username || !password) {
        res.send({
            err: 1,
            msg: '用户名，密码为必传参数'
        });
        return;
    }
    nikename = nikename || '默认昵称';
    let follow = 0;
    let fans = 0;
    let time = Date.now()
    // let goods= [];
    let icon;//用户头像

    if (req.files && req.files.length > 0) {
        //用客户端传的icon
        fs.renameSync(
        req.files[0].path,
        req.files[0].path + pathLib.parse(req.files[0].originalname).ext
        )
        icon = '/upload/user/' + req.files[0].filename + pathLib.parse(req.files[0].originalname).ext
    } else {
        icon = '/upload/noimage.jpg';
    }

    mgdb.open({
        dbName:'vue_app',
        collectionName:'user'
    }).then(
        ({collection,client})=>{
            collection.find({
                username
            },{}).toArray((err,result)=>{
                if(err){
                    res.send({
                        err:1,
                        msg:'集合操作失败4'
                    })
                }else{
                    if(result.length === 0){
                        var hash = bcrypt.hashSync(password,10);
                        collection.insertOne({
                            nikename,username,fans,follow,time,icon,password:hash
                        },(err,result)=>{
                            if(!err){
                                delete result.ops[0].username
                                delete result.ops[0].password
                                res.send({
                                err: 0, msg: '注册成功', data: result.ops[0]
                                })
                            }else{
                                res.send({
                                    err:1,
                                    msg:'注册失败'
                                })
                            }
                        })
                    }else{
                        if(icon.indexOf('noimage') === -1){
                          fs.unlinkSync('./public'+icon)
                        }
                        res.send({ err: 1, msg: '用户名已存在' });
                    }
                }
                client.close()
            })
        }
    )

})
module.exports = router;
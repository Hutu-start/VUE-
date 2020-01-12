let router = require('express').Router();
let mgdb = require('../../utils/mgdb');
let jwt = require('../../utils/jwt');
let express = require('express');
let pathLib = require('path');
let fs =require('fs');
router.post('/', (req, res, next) => {
    // let token = req.headers.token || req.body.token || req.query.token;


    var id = req.body.id;
    if (!id) {
        res.send({ err: 1, msg: 'id为必传参数' });
        return;
    }

    mgdb.open({
        dbName:'vue_app',
        collectionName: 'user'
    }).then(
        ( {collection, client, ObjectId} ) => {
        collection.find({
            _id: ObjectId(id)
        }, {
            
            projection: { _id: 0 }//显示的key 
        }).toArray((err, result) => {
            // result[0] = 库数据
            //传过来的数据 和 库数据  合并
            let {goods} = req.body;
            
            goods = goods || result[0].goods;
            
            mgdb.open({
            dbName:'vue_app',
            collectionName: 'user'
            }).then(
            ( {collection, client, ObjectId} ) => {
                collection.updateOne({
                    _id: ObjectId(id)
                    },{$set:{"goods":goods}
                },{
                    upsert:true, //插入
                    projection:false //全局替换
                },((err, result) => {
                    if(result.result.n>0){
                        mgdb.find({
                            collectionName:'user',
                            _id:id
                        }).then(
                            // result=>res.send(result)
                        result=>{
                            res.send({
                              err:0,
                              message:"修改成功",
                              data: result
                            })
                      })

                    }else{
                        res.send({err:1,msg:'修改失败'})
                    }
                client.close();//关闭连接
                }))
            }
            )
            
            })
        }
    )
})
module.exports = router;
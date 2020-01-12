let mongodb = require('mongodb');
// 创建客户端
let mongoCt = mongodb.MongoClient;
// 获取数据的_id
let ObjectId = mongodb.ObjectId;

let mgdb = {
    open:function({
        dbName='vue_app',
        collectionName,
        url = 'mongodb://127.0.0.1:27017'
    }){
        return new Promise((resolve,reject)=>{
            mongoCt.connect(url,{useUnifiedTopology: true },(err,client)=>{
                if(err){
                    reject(err)
                }else{
                    let db = client.db(dbName);
                    let collection = db.collection(collectionName);
                    resolve({
                        collection,client,ObjectId
                    })
                }
            })
        })
    },
    find:function({
        collectionName,
        dbName = 'vue_app',
        _id = null,
        _page,_limit,q,_sort
    }){
        let rule = q ? {otype:eval('/'+q+'/')} : {};
        return new Promise((resolve,reject)=>{
            if(_id){
                mgdb.open({
                    dbName,
                    collectionName
                }).then(
                    ({collection,client,ObjectId})=>{
                        if(_id.length === 24){
                            collection.find({
                                _id:ObjectId(_id)
                            },{projection:{_id:0}}).toArray((err,result)=>{
                                if(err){
                                    reject({
                                        err:1,
                                        mess:'集合操作失败1'
                                    })
                                    client.close()
                                }
                                resolve({
                                    err:0,
                                    data:result[0]
                                })
                                client.close()
                            })
                        }else{
                            reject({
                                err:1,
                                mess:'id有误'
                            })
                        }
                    }
                )
            }else{
                mgdb.open({
                    dbName,
                    collectionName
                }).then(
                    ({collection,client})=>{
                        collection.find(rule,{
                            projection:{},
                            limit:_limit,
                            skip:_page*_limit,
                            sort:{[_sort]:1}
                        }).toArray((err,result)=>{
                            resolve({
                                err:0,
                                data:result
                            })
                            client.close()
                        })
                    }
                ).catch(
                    err=>{
                        reject({
                            err:1,
                            mess:'集合操作失败2'
                        })
                        client.close()
                    }
                )
            }
        })
    }
}
module.exports = mgdb;




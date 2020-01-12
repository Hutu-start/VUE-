import axios from 'axios'
import router from '../plugins/router.js'

function get(
    {apiname,params,type,commit,_id=null,dataName=null}
){
    let url = _id ? '/api/'+apiname + '/' + _id : '/api/' + apiname //三目
    axios(
        {url,params}
    ).then(
        res=>{
            if(res.data.err === 1){
                router.push('/login')
            }else{
                // console.log(res.data)
                commit(type,res.data.data)
            }
        }
    )
}
export{get}
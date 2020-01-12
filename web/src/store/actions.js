import axios from 'axios';

import {
  get
} from './service.js';

import * as types from './types.js';

export default {

  [types.HOME]: ({
    commit,
    state
  }, payload) => {
    // this指向 home组件 ×
    // vm 实例 import vm from 'main.js'
    get({
      apiname: 'home',
      params: {
        _limit: 10,
        _page: 1
      },
      type: types.HOME,
      commit
    })
  },

  [types.GOODS]: ({
    commit,
    state
  }, payload) => {
    let {
      q=null
    } = payload;
    // q=1?"":q
    // console.log(q)
    get({
      apiname: 'goods',
      params: {
        _limit: 10,
        _page: 1,
        q
      },
      type: types.GOODS,
      commit
    })
  },

  [types.FOLLOW]: ({
    commit,
    state
  }, payload) => {
    get({
      apiname: 'follow',
      params: {
        _limit: 8,
        _page: 1
      },
      type: types.FOLLOW,
      commit
    })
  },

  [types.COLUMN]: ({
    commit,
    state
  }, payload) => {
    get({
      apiname: 'column',
      params: {
        _limit: 6,
        _page: 1
      },
      type: types.COLUMN,
      commit
    })
  },

  [types.BANNER]: ({
    commit,
    state
  }, payload) => {
    get({
      apiname: 'banner',
      params: {
        _limit: 8,
        _page: 1
      },
      type: types.BANNER,
      commit
    })
  },

  [types.DETAIL]: ({
    commit,
    state
  }, payload) => {
    let {
      _id
    } = payload;

    get({
      apiname: 'goods',
      type: types.DETAIL,
      _id,
      commit
    })

  },

  [types.USER]: ({
    commit,
    state
  }, payload) => {
    // console.log(payload)
    let {
      username,
      password
    } = payload;
    // console.log()
    let params = new URLSearchParams();
    params.append("username", username)
    params.append("password", password)
    return axios({
      url: `/api/login`,
      method: 'post',
      data: params,
    }).then(
      res => {
        //一手交数据到mutaions
        commit(types.USER, res.data)

        return res //返回回执
      }
    )
  },
  
  // √
  addItem: ({
    commit,
    state
  }, payload) => {
  
    let usr=[];
    axios({
      url:'/api/user?token='+state.user.token,
      }
    ).then((res)=>{
      if(!res.data.data.goods){
        let obj = {}
        obj.id=payload.id;
        obj.title=payload.title;
        obj.price=payload.price;
        obj.kind=payload.kind;
        obj.imgsrc=payload.imgsrc;
        obj.check=true;
        obj.number = 1; //数量
        usr.push(obj);
      }else{
        // var goods=res.data.data.goods
        usr.push(...JSON.parse(res.data.data.goods))
        let find = false;
        usr.forEach((item, index) => {
          if (item.id == payload.id) {
            item.number++; //数量递增
            find = true;
            item.check=true
          }
        })
          if (!find) {
            let obj={};
            obj.id=payload.id;
            obj.title=payload.title;
            obj.price=payload.price;
            obj.kind=payload.kind;
            obj.imgsrc=payload.imgsrc;
            obj.check=true;
            obj.number = 1; //数量
            usr.push(obj);
          }
        ;
        // console.log(usr);
      }
      commit('ADD_ITEM',[...usr])
      let params = new URLSearchParams();
      params.append('goods',JSON.stringify(usr))
      params.append('id', state.user.data._id)
      axios({
        url:'/api/goodcar',
        data:params,
        method:'post'
        }
      ).then((res)=>{
        // console.log(res.data.data.data.goods)
        // let result = JSON.parse(res.data.data.data.goods)
        
      })
    })
  },  // √

  changeItem: ({
    commit,
    state
  }, payload) => {
    // console.log('changeItem', payload)
    state.buycar.forEach((item, index) => {
      if (item.id == payload.id) {
        if(payload.num==-1){
          if(item.number<=0){
            item.number=0
          }else{
            item.number += payload.num
          }
        }else{
          item.number += payload.num;
        }
      }
    });
    commit('CHANGE_ITEM',[...state.buycar])
    let usr = [...state.buycar]
    let params = new URLSearchParams();
    params.append('goods',JSON.stringify(usr))
    params.append('id', state.user.data._id)
    axios({
      url:'/api/goodcar',
      data:params,
      method:'post'
      }
    ).then((res)=>{
      // console.log(res.data.data.data.goods)
      // let result = JSON.parse(res.data.data.data.goods)
      
    })
    //如果是对象，需要复制一份，不然state.buycar指向的是复制后state修改之前的引用

    // window.localStorage.setItem('goodCar',JSON.stringify(state.buycar));

    // commit(types.CHANGE_ITEM,state)  ×
  },

  removeItem: ({
    commit,
    state
  }, payload) => {

    state.buycar.forEach((item, index) => {
      if (item.id == payload.id) {
        state.buycar.splice(index, 1);
      }
    });
    commit('REMOVE_ITEM',[...state.buycar]);
    let usr = [...state.buycar]
    let params = new URLSearchParams();
    params.append('goods',JSON.stringify(usr))
    params.append('id', state.user.data._id)
    axios({
      url:'/api/goodcar',
      data:params,
      method:'post'
      }
    ).then((res)=>{
      // console.log(res.data.data.data.goods)
      // let result = JSON.parse(res.data.data.data.goods)
      
    })
    
    // commit(types.REMOVE_ITEM,state.buycar);
  },

  clearBuycar: ({
    commit,
    state
  }) => {
    // state.buycar.forEach((item, index) => {
    //   if (item.check==true) {
    //     state.buycar.splice(index, 1);
    //   }
    // })
      let usr = [...state.buycar]
      console.log('前',usr)
      for(let i = 0;i<usr.length;i++){
        if (usr[i].check==true) {
          usr.splice(i, 1)
        }
      }
      console.log('后',usr)
      commit('CLEAR_BUYCAR',[...usr]);
      let params = new URLSearchParams();
      params.append('goods',JSON.stringify(usr))
      params.append('id', state.user.data._id)
      axios({
        url:'/api/goodcar',
        data:params,
        method:'post'
        }
      ).then((res)=>{
        let result = JSON.parse(res.data.data.data.goods)
        // commit('CLEAR_BUYCAR',[...usr]);
      })
      ;

  },


  // CHANGE_GOODS
  selectItem:({
    commit,state
  }, payload)=>{
    state.buycar.forEach((item, index) => {
      if (item.id == payload.id) {
        // state.buycar.splice(index, 1);
        item.check=!item.check
      }
      commit('SELECT_ITEM',[...state.buycar]);
      let usr = [...state.buycar]
      let params = new URLSearchParams();
      params.append('goods',JSON.stringify(usr))
      params.append('id', state.user.data._id)
      axios({
        url:'/api/goodcar',
        data:params,
        method:'post'
        }
      ).then((res)=>{
        let result = JSON.parse(res.data.data.data.goods)
        
      })
      });
  },


  selectAllItem:({
    commit,
    state
  },e)=>{
    let usr = [...state.buycar]
    if(e.target.checked){
      usr.forEach((item, index) => {
        if (item.check==false) {
          item.check=true;
        }
      })
    }else{
      usr.forEach((item, index) => {
        if (item.check==true) {
          item.check=false;
        }
      })
    }
    
    // console.log(usr)
    commit('SELECTALL_ITEM',[...usr]);
    let params = new URLSearchParams();
    params.append('goods',JSON.stringify(usr))
    params.append('id', state.user.data._id)
    axios({
      url:'/api/goodcar',
      data:params,
      method:'post'
      }
    ).then((res)=>{
      // let result = JSON.parse(res.data.data.data.goods)
     
    })

      // console.log(e.target.checked)
    
  },

  clearAllBuycar: ({
    commit,
    state
  }) => {
    commit('CLEAR_BUYCAR', []);
  }


}

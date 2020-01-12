import detail from './state.js'
import axios from 'axios';
import store from '../plugins/vuex.js';
let getters = {

    detail:(state)=>{
      //返回处理后的state  ~~ computed   filter
      
      return state.detail
    },
    updateGoods:(state)=>{
      let sumPrice = 0;
      let num = 0;
      state.buycar.forEach((item, index) => {
        if(item.check==true){
          num++
          sumPrice += item.price*item.number
        }
      })
      return {sumPrice,num}
    }
  }
export default getters;
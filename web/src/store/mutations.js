import {
  HOME,FOLLOW,COLUMN,BANNER,
  DETAIL,USER,VIEW_NAV,VIEW_FOOT,
  LOADING,GOODS,BUYCAR
} from './types.js';
  
export default {
  
  [HOME]:(state,payload)=>state.home=payload,
  [FOLLOW]:(state,payload)=>state.follow=payload,
  [COLUMN]:(state,payload)=>state.column=payload,
  [BANNER]:(state,payload)=>state.banner=payload,
  [DETAIL]:(state,payload)=>state.detail=payload,
  [GOODS]:(state,payload)=>state.goods=payload,
  [LOADING]:(state,payload)=>state.bLoading=payload,
  [USER]:(state,payload)=>state.user=payload,
 
  SELECT_ITEM:(state,payload)=>state.buycar=payload,
  SELECTALL_ITEM:(state,payload)=>state.buycar=payload,
  
  ADD_ITEM:(state,payload)=>{
    state.buycar=payload; 
  },
  CHANGE_ITEM:(state,payload)=>{
    state.buycar=payload; //替换的是actions传递过来的新值
  },
  REMOVE_ITEM:(state,payload)=>{
    state.buycar=payload;
  },
  CLEAR_BUYCAR:(state,payload)=>{
    state.buycar=payload;
  },
  
}
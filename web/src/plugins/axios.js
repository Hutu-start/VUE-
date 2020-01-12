// 引入axios模块
import axios from 'axios'
import Vue from 'vue'
import vm from '../main.js'
import store from './vuex.js'
import * as types from '../store/types.js'
// 添加一个请求的拦截
axios.interceptors.request.use((config) => {
  // Do 请求发出去之前,做点事
  // console.log('请求拦截');
  store.commit(types.LOADING,true)
  return config;
}, function (error) {
  // 请求错误时做点事
  return Promise.reject(error);
});

//添加一个响应拦截
axios.interceptors.response.use(function (response) {
    // console.log('响应拦截');
    store.commit(types.LOADING,false)
    return response;
  }, function (error) {
    
    return Promise.reject(error);
  });

Vue.prototype.$axios=axios;
window.axios=axios;
export default axios;




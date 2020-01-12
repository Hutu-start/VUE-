import Vue from 'vue';
// 引入app.vue
// import Vant from 'vant';
import App from './layouts/App.vue';


import './plugins/vantmintui.js';



import '@/assets/js/font.js';
// 引入路由配置
import router from './plugins/router.js';
// import vmui from './plugins/vantmintui.js';
// 引入axios
import './plugins/axios'
// 引入mint-ui的css基础样式
// import 'mint-ui/lib/style.css';
// 引入全局css基础样式
import '@/assets/css/public.css';
//引入模板变量配置
import './config/template';
//注册全局过滤器
// import filters from './filters';
// Object.keys(filters).map(key=>Vue.filter(key,filters[key]));
// Vue.use(Vant);
// import 'vant/lib/index.css';
// 禁止vue启动生产消息
Vue.config.productionTip = false;

import store from './plugins/vuex.js'
//同步localStorage 到 vuex
let local = window.localStorage.getItem('user');
if (local) {
    store.commit('USER', JSON.parse(local));
    console.log(store.state.user.data.goods);
    // let localCar = window.localStorage.getItem('goodCar');
    // if(localCar){
    //     store.commit('CHANGE_ITEM', JSON.parse(localCar));
    // }
    // window.localStorage.setItem('goodCar',JSON.stringify(store.state.user.data.goods)==''?[]:JSON.stringify(store.state.user.data.goods));
}




let vm = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

export default vm;
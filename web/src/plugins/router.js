import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// import Active from  '../pages/active.vue';
// import Buycar from  '../pages/buycar.vue';
// import Column from  '../pages/column.vue';
// import Detail from  '../pages/detail.vue';
// import Follow from  '../pages/follow.vue';
// import Home from  '../pages/home.vue';
// import Login from  '../pages/login.vue';
// import NoPage from  '../pages/no-page.vue';
// import Reg from  '../pages/reg.vue';
// import User from  '../pages/user.vue';
// import So from  '../pages/so.vue';
// import HomeContentPage from  '../components/home_content_page.vue';


let routes = [
	{path:'/buycar',component:()=>import(/* webpackChunkName: "buycar" */'../pages/buycar.vue'),name:'Buycar'},
	{path:'/searchview/:id',component:()=>import(/* webpackChunkName: "searchview" */'../pages/searchview.vue'),name:'Searchview'},
	{path:'/detail/:id',component:()=>import(/* webpackChunkName: "detail" */'../pages/detail.vue'),name:'Detail'},
	{path:'/follow',component:()=>import(/* webpackChunkName: "follow" */'../pages/follow.vue'),name:'Follow'},
	{path:'/home',component:()=>import(/* webpackChunkName: "home" */'../pages/home.vue'),
		children:[
			{path:'/home/HomeContentPage/:id',component:()=>import(/* webpackChunkName: "home_content_page" */'../components/home_content_page.vue'),name:'HomeContentPage'},
			{path:'/',redirect: '/home/HomeContentPage/1'}
		]
},
	{path:'/login',component:()=>import(/* webpackChunkName: "login" */'../pages/login.vue'),name:'Login'},
	{path:'/reg',component:()=>import(/* webpackChunkName: "reg" */'../pages/reg.vue'),name:'Reg'},
	{path:'/user',component:()=>import(/* webpackChunkName: "user" */'../pages/user.vue'),name:'User'},
	{path:'/so',component:()=>import(/* webpackChunkName: "so" */'../pages/so.vue'),name:'So'},
	{path:'/',redirect:'/home'},
	{path:'*',component:()=>import(/* webpackChunkName: "nopage" */'../pages/no-page.vue')},
];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;


<template>
    <div class="user">
        <div class="user_info">
            <p class="head" v-if="data">
                <img :src="$baseUrl + data.icon" alt=""/>
                <span>{{data.nikename}}</span>
                <span @click="logout">注销</span>
            </p>
            <div class="head_right">
                <a href="javascript:;" class="msg"><span></span></a>
                <!-- <a href="javascript:;" class="gif"><span></span></a> -->
            </div>
        </div>
        <ul class="user_shopping">
            
            <li><img src="../assets/images/sh.png" alt=""><span>待付款</span></li>
            <li><img src="../assets/images/sh.png" alt=""><span>待付款</span></li>
            <li><img src="../assets/images/sh.png" alt=""><span>待付款</span></li>
            <li><img src="../assets/images/sh.png" alt=""><span>待付款</span></li>
            <li><img src="../assets/images/sh.png" alt=""><span>待付款</span></li>
        </ul>
        <ul class="final">
            <li><img src="../assets/images/sh.png" alt=""><span>待付款</span></li>
            <li><img src="../assets/images/sh.png" alt=""><span>待付款</span></li>
            <li><img src="../assets/images/sh.png" alt=""><span>待付款</span></li>
            <li><img src="../assets/images/sh.png" alt=""><span>待付款</span></li>
            <li><img src="../assets/images/sh.png" alt=""><span>待付款</span></li>
        </ul>
    </div>
</template>

<script>
import store from '../plugins/vuex.js';
import {mapState} from 'vuex'
import * as types from '../store/types.js'
export default {
    data() {
        return {
            
        }
    },
    components:{},
    mounted() {
        
    },
    updated() {
        
    },
    methods: {
        
	},
	beforeRouteEnter(to,from,next){
		if(store.state.user.err===0){
       		next()
		}else{
			next('/login')
		}
	},
	computed:mapState(
		{data:state=>state.user.data}
	),
	methods: {
      logout() {
        //删除 state.user, localStorage
        window.localStorage.removeItem('user')
        this.$store.commit('USER',{err:1})
        this.$store.commit('CLEAR_BUYCAR',[])
        this.$router.push('/')
	  }
	}
}
</script>

<style scoped>
    .user_info{height: 250px;background: linear-gradient(to right,#ff1000 0,#ff7f00);position: relative;box-shadow: 0 0 10px #ff7f00}
    .user_info .head{overflow: hidden;position: absolute;bottom: 70px;left: 60px;}
    .user_info .head img{width: 120px;height: 120px;border-radius: 50%;}
    .user_info .head span{color: #fff;margin-left: 30px;font-size: 34px;font-weight: 600}

    .user_info .head_right{float: right;margin-top: 20px;}
    .user_info .head_right a{display: block;float: right;}
    .user_info .head_right a span{display: block;}

   
    .user_info .head_right a.msg span{background: url(../assets/images/theme.png) no-repeat;background-size: contain;width: 50px;height: 50px;margin: 20px 20px 0 0;}


    ul{display: flex;justify-content: space-between;background: #fff;}
    li{height: 100px;padding: 30px 0;}
    li img{display: block;width: 50px;margin:0 50px 10px;}
    li span{display: block;text-align: center;}
    /* .user_shopping{margin-bottom: 0.12rem;} */

</style>

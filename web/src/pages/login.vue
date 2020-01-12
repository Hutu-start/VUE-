<template>
    <div class="login">
        <div class="login_header">
            <p class="close" @click="gohome"><img src="../assets/images/block_close.png" alt=""></p>
            <div class="logo"><img src="../assets/images/912_center.png" alt=""></div>
        </div>
        <div class="login_main">
            <HTinput title="用户名/邮箱/手机号码"  v-model="username"/>
            <HTinput title="请输入密码"  v-model="password"/>
            <v-button text="登录" @click.native="login"/>
            <p class="clear"><span class="forget fl">忘记密码</span><router-link class="new_user fr" tag="span" to="/reg">新用户注册</router-link></p>
        </div>
        <div class="login_way">
            <p class="login_tishi">其他登录方式，请关注第三方的用户隐私协议</p>
            <ul class="login_footer">
				<li class="fl"><img src="../assets/images/QQ.png" alt=""></li>
				<li class="fl"><img src="../assets/images/zfb.png" alt=""></li>
				<li class="fl"><img src="../assets/images/weibo.png" alt=""></li>
				<li class="fl"><img src="../assets/images/mdhy.png" alt=""></li>
        	</ul>
        </div>
         <!-- {{mess}} -->
        <van-overlay :show="show" @click.native="show = false" z-index="100000">
            <div class="wrapper" >
                <div class="block">
                    {{mess}}
                </div>
            </div>
        </van-overlay>
    </div>
</template>

<script>
import HTinput from '../components/ht-input'
import Button from '../components/ht-btn'
import * as types from '../store/types.js'
export default {
    data() {
        return {
            mess:'',
            password:"",
            username:"",
            show: false
        }
    },
    components:{
        HTinput,
        'v-button':Button
    },
    mounted() {
        
    },
    updated() {
        
    },
    methods: {
        gohome(){
			this.$router.push('/home')
        },
        // login(){
        //     let params = new URLSearchParams();
        //     params.append('username', this.username)
        //     params.append('password', this.password)
        //     this.$axios({
        //         url: '/api/login',
        //         data: params,
        //         method: 'post',
        //         // params:{username:this.username,password:this.password}
        //         }).then(
        //     res => {
        //         if(res.data.err==0){
        //         //种token,跳转user
        //         window.localStorage.setItem('token',res.data.token);
        //         this.$router.push('/user')
        //         }else{
        //         this.mess=res.data.msg
        //         }
        //     }
        //     )
        // }
        login(){
            this.$store.dispatch(types.USER,{
                username: this.username,
                password: this.password
            }).then(
                res=>{
                    if(res.data.err == 0){
                        this.$router.push('/user');
                        window.localStorage.setItem('user',JSON.stringify(res.data));
                    }else{
                        this.mess = res.data.msg;
                        this.show = true;
                    }
                }
            )
        }
    },
}
</script>

<style scoped>
    /* html body{background: #fff;} */
    /* .login{
        height: 100%;
    } */
    .login_header .close{width: 60px;height: 60px;padding: 20px 20px;}
    .login_header .close img{display: block;width: 100%;}
    .login_header .logo img{display: block;width: 220px;    margin: 0 auto 40px;}
    .login_way{position: relative;text-align: center;left: 0;right: 0;margin-top: 30px}
    .login_footer{padding: 40px 30px ; display: flex;justify-content: space-around}
    .login_footer li img{display: block;width: 72px;height: 72px;margin: 0 50px;}
    .login_tishi{
        color: #999;
        font-size: 24px;
        line-height: 24px;}
    .login_main p span{
        font-size: 30px;
        line-height: 76px;
        color: #666;
        margin: 0 120px 280px;}
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .block {
        width: 500px;
        height: 100px;
        background-color: #fff;
        border-radius: 30px;
        font-size: 30px;
        line-height: 100px;
        text-indent: 20px;
        text-align: center
    }

</style>
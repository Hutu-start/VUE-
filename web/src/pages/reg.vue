<template>
    <div class="reg">
        <v-navbar title="用户注册" :rightDisplay="false"/>
        <div>
            <div id="icon" @click="upload">
                <img src="../assets/images/logoicon.jpg" alt="" id="imgicon">
            </div>
            <input type="file" id="file" style="display: none;">
        </div>
        <div class="reg_main">
            <!-- <span>获取验证码</span> -->
            <HTinput title="请输入用户名" v-model="username"/>
            <HTinput title="请输入昵称" v-model="nikename"/>
            <!-- <HTinput title="请输入手机号码" v-model="userphone"/>
            <HTinput title="请输入验证码" v-model="passcord"/> -->
            <HTinput title="请设置密码" v-model="password"/>

        </div>
        <v-button text="注册" @click.native="register"/>
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
import NavBar from '../components/ht__header'
export default {
    data() {
        return {
            username:'',
            // userphone:'',
            password:'',
            nikename:'',
            // passcord:'',
            mess: '',
            show: false
        }
    },
    components:{
        HTinput,
        'v-button':Button,
        'v-navbar':NavBar,
    },
    mounted() {
       this.great();
    },
    updated() {
        
    },
    methods: {
        great(){
            document.getElementById('file').onchange = function () {
                var imgFile = this.files[0];
                var fr = new FileReader();
                fr.onload = function () {
                document.getElementById('imgicon').src = fr.result;
            };
            fr.readAsDataURL(imgFile);
            }
        },
        register(){
            let formData = new FormData();
            formData.append('username',this.username)
            formData.append('nikename',this.nikename)
            formData.append('password',this.password)
            let file=document.getElementById('file');
            formData.append('icon',file.files[0]);
            this.$axios({
                url: '/api/reg',
                method: 'post',
                data: formData
                }).then(
                res => {
                    if(res.data.err==0){
                    console.log(res.data);
                    this.$router.push('/login')
                    }else{
                    this.mess=res.data.msg;
                    this.show = true;
                    }
            }
            )
        },
        upload(){
            let file=document.getElementById('file');
            file.click()
        },
    },

  }
    
</script>

<style scoped>
    .reg_main{margin: 100px 0;position: relative;}
    .reg_main span{position: absolute;top: 220px;right: 60px;border: 1px solid #FC1E56;border-radius: 10px;padding: 8px 10px;color: #FC1E56;font-size: 22px;}
    #icon{
        width: 200px;height: 200px;border: 1px solid #999;margin: 40px auto;border-radius: 50%;
        overflow: hidden;
    }
    #imgicon{
        width: 210px;height: 210px;
    }
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
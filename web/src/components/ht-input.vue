<template>
    <div class="v-input">
        <input type="text" :placeholder=title class="name" :value="value" @input="$emit('input',$event.target.value)">
        <!-- <input type="text" placeholder="请输入密码" class="pass"> -->
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props:{
        title:{
            type:String,
            default:'默认'
        },
        value:{
            type:String,
            default:''
        }
    },
    components:{},
    mounted() {},
    updated() {},
    methods: {},
}
</script>

<style>
    .v-input{margin: 0 60px;}
    .v-input input{
        outline: 0;
        width:600px;
        font-size: 28px;
        line-height: 80px;  
        border: none;
        border-bottom: 1px solid #EBECED;
        margin-top: 20px;
        text-indent: 20px
    }
</style>
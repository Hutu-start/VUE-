<template>
    <div class="login_button">
        <input type="button" :value="text">        
    </div>
</template>

<script>
export default {
    data() {return {}},
    props:{
      text:{
        type:String,
        default:'按 钮'
      }
    },
    components:{},
    mounted() {},
    updated() {},
    methods: {},
}
</script>

<style>
    .login_button{margin: 60px 60px 0;}
    .login_button input{border: none;
      background: linear-gradient(to left,#ff7000 0,#ff7f00); 
      color: #fff;
      width: 630px;
      font-size: 30px;
      line-height: 80px;
      border-radius: 30px;
      opacity: .5;
    }
   

</style>
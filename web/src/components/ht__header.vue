<template>
	<div id="ht__header" :style="{
        'background':bgcolor
        }">
        
		<div class="ht__header__nav" :style="{
            'background':bgcolor
        }">
            <div class="ht__header-left"
                @click='onClickLeft'
            ></div>
            <div class="ht__header-center">{{title}}</div>
            <div class="ht__header-right"
                
                @clickRight="onClickRight"
            >
                <i
                    v-if="rightDisplay"
                ></i>
            </div>
        </div>
        <div class="ht__header__empty" :style="{
        }"></div>
    </div>
	
</template>

<script>

	export default {
		name:'ht__header',
		data(){
			return {
            }
        },
        props:{
            title:{
                type:String,
                default:'标题'
            },
            bgcolor:{
                type:String,
                default:'#fff'
            },
            rightDisplay:{
                type:Boolean,
                default:true
            }
        }
        ,
         methods: {
            onClickLeft() {
                this.$router.go(-1);
                // window.history.back(-1)
            },
            onClickRight(){

            }
        }
	}
	
	
	
</script>


<style lang="scss">
	#ht__header{
        background: #fff;
        height: 88px;
        width: 100%;
        .ht__header__nav{
            padding: 0 30px;
            box-sizing: border-box;
            height: 88px;
            position: fixed;
            width: 100%;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #eaeaea;
            z-index: 100;
            .ht__header-left{
                width: 88px;
                height: 88px;
                background: url(../assets/images/backicon.png) no-repeat center center;
                background-size: 70% 70%;
                }
            }
            .ht__header-center{
                width: 600px;
                font-size: 34px;
                line-height: 88px;
                overflow: hidden;
            }
            .ht__header-right{
                // margin-top: 10px;
                width: 88px;
                height: 88px;
                i{
                    display: block;
                    width: 88px;
                    height: 88px;
                    background: url(../assets/images/more.png) no-repeat center center;
                    background-size: 70% 70%;
                }
            }
        .ht__header__empty{
            height: 88px;
        }
    }
    
	
</style>

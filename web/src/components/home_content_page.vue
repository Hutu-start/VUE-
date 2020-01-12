<template>
	<div class="home__content__goods">
        <ul>
            <router-link 
                tag="li" 
                v-for="item of goods" 
                :key="item._id" 
                :to="{path:'/detail/'+item._id}" 
            > 
                <a href="javascript:;">
                    <img :src="$baseUrl + item.imgsrc" alt="">
                    <p>{{item.title}}</p>
                    <span>{{item.introduce}}</span>
                    <i>￥{{item.price}}</i>
                    <em>{{item.sale}}折</em>
                </a>
            </router-link>
        </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import * as types from '../store/types.js'
	export default {
		data(){
			return {
                // q:''
			}
        },
        props:{
            // mytype:{
            //     type:String,
            //     default:''
            //     }
            },
        mounted(){
            // this.$store.dispatch(types.GOODS,{q:this.mytype})
            
        },
        computed:mapState([
            'goods'
        ]),
        destroyed(){
            // console.log('destroyed');
            
        },
        methods:{
        }
    }
	
	
	
	
</script>


<style lang="scss">
.home__content__goods{
    width: 100%;
    ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li{
            width: 345px;
            height: 600px;
            box-shadow: 0 0 3px #eee;
            a{
                display: block;
                background: #fff;
                img{
                    width: 345px;
                    height: 355px;

                }
                p{
                    font-size: 30px;
                    line-height: 40px;
                    height: 80px;
                    color: #000;
                    margin: 0 10px;
                    overflow: hidden;
                }
                span{
                    font-size: 24px;
                    line-height: 30px;
                    margin: 0 10px;
                    height: 60px;
                    color: #666;
                    display: block;
                    overflow: hidden;
                }
                i{
                    font-size: 34px;
                    line-height: 50px;
                    color: #000;
                }
                em{
                    font-size: 30px;
                    line-height: 50px;
                    color: #c79d6b;
                    margin-left: 40px;
                }
            }
        }
    }
}
	
</style>

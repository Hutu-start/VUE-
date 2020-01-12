<template>
    <div class="goodsdetail">
        <!-- 导航栏 -->
        <v-navbar :title="detail.title" />
        <!-- 图片 -->
        <van-swipe @change="onChange" v-if="detail.detile">
            <van-swipe-item 
                v-for="(item,index) of detail.detile.imgbanner" 
                :key="index"
                
            >
            <img :src="$baseUrl+item" alt=""></van-swipe-item>

            <div class="custom-indicator" slot="indicator">
                {{ current + 1 }}/4
            </div>
        </van-swipe>
        <!-- 标题 -->
        <div class="detail_main"  v-if="detail.detile">
            <!-- 标题 -->
            <div class="detail_main_pd pdb clear">
                <div class="l">
                    <h3 class="detail_title">{{detail.title}} ({{detail.kind}})  {{detail.buykind}}</h3>
                    <p class="detail_ontro">{{detail.introduce}}</p>
                    <p class="detail_price">￥<span>{{detail.price}}</span> <span class="sale">{{detail.sale}}折</span></p>
                </div>
                <div class="r detail_share">
                    <img src="../assets/images/share.png" alt="">
                    <p class="share_text">分享</p>
                </div>
            </div>
            <div class="bgc"></div>

            <!-- 服务 -->
            <van-cell is-link @click="showPopup1"><span>服务</span><span>免费快递.7天无理由.运费险</span></van-cell>
            <van-popup
                v-model="show1"
                closeable
                position="bottom"
                :style="{ height: '40%' }"
            >
            <div class="service">
                <p>免费快递</p>
                <p>7天无理由</p>
                <p>运费险</p>

            </div>
            </van-popup>
            <div class="bgc"></div>

            <!-- 规格 -->
            <van-cell is-link @click="showPopup2"><span>规格</span><span>请选择颜色分类</span></van-cell>
            <van-popup
                v-model="show2"
                closeable
                position="bottom"
                :style="{ height: '40%' }"
            >
                内12211213容
            </van-popup>
            <van-cell is-link @click="showPopup3"><span>参数</span><span>出版周期:{{detail.detile.period}} 周期:{{detail.detile.periods}}</span></van-cell>
            <van-popup
                v-model="show3"
                closeable
                position="bottom"
                :style="{ height: '60%' }"
            >
                <div class="parameter">
                    <em>商品参数</em>
                    <p><i>杂志社</i><span>{{detail.detile.office}}</span></p>
                    <p><i>出版单位</i><span>{{detail.detile.company}}</span></p>
                    <p><i>单册定价</i><span>{{detail.detile.unitPrice}}</span></p>
                    <p><i>出版周期</i><span>{{detail.detile.period}}</span></p>
                    <p><i>期数</i><span>{{detail.detile.periods}}</span></p>
                    <p><i>刊号</i><span>{{detail.detile.periodical}}</span></p>
                    <p><i>所属分类</i><span>{{detail.classify}}</span></p>
                    <p><i>杂志标签</i><span>{{detail.otype}}</span></p>
                    <p><i>适读人群</i><span>{{detail.detile.people}}</span></p>
                    <p><i>订阅须知</i><span>{{detail.detile.notice}}</span></p>
                </div>
            </van-popup>
            <div class="bgc"></div>

            <!-- 评价 -->
            <van-cell is-link>
                <span class="detail_pj">宝贝评价(129)</span>
                <p class="nicheng"><img src="../assets/images/20191224171652.jpg" alt="">昵称呀</p>
                <p class="pj_content">非常满意</p>
            </van-cell>
            <div class="bgc"></div>
        </div>
        <div class="detail_img"  v-if="detail.detile">
            <!-- 图片懒加载 -->
            <!-- <img v-for="img in imageList" v-lazy="img"> -->
            <img v-for="(item,index) of detail.detile.imgbanner" :src="$baseUrl+item" alt="" :key="index">
        </div>
        <div class="app_footer"></div>
        <!-- 商品详情导航 -->
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" />
            <van-goods-action-icon icon="shop-o" text="店铺" />
            <van-goods-action-button color="linear-gradient(to right,#FAC905 0,#FF9500 100%)" type="warning" text="加入购物车" @click="addItem"/>
            <van-goods-action-button color="linear-gradient(to right,#FA1E8C 0,#FC1E56 100%)" type="danger" text="立即购买" />
        </van-goods-action>
    
    </div>
</template>

<script>
import NavBar from '../components/ht__header'
import {mapState, mapGetters} from 'vuex'
import * as types from '../store/types.js'
let top=0;//存储滚动位置
export default {
    data() {
        return {
            current: 0,
            show1:false,
            show2:false,
            show3:false,
        }
    },
    components:{
        'v-navbar':NavBar
    },
    created() {
        this.$store.dispatch(types.DETAIL,{_id:this.$route.params.id})
       
        document.documentElement.scrollTop=top;
    },
    computed:{...mapGetters([
        'detail'
    ])},
    
    updated() {
        
        },
    mounted(){

    },
    methods: {
        onChange(index) {
            this.current = index;
        },
        showPopup1() {
            this.show1 = true;
        },
        showPopup2() {
            this.show2 = true;
        },
        showPopup3() {
            this.show3 = true;
        },
        addItem(){
            this.$store.dispatch('addItem',{
                id:this.$route.params.id,
                title:this.detail.title,
                price:this.detail.price,
                kind:this.detail.kind,
                imgsrc:this.detail.imgsrc
            })
        }
    },
}
</script>

<style lang="scss">
    
    .goodsdetail .navbar{border-bottom: 1px solid #ddd;}
    .goodsdetail .van-swipe{height: 660px;position: relative;}
    .goodsdetail .van-swipe-item img{display: block; height: 600px; margin: 20px auto;}
    .goodsdetail .custom-indicator{position: absolute;right: 80px;bottom:40px; padding: 6px 20px;background: rgba(0, 0, 0,.6);border-radius:20px;color: #fff;}

    /* 详细信息 */
    .goodsdetail .bgc{background-color: #f6f6f6;height: 20px;}
    .goodsdetail .pdb{padding-bottom: 30px;}
    .goodsdetail .detail_ontro{
        font-size: 24px;
        line-height: 28px;
        width: 500px;
        overflow: hidden;
        color: #666;
    }
    .goodsdetail .sale{
        font-size: 24px;
        line-height: 28px;
        font-weight: 600;
        margin-left: 80px;
        color: #F54421;
        border: 1px solid #F54421;
        padding:0  20px;
        border-radius: 24px;
        
    }
    .detail_main_pd{
        padding: 0 20px;
    }
    .detail_main{
        .service{
            margin-top: 30px;
            p{
                font-size: 30px;
                line-height: 60px;
                padding: 50px 0;
                text-align: center;
                color: #000;
                border-bottom: 2px solid #000;
                
            }
        } 
        .parameter{
            padding: 30px 40px;
            em{
                text-align: center;
                display: block;
                font-size: 40px;
                line-height: 40px;
                margin-bottom: 30px;
            } 
            p{
                padding: 10px;
                overflow: hidden;
                i{
                    font-size: 30px;
                    line-height: 40px;
                    float: left;
                }
                span{
                    float: right;
                    width: 400px;
                    font-size: 30px;
                    line-height: 40px;
                }
            }
        }   

    .van-icon{
            font-size:40px;
            line-height: 40px;
            font-family: 'vant-icon';
        }
    }
    .goodsdetail .detail_main{}
    .goodsdetail .detail_main .detail_title{width: 500px;height: 80px;font-size: 32px;line-height: 40px;font-weight: 600;word-break: break-all;overflow: hidden;margin-bottom: 20px}
    .goodsdetail .detail_price{color: #C99D6B;font-size: 44px;line-height: 60px;font-weight: 600;}
    .goodsdetail .detail_main .detail_share{padding-left: 14px;border-left: 1px solid #ddd;text-align: center;}
    .goodsdetail .detail_main .detail_share img{display: block;width: 36px;height: 36px;padding: 40px 20px;}
    .goodsdetail .van-cell{
        height: 80px;
        .van-icon{
            height: 60px;
            width: 30px;
            font-size: 30px;
            line-height: 60px;
            font-family: "vant-icon"
        }
    }
    .goodsdetail .van-cell__value span:first-child{color: #999;font-size:28px;line-height: 60px; }
    .goodsdetail .van-cell__value span.detail_pj{color: #333 ;font-size: 28px;}
    .goodsdetail .van-cell__value span:nth-child(2){color: #333;font-size: 28px;padding-left: 30px;}
    .goodsdetail .nicheng{font-size: 26px;color: #666}
    .goodsdetail .nicheng img{display: inline-block; width: 56px;height: 56px;border-radius: 50%;margin-right: 20px;margin-top: 30px;}
    .goodsdetail .pj_content{margin: 12px 0 20px 0;}
    .goodsdetail .detail_img img{display: block;width: 600px;margin: 0 auto;}

    /* 商品详情导航 */
    .goodsdetail .van-goods-action{border-top: 1px solid #ddd};
    .app_footer{height: 88px}
    .van-goods-action{
        height: 88px;
        .van-goods-action-icon{
            height: 88px;
            font-size: 24px;
            line-height: 30px;
            .van-goods-action-icon__icon{
                width: 80px;
                font-size: 40px;
                line-height: 50px;
                font-family: 'vant-icon';

            }
        }
        .van-button{
            height: 70px;
            border-radius: 20px;
            .van-button__text{
                font-size: 28px;
                line-height: 70px;

            }
        }
    }
</style>
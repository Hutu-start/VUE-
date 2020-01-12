<template>
    <div class="goodlist_goods">
        
        <ul>
            <router-link class="clear" 
            tag="li"
            :to="`/detail/${item._id}`"
            v-for="item of goodlist"
            :key="item._id"
            :goodsid="item._id"
            >
                <div class="gd_img"><img :src="$baseUrl+item.imgsrc"></div>
                <div class="gd_info">
                    <h3 class="text_over">{{item.title}} ({{item.kind}}) {{item.buykind}}</h3>
                    <div class="info_detail">
                        <p class="l">
                            <span class="over">类型</span>
                            <span class="over">{{item.classify}}</span>
                        </p>
                        <p class="l">
                            <span class="over">期刊数</span>
                            <span class="over">{{item.detile.period}}</span>
                        </p>
                        <p class="l">
                            <span class="over">刊号</span>
                            <span class="over">{{item.detile.periodical}}</span>
                        </p>
                    </div>
                    <p class="price">￥{{item.price}}</p>
                    <!-- <p class="comment">{{item.comment}}</p> -->
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
      return {}
    },
    props:{
      goodlist:{
        type:Array
      }
    },
    components:{},
    mounted() {},
    updated() {},
    methods: {},
}
</script>

<style>
    .goodlist_goods{background: #fff;}
    .goodlist_goods li{display: flex;margin: 0 20px}
    .goodlist_goods li .gd_img{width: 250px;height: 250px;margin: 10px 22px 0 0;text-align: center;overflow: hidden;}
    .goodlist_goods li .gd_img img{width: 80%;}
    .goodlist_goods li .gd_info{flex: 1;padding-right: 10px;border-bottom: 1px solid #EBECED}
    .goodlist_goods li .gd_info h3{font-weight: normal;font-size: 28px;line-height: 36px;height: 72px;margin: 20px 0;overflow: hidden;}
    .goodlist_goods li .gd_info .price{color: #F20C59;font-size: 36px;line-height: 38px;margin: 12px 0;}
    .goodlist_goods li .gd_info .comment{color: #7A7F85;font-size: 22px;line-height: 22px;margin-bottom: 12px;}
    .goodlist_goods li .gd_info .info_detail{display: flex;justify-content: space-between;}
    .goodlist_goods li .gd_info .info_detail p span{display: block; width: 140px;overflow: hidden;text-align: center;font-size: 26px;line-height: 26px}
    .goodlist_goods li .gd_info .info_detail p span:nth-child(2){color: #919599;font-size: 26px;line-height: 26px}
    
</style>
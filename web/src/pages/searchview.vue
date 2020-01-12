<template>
    <div class="goodlist">
        <div class="search_header">
            <div class="back l" 
            @click="goback"
            to="/so"
            ><p></p></div>
            <div class="search_header_search l">
                <input 
                type="text" 
                ref="auto" 
                v-model="val"
                >
                <a 
                  href="javascript:;"
                  @click="listSearch"
                >
                  <img src="../assets/images/search-3.png" alt="">
                </a>
            </div>
        </div>
        <nav>
            <ul>
                <li class="text-active">综合</li>
                <li>价格</li>
                <li>销量</li>
                <li>筛选</li>
            </ul>
        </nav>
        <GoodlistGoods :goodlist="goodlist"/>
    </div>
</template>

<script>
import GoodlistGoods from '../components/ht-cell.vue'

export default {
    data() {
        return {
          goodlist:[],
          val:''
        }
    },
    components:{
        GoodlistGoods
    },
    created() {
      
    },
    mounted() {
      //自动获取焦点
      this.$refs.auto.focus();
      //如果搜索不为空，则input的值是搜索的值
      if(this.$route.params.id != "null"){
        this.val = this.$route.params.id
      }
      
      // 搜索跳转到列表页渲染
      this.$axios({
        url:'/api/goods',
        params:{_page:1,_limit:25,q:this.val},
      }).then(   
        res => {
			this.goodlist = res.data.data;
			console.log(this.goodlist);
			
        }    
      );     
    },
    methods: {
      goback(){
        this.$router.push('/so')
      },
      listSearch(){
        this.$router.push('/searchview/'+this.val);

        this.$axios({
          url:'/api/goods',
          params:{_page:1,_limit:25,q:this.val},
        }).then(   
          // res=>this.goodlist=res.data.data
          // res=>console.log(res.data.data.length) 
          res => {
           this.goodlist = res.data.data
          }    
        ); 
        
      }
    }
}
</script>

<style scoped>
    .goodlist{background: #f6f6f6}
    .search_header{overflow: hidden;background: #fff;height: 88px;}
    .search_header .back{float: left;width: 70px;height: 88px;}
    .search_header .back p{width: 44px;height: 44px; background: url(../assets/images/backicon.png) no-repeat;background-size: contain;margin: 20px 12px;}

    nav{border-bottom: 1px solid #ddd;}
    .goodlist .search_header_search a img{margin: 0;}
    .search_header_search{height: 60px;background: #f6f6f6;width: 600px;border-radius: 20px;margin: 14px 0;}
    .search_header_search img{width: 30px;height: 30px;}
    .search_header_search input{border:none;background: none;height: 60px;line-height: 60px;display: inline-block;outline: 0;font-size: 24px;color: #333;margin-left: 24px;width: 500px}
    .goodlist nav ul{display: flex;justify-content: space-between;background: #fff}
    .goodlist nav ul li{text-align: center;line-height: 80px;text-align:center;vertical-align:center;flex: 1;font-size: 26px;}
    .text-active{color: #F20C59}

    /* 搜索的大类别 */
    .search_list{padding: 18px 0 20px ;display: flex;justify-content: space-between;overflow: hidden;height: 180px;}
    .search_list li{flex: 1;margin: 0 14px;}
    .search_list li p{width: 140px; text-align: center;margin-top: 12px;}
    .search_list li span{display: block; width: 120px;height: 128px;padding: 6px;border-radius: 50%;background: #fff;}
    .search_list li span img{width: 86px;}


</style>
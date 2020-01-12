<template>
	<div id="search">
        <div class="search__top">
            <div class="search__top-content">
                <router-link class="search__top-bck" tag="span" to="/home"><img src="../assets/images/backicon.png" alt=""></router-link>
                <input class="search__top-txt" type="text" placeholder="环球少年地理" v-model="valinfo">
                <input class="search__top-btn" type="button" value="搜索" @click="onSearch">
            </div>
            <div class="search__top-empty"></div>
        </div>
        <div class="search__hot">
            <h4>热门搜索</h4>
            <ul>
                <li><a href="">环球少年地理</a></li>
                <li><a href="">万物</a></li>
                <li><a href="">孤独星球</a></li>
                <li><a href="">好奇号</a></li>
                <li><a href="">小猪佩奇</a></li>
                <li><a href="">环球科学</a></li>
                <li><a href="">哈佛商业评论</a></li>
                <li><a href="">创意科学</a></li>
                <li><a href="">幼儿画报</a></li>
                <li><a href="">科幻世界</a></li>
                <li><a href="">意林杂志</a></li>
                <li><a href="">宝贝盒子</a></li>
                <li><a href="">儿童文学</a></li>
                <li><a href="">天文爱好者</a></li>
            </ul>
        </div>
	</div>
	
	
</template>

<script>
	export default {
		
		data(){
			return {
                value:'',
                valinfo:""
            }
        },
        methods:{
            onSearch(){
                 this.$router.push('/searchview/'+this.valinfo)
                
            }
        }
	}
	
	
	
</script>


<style lang="scss">
	#search{
        width: 710px;
        padding: 0 20px;
        overflow: hidden;
        .search__top{
            height: 88px;
            .search__top-content{
                position: fixed;
                height: 88px;
                padding: 20px 10px 0;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                .search__top-bck{
                    width: 40px;
                    height: 40px;
                    padding: 10px 0;
                    img{
                        width: 40px;
                        height:40px;

                    }
                }
                .search__top-txt{
                    width: 450px;
                    height: 60px;
                    background: #F5F5F5;
                    border: 0;
                    border-radius: 30px;
                    padding:0 40px;
                    outline: none;
                    font-size: 26px;
                    line-height: 60px;
                }
                .search__top-btn{
                    width: 60px;
                    background: none;
                    border: 0;
                    outline: none;
                    font-size: 30px;
                    line-height: 60px;
                    margin: -15px 0 0 50px;
                }
            }
            .search__top-empty{
                height: 88px;
            }
        }
        .search__hot{
            // margin-top: 20px;
            padding: 20px;
            h4{
                font-size: 30px;
                line-height: 60px;
                font-weight: 600;
                margin-left: 20px;
            }
            ul{
                margin: 0 20px;
                li{
                    float: left;
                    margin: 10px 30px 10px 0;
                    a{
                        font-size: 24px;
                        line-height: 40px;
                        display: block;
                        background: #eee;
                        padding: 0 18px;
                        border-radius: 18px;
                    }
                }
            }
        }
    }
	
</style>

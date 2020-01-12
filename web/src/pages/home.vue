<template>
	<div id="home">
		<newActive/>	
		<div class="home__content">
			<div class="home__content__qkNew">
				<div class="content">
					<span><img src="../assets/images/kb_icon.png" alt=""></span>
					<van-swipe class="content__swipe" 
					vertical 
					:show-indicators="false" :touchable="false" 
					:autoplay="3000">
						<van-swipe-item v-for="(item,index) of list" :key=index>热门电影--{{item.title}}</van-swipe-item>
					</van-swipe>
					<a href="">更多</a>
				</div>
			</div>
			<swiper class="home__content__freeSwiper" :options="swiperOption">
				<swiper-slide><a href=""><img src="../assets/images/201912119260.png-imageMogr2-thumbnail-500x.png" alt=""></a></swiper-slide>
				<swiper-slide><a href=""><img src="../assets/images/20191229233824.jpg-imageMogr2-thumbnail-500x.jpg" alt=""></a></swiper-slide>
				<swiper-slide><a href=""><img src="../assets/images/2019121192528.png-imageMogr2-thumbnail-500x.png" alt=""></a></swiper-slide>
				<swiper-slide><a href=""><img src="../assets/images/201942594448.jpg-imageMogr2-thumbnail-500x.jpg" alt=""></a></swiper-slide>
				<swiper-slide><a href=""><img src="../assets/images/2019420101550.jpg-imageMogr2-thumbnail-500x.jpg" alt=""></a></swiper-slide>
			</swiper>
			<div class="home__content__sale-top">
				<div class="top__left">
					<p class="top__left-top">
						<span class="left_ms">杂志秒杀</span>
						<span class="left_xsqg">限时限量抢购</span>
					</p>
					<div class="top__left-bottom">
						<ul>
							<li>
								<a href="">
									<img src="../assets/images/20191219181056.jpg-imageMogr2-thumbnail-350x.jpg" alt="">
									<span>哈哈哈滚滚滚</span>
									<i>￥111</i>
									<em>￥1122</em>
								</a>
							</li>
							<li>
								<a href="">
									<img src="../assets/images/20191219181056.jpg-imageMogr2-thumbnail-350x.jpg" alt="">
									<span>哈哈哈滚滚滚</span>
									<i>￥111</i>
									<em>￥1122</em>
								</a>
							</li>
							<li>
								<a href="">
									<img src="../assets/images/20191219181056.jpg-imageMogr2-thumbnail-350x.jpg" alt="">
									<span>哈哈哈滚滚滚</span>
									<i>￥111</i>
									<em>￥1122</em>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="top__right">
					<span>发现好杂志</span>
					<a href="">
						<img src="../assets/images/2019117101942.jpg-imageMogr2-thumbnail-350x.jpg" alt="">
						<p>查看更多<i></i></p>
					</a>
				</div>
			</div>
			<div class="home__content__case">
				<keep-alive>
					<div class="home__goods">
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
				</keep-alive>
			</div>
		</div>
	</div>
	
	
</template>

<script>
import {mapState} from 'vuex';
import newActive from '../components/new_active';
import * as types from '../store/types.js'
import Vue from 'vue';
import { Sticky , Swipe, SwipeItem  } from 'vant';
Vue.use(Swipe).use(SwipeItem).use(Sticky);
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

var mytop =0;//存储滚动位置
// let q=0;
	export default {
		name:'home',
		data(){
			return {
				swiperOption:{
				　  pagination: '.swiper-pagination',
					slidesPerView: 3,
					freeMode: true,
					freeModeMomentumVelocityRatio : 1,
					freeModeMomentumRatio : 5,
					freeModeMomentum : true,
				},
				mytype:"",
				list:"",
				bookgoods:[],
				// q:""
			}
		},
		components:{
			newActive, swiper,
    		swiperSlide
		},
		methods:{
		},
		created(){
			this.$axios(
				{
					url:'/douban/v2/movie/in_theaters',
					params:{start:0,count:10}
				}
			).then((res)=>{
				this.list = res.data.subjects
			}),

			
			
			this.$axios(
				{url:'/api/goods',
				params:{_page:1,_limit:30}
				}
			).then((res)=>{
				this.bookgoods = res.data.data;
				this.$store.commit(types.GOODS,{...this.bookgoods})
				this.$store.commit(types.FOLLOW,{...this.bookgoods})
				
				// console.log(this.bookgoods);
			})
			
		},
		computed:{...mapState([
			'goods',
		])
		},
		updated(){
			// this.$store.dispatch(types.GOODS,{q:this.$route.params.id})
			// console.log('destroyed',mytop,document.documentElement.scrollTop);
		},
		//无效
		destroyed(){
			// console.log('destroyed',mytop);  
			mytop = document.documentElement.scrollTop
		},
		mounted(){
			// console.log('mounted',mytop);
			document.documentElement.scrollTop=mytop;	

		}
	}
	
	
	
</script>


<style lang="scss">
	#home{
		margin: 0  auto;
		width: 100%;
		background: #f2f2f2;
		position: relative;
		.home__content{
			// height: 2000px;
			width: 710px;
			margin: 0 auto;
			overflow: hidden;
			.home__content__qkNew{
				margin-top: 17px;
				border-radius: 35px;
				background: #fff;
				.content{
					height: 69px;
					span{
						margin: 16px 0 0 25px;
						width: 73px;
						float: left;
						img{
							width: 73px;
							float: left;
						}
					}
					.content__swipe{
						float: left;
						margin-left: 32px;
						width: 463px;
						font-size: 28px;
						line-height: 69px;
						color: #333333;
						height: 70px;
					}
					a{
						font-size: 24px;
						line-height: 38px;
						margin: 17px 0;
						float: left;
						color: #ff7f00;
						padding-left: 20px;
						border-left: 2px solid #f2f2f2;
					}
					.van-swipe-item{
						overflow: hidden;
					}
				}
			}
			.home__content__freeSwiper{
				overflow: hidden;
				position: relative;
				left: 0;
				width: 310%;
				.swiper-wrapper{
				width: 100%;
					margin: 29px 0;
					.swiper-slide{
						width: 422px !important;
						margin-right: 22px !important;
						a{
							img{
								width: 400px;
								height: 150px;
							}
						}

					}
					
				}
			}
			.home__content__sale-top{
				width: 100%;
				overflow: hidden;
				.top__left{
					float: left;
					width:460px;
					height: 340px;
					background: #fff;
					padding:31px  14px 0;
					box-sizing: border-box;
					.top__left-top{
						background: url(../assets/images/sd_icon.png) no-repeat ;
						height: 28px;
						background-size: 20px 100%;
						.left_ms{
							float: left;
							margin-left: 40px;
							font-size: 28px;
							line-height: 28px;
							color: #222;
						}
						.left_xsqg{
							float: left;
							margin-left: 10px;
							font-size: 24px;
							line-height: 28px;
							color: #222;
						}
					}
					.top__left-bottom{
						overflow: hidden;
						ul{
							height: 340px;
							margin-top:20px; 
							li{
								float: left;
								width: 140px;
								text-align: center;
								a{
									img{
										width: 120px;
										height: 130px;
										margin-bottom: 15px;
									}
									span{
										font-size: 28px;
										line-height: 28px;
										color: #222;
										width: 130px;
										display: block;
										white-space:nowrap;
										overflow:hidden;
										text-overflow:ellipsis;
										margin-bottom: 20px;
									}
									i{
										font-size: 26px;
										line-height: 28px;
										color: #c2945d;
										display: block;
										margin-bottom: 6px;
									}
									em{
										font-size: 18px;
										line-height: 22px;
										color: #cacaca;
										
									}

								}

							}
						}
					}
				}
				.top__right{
					box-sizing: border-box;
					float: right;
					width: 236px;
					background: #fff;
					height: 340px;
					text-align: center;
					span{
						margin-top: 30px;
						font-size: 26px;
						line-height: 26px;
						color: #222;
						display: block;
						}
					a{
						display: block;
						
						img{
							margin-top: 10px;
							width: 180px;
							height: 180px;
						}
						p{
							margin-top: 30px;
							width: 170px;
							height: 32px;
							border-radius: 16px;
							border: 1px  solid #aaa;
							margin-left:37px;
							font-size: 22px;
							line-height: 32px;
							i{
								background: url(../assets/images/xy.png) no-repeat 0 0;
								width: 22px;
								height: 22px;
								background-size: 100% 100%;
								display: inline-block;
								margin-left: 8px;
								margin-top: 2px;
							}
						}
					}
				}
			}
			.home__content__case{
				margin-top: 20px;
					.van-sticky{
						height: 110px ;
						width: 100%;
						background: #f2f2f2;
					ul{
						display: flex;
						justify-content: space-between;
						color: #ff7f00;
						margin: 15px 10px 0;
						li{
							text-align: center;
							
							a{
								padding-right: 15px;
								display: block;
								border-right: 1px solid #e6e6e6;
								p{
									font-size: 34px;
									line-height: 40px;
									font-weight: 600;
								}
								span{
									font-size: 24px;
									line-height: 24px;
								}
							}
						}
						
					}
					.active{
						a{
							color: #ff7f00;

						}
					}
				}
				
				.home__goods{
					width: 100%;
					ul{
						display: flex;
						justify-content: space-between;
						flex-wrap: wrap;
						li{
							width: 345px;
							height: 580px;
							box-shadow: 0 0 3px #eee;
							a{
								display: block;
								background: #fff;
								text-align: center;
								img{
									width: 330px;
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
			}
			
		}
	}
</style>

<template>
		<div class="home__active">
			<div class="home__act-top">
				<a href="">
					<img src="../assets/images/rukou.jpg-imageMogr2-thumbnail-750x.jpg" alt="">
				</a>
			</div>
			<div class="home__act__banner-fir">
				<mt-swipe :auto="3000" class="banner-box">
					<mt-swipe-item v-for="(item,index) of banner" :key="index" >
						<img :src="$baseUrl+item.imgsrc" alt="">
					</mt-swipe-item>
					
				</mt-swipe>
			</div>
			<div class="home__active__column">
				<mt-swipe :auto="0" class="column-box">
					<mt-swipe-item>
						<ul>
							<li>
								<a href="">
									<img src="../assets/images/icon2.png" alt="">
									<span>分类搜索</span>
								</a>
							</li>
							<li>
								<a href="">
									<img src="../assets/images/icon3.png" alt="">
									<span>杂志排行榜</span>
								</a>
							</li>
							<li>
								<a href="">
									<img src="../assets/images/icon4.png" alt="">
									<span>VIP专区</span>
								</a>
							</li>
							<li>
								<a href="">
									<img src="../assets/images/icon5.png" alt="">
									<span>5折抢购</span>
								</a>
							</li>
							<li>
								<a href="">
									<img src="../assets/images/icon6.png" alt="">
									<span>订阅有礼</span>
								</a>
							</li>
							<li>
								<a href="">
									<img src="../assets/images/icon7.png" alt="">
									<span>包邮专场</span>
								</a>
							</li>
							<li>
								<a href="">
									<img src="../assets/images/icon8.png" alt="">
									<span>新刊推荐</span>
								</a>
							</li>
							<li>
								<a href="">
									<img src="../assets/images/icon9.png" alt="">
									<span>满减专区</span>
								</a>
							</li>
							<li>
								<a href="">
									<img src="../assets/images/icon10.png" alt="">
									<span>阅读打卡</span>
								</a>
							</li>
							<li>
								<a href="">
									<img src="../assets/images/icon11.png" alt="">
									<span>个人中心</span>
								</a>
							</li>
						</ul>
					</mt-swipe-item>
					<mt-swipe-item>
						<ul>
							<li>
								<a href="">
									<img src="../assets/images/icon2.png" alt="">
									<span>视频推荐</span>
								</a>
							</li>
							<li>
								<a href="">
									<img src="../assets/images/icon3.png" alt="">
									<span>组合优惠</span>
								</a>
							</li>
							<li>
								<a href="">
									<img src="../assets/images/icon4.png" alt="">
									<span>免费领杂志</span>
								</a>
							</li>
							<li>
								<a href="">
									<img src="../assets/images/icon5.png" alt="">
									<span>领取优惠券</span>
								</a>
							</li>
							<li>
								<a href="">
									<img src="../assets/images/icon6.png" alt="">
									<span>文创商城</span>
								</a>
							</li>
							<li>
								<a href="">
									<img src="../assets/images/icon7.png" alt="">
									<span>英文期刊</span>
								</a>
							</li>
							<li>
								<a href="">
									<img src="../assets/images/icon8.png" alt="">
									<span>书单推荐</span>
								</a>
							</li>
							<li>
								<a href="">
									<img src="../assets/images/icon9.png" alt="">
									<span>订阅帮助</span>
								</a>
							</li>
							<li>
								<a href="">
									<img src="../assets/images/icon10.png" alt="">
									<span>我的订单</span>
								</a>
							</li>
							<li>
								<a href="">
									<img src="../assets/images/icon11.png" alt="">
									<span>订阅管理器</span>
								</a>
							</li>
						</ul>
					</mt-swipe-item>
				</mt-swipe>
			</div>
			<div class="home__discount">
				<div class="home__discount-top">
					<a href="">
						<img src="../assets/images/hdjintie.png" alt="">
					</a>
				</div>
				<div class="home__discount-center">
					<ul>
						<li>
							<a href=""><img src="../assets/images/image4.png" alt=""></a>
						</li>
						<li>
							<a href=""><img src="../assets/images/image5.png" alt=""></a>
						</li>
						<li>
							<a href=""><img src="../assets/images/image6.png" alt=""></a>
						</li>
						<li>
							<a href=""><img src="../assets/images/image7.png" alt=""></a>
						</li>
					</ul>
				</div>
				<div class="home__discount-bottom">
					<ul>
						<li>
							<a href=""><img src="../assets/images/image8.png" alt=""></a>
						</li>
						<li>
							<a href=""><img src="../assets/images/image9.png" alt=""></a>
						</li>
						<li>
							<a href=""><img src="../assets/images/image10.png" alt=""></a>
						</li>
						<li>
							<a href=""><img src="../assets/images/image11.png" alt=""></a>
						</li>
						<li>
							<a href=""><img src="../assets/images/vipcxgg.png" alt=""></a>
						</li>
						<li>
							<a href=""><img src="../assets/images/agecxgg.png" alt=""></a>
						</li>
						
					</ul>
				</div>
			</div>
		</div>
	
	
</template>

<script>
import * as types from '../store/types.js';
import {mapState} from 'vuex';
// import Vue from 'vue';
// import { Swipe, SwipeItem } from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
	export default {
		name:'newActive',
		data(){
			return {
			}
		},
		mounted(){
			this.$store.dispatch(types.BANNER)
		},
		computed:mapState(
			['banner']
		)
	}
	
	
	
</script>


<style>
	.home__active{background: #FC2425}
	.home__act-top{width: 100%;}
	.home__act-top img{width: 100%;}
	.home__act__banner-fir {width: 100%;height: 377px;background: url('../assets/images/bg.png') no-repeat 0 30px;overflow: hidden;background-size: 100% 100%;}
	.home__act__banner-fir .banner-box{margin: 60px 20px 0;}
	.home__act__banner-fir img{width: 712px;display: block;}
	.home__act__banner-fir .mint-swipe-indicators{bottom: 65px}
	.home__act__banner-fir .mint-swipe-indicator{width: 12px;border-radius:50%;height: 12px}
	.home__act__banner-fir .mint-swipe-indicators .is-active{width: 24px;border-radius:12px}
	.home__active__column{height: 346px;width: 100%;overflow: hidden;padding: 0 20px;box-sizing: border-box}
	.home__active__column{}
	.home__active__column ul{height: 290px;display: flex;justify-content: space-between;flex-wrap: wrap;margin-top: 29px;overflow: hidden;width: 710px;}
	.home__active__column ul li{height: 145px;text-align: center;width: 140px}
	.home__active__column ul li img{width: 80px;padding: 0 15px}
	.home__active__column ul li span{display: block;color: #fff;font-size: 24px;line-height: 50px;}
	/* .home__active__column .mint-swipe-items-wrap{overflow-x: hidden;width:100%} */
	.home__active__column .mint-swipe-indicators .mint-swipe-indicator{width: 16px;height: 10px;border-radius: 4px;opacity:.3}
	.home__active__column .mint-swipe-indicators .is-active{width: 25px;height: 10px;background: #fff;opacity:1}
	.home__discount{padding-bottom: 13px}
	.home__discount .home__discount-top{height: 178px;width: 100%;box-sizing: border-box;padding: 0 11px;text-align: center}
	.home__discount .home__discount-top a{display: block;padding:16px 9px;background: #fff;border-radius: 3px}
	.home__discount .home__discount-top img{width: 700px;height: 145px;}
	.home__discount .home__discount-center{padding: 0 20px;box-sizing: border-box;}
	.home__discount .home__discount-center ul{display: flex;justify-content: space-between}
	.home__discount .home__discount-center ul li{width: 170px;margin-top: 38px}
	.home__discount .home__discount-center ul li a{display: block}
	.home__discount .home__discount-center ul li a img{width: 170px;}
	.home__discount .home__discount-bottom{width: 100%;padding: 0 20px;box-sizing: border-box;margin-top: 33px}
	.home__discount .home__discount-bottom ul{display: flex;justify-content: space-between;width: 100%;flex-wrap: wrap}
	.home__discount .home__discount-bottom ul li{width: 345px;margin-bottom: 15px}
	.home__discount .home__discount-bottom ul li a{display: block}
	#home .home__discount .home__discount-bottom ul li a img{width: 345px;height: 186px}
</style>

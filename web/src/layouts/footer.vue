<template>
	<div id="footer">
		<div class="footer__empty"></div>
		<div class="footer__nav">
			<ul class="footer__nav-ul">
				<router-link class="home" tag="li" to="/home/HomeContentPage/1" active-class="home_active"><a href="javascript:;"><i></i><span>首页</span></a></router-link>
				<router-link class="follow" tag="li" to="/follow" active-class="follow__active"><a href="javascript:;"><i></i><span>分类搜索</span></a></router-link>
				<router-link class="buycar" tag="li" to="/buycar" active-class="buycar__active"><a href="javascript:;"><i></i><span>购物车</span></a></router-link>
				<router-link class="user" tag="li" to="/user" active-class="user__active"><a href="javascript:;"><i></i><span>个人中心</span></a></router-link>
			</ul>
		</div>
	</div>
	
	
</template>

<script>
	export default {
		
		data(){
			return {
			}
		}
	}
</script>


<style lang="scss">
	#footer{
		height: 98px;
		padding: 0  20px;
		overflow: hidden;
		.footer__empty{
			height: 98px;
		}
		.footer__nav{
			border-top: 1px solid #eee;
			background: #fff;
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 98px;
			z-index: 1000;
			.footer__nav-ul{
			display: flex;
			justify-content: space-around;
				li{
					width: 142px;
					text-align: center;
					i{
						width: 100%;
						height: 50px;
						display: block;
						margin-top: 12px;
					}
					span{
						color:#cccccc;
						font-size: 22px;
						line-height: 30px;
					}
				}
				.home{
					i{
						background: url(../assets/images/index1.png) no-repeat center 4px;background-size: 43px 43px;
					}
				}
				.home_active{
					i{
						background: url(../assets/images/index-active.png) no-repeat center 4px;background-size: 43px 43px;
					}
				}
				.follow{
					i{
						background: url(../assets/images/classification.png) no-repeat center 4px;background-size: 43px 43px;
					}
				}
				.follow__active{
					i{
						background: url(../assets/images/classification-active.png) no-repeat center 4px;background-size: 43px 43px;
					}
				}
				
				.buycar{
					i{
						background: url(../assets/images/gwc.png) no-repeat center 4px;background-size: 43px 43px;
					}
				}
				.buycar__active{
					i{
						background: url(../assets/images/gwc-active.png) no-repeat center 4px;background-size: 43px 43px;
					}
				}
				.user{
					i{
						background: url(../assets/images/center.png) no-repeat center 4px;background-size: 43px 43px;
					}
				}
				.user__active{
					i{
						background: url(../assets/images/center-active.png) no-repeat center 4px;background-size: 43px 43px;
					}
				}
			}
		}

	}
	
</style>
